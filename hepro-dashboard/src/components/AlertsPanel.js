import React from "react";
import { alertsData } from "../data/mockData";

function AlertsPanel() {
    return (
        <section className="alerts-section">
            <div className="section-header">
                <div className="section-icon" style={{ background: "rgba(229,62,62,0.1)" }}>
                    🚨
                </div>
                <div>
                    <div className="section-title" style={{ color: "#c53030" }}>
                        High-Risk Student Alerts
                    </div>
                    <div className="section-subtitle">
                        Students below SRI threshold — immediate intervention required
                    </div>
                </div>
            </div>

            <div className="alerts-panel animate-in">
                {/* Panel Header */}
                <div className="alerts-panel-header">
                    <div className="alerts-title-group">
                        <div className="alerts-icon">🚨</div>
                        <div>
                            <div className="alerts-title">Critical Risk Alerts</div>
                            <div className="alerts-subtitle">
                                Flagged by the AI scoring engine — SRI below threshold
                            </div>
                        </div>
                    </div>
                    <div className="alerts-count-badge">
                        <span>⚠</span>
                        <span>{alertsData.length} URGENT</span>
                    </div>
                </div>

                {/* Alert Items */}
                <div className="alerts-list">
                    {alertsData.map((alert, idx) => (
                        <div
                            className="alert-item"
                            key={alert.id}
                            style={{ animationDelay: `${idx * 0.06}s` }}
                        >
                            <div className="alert-dot" />

                            <div className="alert-content">
                                <div className="alert-student-id">Student {alert.id}</div>
                                <div className="alert-message">⚠️ {alert.message}</div>
                                <div className="alert-detail">
                                    Cluster {alert.cluster} · Intervention: {alert.intervention}
                                </div>
                            </div>

                            <div className="alert-mentor" title={`Assigned: ${alert.mentor}`}>
                                👤 {alert.mentor.split(" ").slice(-1)[0]}
                            </div>

                            <div className="alert-sri">
                                <div className="alert-sri-value">{alert.sri.toFixed(1)}</div>
                                <div className="alert-sri-label">SRI</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AlertsPanel;
