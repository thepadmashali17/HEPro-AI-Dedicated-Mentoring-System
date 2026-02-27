import React, { useState, useEffect } from "react";
import { kpiData } from "../data/mockData";

/* Animated counter hook */
function useCountUp(target, duration = 1200) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration]);

    return value;
}

function KpiCard({ title, raw, suffix = "", color, icon, trend, trendType }) {
    const animated = useCountUp(raw);
    return (
        <div className={`kpi-card ${color} animate-in`}>
            <div className="kpi-card-inner">
                <div>
                    <div className="kpi-value">
                        {typeof animated === "number" && !Number.isInteger(raw)
                            ? (raw).toFixed(1)
                            : animated}
                        {suffix}
                    </div>
                    <div className="kpi-label">{title}</div>
                    {trend && (
                        <div className={`kpi-trend ${trendType}`}>{trend}</div>
                    )}
                </div>
                <div className="kpi-icon-bg">{icon}</div>
            </div>
        </div>
    );
}

function KpiCards() {
    return (
        <section className="kpi-section">
            <div className="section-header">
                <div className="section-icon">📊</div>
                <div>
                    <div className="section-title">Key Performance Indicators</div>
                    <div className="section-subtitle">Live cohort metrics for the current batch</div>
                </div>
            </div>

            <div className="kpi-grid">
                <KpiCard
                    title="Total Students"
                    raw={kpiData.totalStudents}
                    color="blue"
                    icon="👨‍🎓"
                    trend="↑ Batch 2025–26"
                    trendType="up"
                />
                <KpiCard
                    title="High-Risk Students"
                    raw={kpiData.highRiskStudents}
                    color="red"
                    icon="🚨"
                    trend="⚠ Immediate action needed"
                    trendType="down"
                />
                <KpiCard
                    title="Average SRI Score"
                    raw={kpiData.averageSRI}
                    suffix=""
                    color="purple"
                    icon="📈"
                    trend="↑ +2.1 from last semester"
                    trendType="up"
                />
                <KpiCard
                    title="Mentors Assigned"
                    raw={kpiData.mentorsAssigned}
                    color="green"
                    icon="🧑‍🏫"
                    trend="✓ Full coverage achieved"
                    trendType="up"
                />
            </div>
        </section>
    );
}

export default KpiCards;
