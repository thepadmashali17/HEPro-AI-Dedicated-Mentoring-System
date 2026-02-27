import React, { useState, useMemo } from "react";
import { studentsTableData } from "../data/mockData";

/* ── helpers ── */
const RISK_ORDER = { Red: 0, Yellow: 1, Blue: 2, Green: 3 };
const CLUSTER_LABELS = {
    0: "At-Risk",
    1: "Transitional",
    2: "High Performer",
    3: "Specialized",
};

function getInitials(name) {
    return name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

function SriBar({ value }) {
    const color =
        value >= 70 ? "#38a169" : value >= 55 ? "#3182ce" : value >= 50 ? "#d69e2e" : "#e53e3e";
    return (
        <div className="sri-cell">
            <div className="sri-bar-bg">
                <div
                    className="sri-bar-fill"
                    style={{ width: `${value}%`, background: color }}
                />
            </div>
            <span className="sri-value" style={{ color }}>
                {value.toFixed(1)}
            </span>
        </div>
    );
}

function RiskBadge({ risk }) {
    const cls = risk.toLowerCase();
    const icons = { red: "🔴", yellow: "🟡", blue: "🔵", green: "🟢" };
    return (
        <span className={`risk-badge ${cls}`}>
            {icons[cls]} {risk}
        </span>
    );
}

function StudentsTable() {
    const [search, setSearch] = useState("");
    const [sortField, setSortField] = useState("risk");
    const [sortDir, setSortDir] = useState("asc");
    const [filterRisk, setFilterRisk] = useState("All");

    const handleSort = (field) => {
        if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
        else { setSortField(field); setSortDir("asc"); }
    };

    const sortIcon = (field) =>
        sortField === field ? (sortDir === "asc" ? " ↑" : " ↓") : " ⇅";

    const filtered = useMemo(() => {
        let rows = [...studentsTableData];

        if (search.trim())
            rows = rows.filter(
                (r) =>
                    r.id.toLowerCase().includes(search.toLowerCase()) ||
                    r.mentor.toLowerCase().includes(search.toLowerCase())
            );

        if (filterRisk !== "All") rows = rows.filter((r) => r.risk === filterRisk);

        rows.sort((a, b) => {
            let va, vb;
            if (sortField === "sri") { va = a.sri; vb = b.sri; }
            else if (sortField === "risk") { va = RISK_ORDER[a.risk]; vb = RISK_ORDER[b.risk]; }
            else if (sortField === "cluster") { va = a.cluster; vb = b.cluster; }
            else return 0;
            return sortDir === "asc" ? va - vb : vb - va;
        });

        return rows;
    }, [search, filterRisk, sortField, sortDir]);

    return (
        <section className="table-section">
            <div className="section-header">
                <div className="section-icon">📋</div>
                <div>
                    <div className="section-title">Student Insights Table</div>
                    <div className="section-subtitle">
                        SRI scores, clusters, and mentor assignments for the cohort
                    </div>
                </div>
            </div>

            <div className="table-wrapper animate-in">
                {/* Toolbar */}
                <div className="table-toolbar">
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <div className="table-search">
                            <span>🔍</span>
                            <input
                                placeholder="Search student or mentor…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        {/* Risk filter */}
                        <div style={{ display: "flex", gap: 6 }}>
                            {["All", "Red", "Yellow", "Blue", "Green"].map((r) => (
                                <button
                                    key={r}
                                    onClick={() => setFilterRisk(r)}
                                    style={{
                                        padding: "5px 12px",
                                        borderRadius: 20,
                                        border: `1px solid ${filterRisk === r ? "#2b6cb0" : "#e2e8f0"}`,
                                        background: filterRisk === r ? "#2b6cb0" : "#fff",
                                        color: filterRisk === r ? "#fff" : "#718096",
                                        fontSize: 12,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        transition: "all 0.15s",
                                    }}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                    </div>
                    <span className="table-count">
                        Showing {filtered.length} of {studentsTableData.length} students
                    </span>
                </div>

                {/* Table */}
                <div style={{ overflowX: "auto" }}>
                    <table className="students-table">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th
                                    style={{ cursor: "pointer", userSelect: "none" }}
                                    onClick={() => handleSort("sri")}
                                >
                                    SRI Score{sortIcon("sri")}
                                </th>
                                <th
                                    style={{ cursor: "pointer", userSelect: "none" }}
                                    onClick={() => handleSort("risk")}
                                >
                                    Risk Category{sortIcon("risk")}
                                </th>
                                <th
                                    style={{ cursor: "pointer", userSelect: "none" }}
                                    onClick={() => handleSort("cluster")}
                                >
                                    Cluster{sortIcon("cluster")}
                                </th>
                                <th>Assigned Mentor</th>
                                <th>Recommended Intervention</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={6} style={{ textAlign: "center", padding: 32, color: "#718096" }}>
                                        No students match your search.
                                    </td>
                                </tr>
                            )}
                            {filtered.map((s) => (
                                <tr
                                    key={s.id}
                                    className={s.risk === "Red" ? "row-risk-red" : ""}
                                >
                                    <td>
                                        <span className="student-id">{s.id}</span>
                                    </td>
                                    <td>
                                        <SriBar value={s.sri} />
                                    </td>
                                    <td>
                                        <RiskBadge risk={s.risk} />
                                    </td>
                                    <td>
                                        <span className="cluster-badge">
                                            C{s.cluster} · {CLUSTER_LABELS[s.cluster]}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="mentor-cell">
                                            <div className="mentor-avatar-sm">
                                                {getInitials(s.mentor)}
                                            </div>
                                            <span className="mentor-name">{s.mentor}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="intervention-text">{s.intervention}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default StudentsTable;
