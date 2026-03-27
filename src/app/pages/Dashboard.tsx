import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { launchData, getUniqueLaunchSites, getPayloadRange, getUniqueOrbits, getSiteDisplayName } from "../data/launchData";

export function Dashboard() {
    const launchSites = useMemo(() => getUniqueLaunchSites(), []);
    const payloadBounds = useMemo(() => getPayloadRange(), []);
    const orbits = useMemo(() => getUniqueOrbits(), []);
    
    const [selectedSite, setSelectedSite] = useState<string>("All");
    const [payloadRange, setPayloadRange] = useState<[number, number]>([payloadBounds.min, payloadBounds.max]);

  // Light blues for common orbits, darker blues for higher altitudes,
    const orbitColors: Record<string, string> = {
        'ES-L1': '#E0F2FF',
        'GEO'  : '#94a9c7',
        'GTO'  : '#6b727a',
        'HCO'  : '#5b779f',
        'HEO'  : '#87CEEB',
        'ISS'  : '#45a8b5',
        'LEO'  : '#1190a0',
        'MEO'  : '#82b4ff',
        'MO'   : '#1f78de',
        'PO'   : '#0253d6',
        'SO'   : '#7e80f6',
        'SSO'  : '#5e2cdc',
        'TLI'  : '#8437d1',
        'VLEO' : '#9e26bc'
    };

  // Filter data based on selections
    const filteredData = useMemo(() => {
    return launchData.filter(
            (d) =>
            (selectedSite === "All" || d.launchSite === selectedSite) &&
            d.payloadMass >= payloadRange[0] &&
            d.payloadMass <= payloadRange[1]
        );
    }, [selectedSite, payloadRange]);

  // Prepare pie chart data
    const pieData = useMemo(() => {
        if (selectedSite === "All") {
            const siteSuccess = new Map<string, number>();
            filteredData.forEach((d) => {
                if (d.outcome === 1) {
                siteSuccess.set(d.launchSite, (siteSuccess.get(d.launchSite) || 0) + 1);
                }
            });
            return Array.from(siteSuccess).map(([site, count]) => ({
                name: site,
                value: count,
            }));
        } else {
            const outcomeCount = new Map<string, number>();
            filteredData.forEach((d) => {
                const outcome = d.outcome === 1 ? "Success" : "Failure";
                outcomeCount.set(outcome, (outcomeCount.get(outcome) || 0) + 1);
            });
            return Array.from(outcomeCount).map(([outcome, count]) => ({
                name: outcome,
                value: count,
            }));
        }
    }, 
    [filteredData, selectedSite]);

    // Prepare scatter chart data
    const scatterData = useMemo(() => {
        return filteredData.map((d) => ({
            x: d.payloadMass,
            y: d.outcome,
            orbit: d.orbit,
            flightNumber: d.flightNumber,
        }));
    }, [filteredData]);

    // Pie chart colors matching the blue/gray palette
    const pieColors = [
        '#94a9c7',  
        '#1190a0',  
        '#1f78de',  
        '#8437d1',  
    ];

    return (
        <div className="dashboard-container">
            <Navigation />

            {/* Dashboard Header */}
            <section className="dashboard-header">
                <div className="dashboard-header-content">
                    <h2 className="dashboard-title">
                        SpaceX Launch Records Dashboard
                    </h2>
                    <p className="dashboard-subtitle">
                        Explore SpaceX launch data across multiple dimensions: Payload mass correlation, performance by orbit type, and success rates by site .
                    </p>
                </div>
            </section>

            {/* Controls Section */}
            <section className="dashboard-controls">
                <div className="dashboard-controls-grid">
                    {/* Launch Site Dropdown */}
                    <div className="dashboard-form-group">
                        <label className="dashboard-form-label">Select Launch Site</label>
                        <select
                            value={selectedSite}
                            onChange={(e) => setSelectedSite(e.target.value)}
                            className="dashboard-form-select"
                        >
                            {launchSites.map((site) => (
                                <option key={site} value={site}>
                                    {getSiteDisplayName(site)}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Payload Range Slider */}
                    <div className="dashboard-form-group">
                        <label className="dashboard-form-label">
                            Payload Range: {payloadRange[0].toLocaleString()} - {payloadRange[1].toLocaleString()} kg
                        </label>
                        <div className="dashboard-slider-container">
                            <input
                                type="range"
                                min={payloadBounds.min}
                                max={payloadBounds.max}
                                step={500}
                                value={payloadRange[0]}
                                onChange={(e) => setPayloadRange([Number(e.target.value), payloadRange[1]])}
                                className="dashboard-slider"
                            />
                            <input
                                type="range"
                                min={payloadBounds.min}
                                max={payloadBounds.max}
                                step={500}
                                value={payloadRange[1]}
                                onChange={(e) => setPayloadRange([payloadRange[0], Number(e.target.value)])}
                                className="dashboard-slider"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Charts Section */}
            <section className="dashboard-charts">
                    {/* Scatter Chart */}
                    <div className="dashboard-chart-card mb-12">
                        <h2 className="dashboard-chart-title">
                            Launch Outcome vs Payload Mass
                        </h2>
                        {scatterData.length > 0 ? (
                            <ResponsiveContainer width="100%" height={400}>
                                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--muted-foreground)" />
                                    <XAxis
                                        type="number"
                                        dataKey="x"
                                        name="Payload Mass (kg)"
                                        stroke="var(--muted-foreground)"
                                        label={{ value: "Payload Mass (kg)", position: "insideBottomLeft", offset: -10, fill: "var(--foreground)" }}
                                    />
                                    <YAxis
                                        type="number"
                                        dataKey="y"
                                        name="Outcome"
                                        stroke="var(--muted-foreground)"
                                        domain={[-0.5, 1.5]}
                                        ticks={[0, 1]}
                                        tickFormatter={(value) => (value === 0 ? "Failure" : "Success")}
                                        label={{ value: "Outcome", angle: -90, position: "insideLeftTop", offset: 10, fill: "var(--foreground)" }}
                                    />
                                    <Tooltip
                                        cursor={{ strokeDasharray: "3 3" }}
                                        contentStyle={{
                                            backgroundColor: "var(--card)",
                                            border: "1px solid var(--muted-foreground)",
                                            borderRadius: "5px",
                                            color: "#F8FAFC",
                                        }}
                                        labelStyle={{ color: "#F8FAFC" }}
                                        formatter={(value: any) => {
                                            if (typeof value === "number" && (value === 0 || value === 1)) {
                                                return [value === 0 ? "Failure" : "Success", "Outcome"];
                                            }
                                            return value;
                                        }}
                                        itemStyle={{ color: "#F8FAFC" }}
                                    />
                                    {orbits.map((orbit) => (
                                        <Scatter
                                            key={orbit}
                                            name={orbit}
                                            data={scatterData.filter((d) => d.orbit === orbit)}
                                            fill={orbitColors[orbit] || "var(--secondary)"}
                                        />
                                    ))}
                                    <Legend
                                        verticalAlign="bottom"
                                        height={50}
                                        wrapperStyle={{ 
                                            paddingTop: "1rem",
                                            marginBottom: "-2rem",
                                            backgroundColor: "var(--background)",
                                            border: "1px solid var(--muted-foreground)",
                                            borderRadius: "5px",
                                            padding: "0.5rem",
                                        }}
                                    />
                                </ScatterChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="dashboard-no-data">
                                <p className="dashboard-no-data-text">No data available for this selection</p>
                            </div>
                        )}
                    </div>

                    {/* Pie Chart */}
                    <div className="dashboard-chart-card">
                        <h2 className="dashboard-chart-title">
                            {selectedSite === "All" ? "Successful Launches by Site" : `Outcomes at ${selectedSite}`}
                        </h2>
                        {pieData.length > 0 ? (
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, value }) => `${name}: ${value}`}
                                        outerRadius={80}
                                        fill="#FF5C00"
                                        dataKey="value"
                                    >
                                        {pieData.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "var(--card)",
                                            border: "1px solid var(--muted-foreground)",
                                            borderRadius: "5px",
                                        }}
                                        labelStyle={{ color: "var(--foreground)" }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="dashboard-no-data">
                                <p className="dashboard-no-data-text">No data available for this selection</p>
                            </div>
                        )}
                    </div>
            </section>

            {/* Stats Section */}
            <section className="dashboard-stats">
                <div className="dashboard-stats-grid">
                    <div className="dashboard-stat-card">
                        <div className="dashboard-stat-value" style={{ color: "var(--primary)" }}>
                            {filteredData.filter((d) => d.outcome === 1).length}
                        </div>
                        <div className="dashboard-stat-label">Successful Launches</div>
                    </div>
                    <div className="dashboard-stat-card">
                        <div className="dashboard-stat-value" style={{ color: "var(--secondary)" }}>
                            {filteredData.length}
                        </div>
                        <div className="dashboard-stat-label">Total Launches</div>
                    </div>
                    <div className="dashboard-stat-card">
                        <div className="dashboard-stat-value" style={{ color: "var(--stable-green)" }}>
                            {filteredData.length > 0
                                ? ((filteredData.filter((d) => d.outcome === 1).length / filteredData.length) * 100).toFixed(1)
                                : "0"}
                            %
                        </div>
                        <div className="dashboard-stat-label">Success Rate</div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
