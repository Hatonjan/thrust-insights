import rawData from './launchData.json';

// Interface for raw JSON structure
interface RawLaunchRecord {
  flightNumber: number;
  launchSite: string;
  payloadMass: number;
  orbit: string;
  outcome: string;
  boosterVersion: string;
  date: string;
  Class: number;
}

export interface LaunchRecord {
  flightNumber: number;
  launchSite: string;
  outcome: number; // 0 = failure, 1 = success (mapped from Class field)
  payloadMass: number;
  boosterVersion: string;
  boosterVersionCategory: string;
  orbit: string; // Orbit type (LEO, ISS, GTO, etc.)
}

// Transform raw data to match LaunchRecord interface
function transformLaunchData(raw: RawLaunchRecord[]): LaunchRecord[] {
  return raw.map(record => ({
    flightNumber: record.flightNumber,
    launchSite: record.launchSite,
    outcome: record.Class, // Map Class field to outcome
    payloadMass: record.payloadMass,
    boosterVersion: record.boosterVersion,
    boosterVersionCategory: deriveBoosterCategory(record.boosterVersion),
    orbit: record.orbit,
  }));
}

// Derive booster category from booster version string
function deriveBoosterCategory(boosterVersion: string): string {
  const version = boosterVersion.trim().toUpperCase();
  if (version.includes('B5')) return 'B5';
  if (version.includes('B4')) return 'B4';
  if (version.includes('FT')) return 'FT';
  if (version.includes('V1.1')) return 'v1.1';
  if (version.includes('V1.0')) return 'v1.0';
  return 'Other';
}

export const launchData: LaunchRecord[] = transformLaunchData(rawData as RawLaunchRecord[]);

/* Helper functions for data analysis */

export function getSuccessByLaunchSite(site: string): { success: number; total: number } {
  const filtered = site === "All" ? launchData : launchData.filter(d => d.launchSite === site);
  const success = filtered.filter(d => d.outcome === 1).length;
  return { success, total: filtered.length };
}

export function getUniqueLaunchSites(): string[] {
  return ["All", ...Array.from(new Set(launchData.map(d => d.launchSite)))];
}

export function getPayloadRange(): { min: number; max: number } {
  const payloads = launchData.map(d => d.payloadMass);
  return {
    min: Math.min(...payloads),
    max: Math.max(...payloads),
  };
}

export function getUniqueBoosterCategories(): string[] {
  return Array.from(new Set(launchData.map(d => d.boosterVersionCategory))).sort();
}

export function getUniqueOrbits(): string[] {
  const rawLaunchData = rawData as RawLaunchRecord[];
  return Array.from(new Set(rawLaunchData.map(d => d.orbit))).sort();
}

// Map site codes to display names
const siteDisplayNames: Record<string, string> = {
  "CCSFS SLC-40": "Cape Canaveral SLC-40",
  "VAFB SLC-4E": "Vandenberg SLC-4E",
  "KSC LC-39A": "Kennedy LC-39A",
  "CCAFS LC-40": "Cape Canaveral LC-40",
};

export function getSiteDisplayName(siteCode: string): string {
  return siteDisplayNames[siteCode] || siteCode;
}
