import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";
import { riskCategoryData, clusterData, averageScoresData } from "../data/mockData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

/* ── shared chart options ── */
const baseFont = { family: "'Inter', -apple-system, sans-serif", size: 12 };

const gridColor = "rgba(0,0,0,0.05)";

/* ═══ Bar Chart — Risk Categories ═══ */
function RiskBarChart() {
    const data = {
        labels: riskCategoryData.labels,
        datasets: [
            {
                label: "Students",
                data: riskCategoryData.values,
                backgroundColor: riskCategoryData.colors.map((c) => c + "cc"),
                borderColor: riskCategoryData.colors,
                borderWidth: 1.5,
                borderRadius: 8,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx) => ` ${ctx.parsed.y} students`,
                },
                bodyFont: baseFont,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: gridColor },
                ticks: { font: baseFont, color: "#718096" },
            },
            x: {
                grid: { display: false },
                ticks: {
                    font: { ...baseFont, size: 11 },
                    color: "#718096",
                    maxRotation: 0,
                },
            },
        },
    };

    return (
        <div className="chart-card animate-in">
            <div className="chart-header">
                <div>
                    <div className="chart-title">Risk Category Distribution</div>
                    <div className="chart-subtitle">SRI-based classification of 500 students</div>
                </div>
                <span className="chart-badge">Activity 2</span>
            </div>
            <div className="chart-wrap">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

/* ═══ Pie Chart — Cluster Distribution ═══ */
function ClusterPieChart() {
    const data = {
        labels: clusterData.labels,
        datasets: [
            {
                data: clusterData.values,
                backgroundColor: clusterData.colors,
                borderColor: "#ffffff",
                borderWidth: 2,
                hoverOffset: 10,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: { ...baseFont, size: 11 },
                    color: "#4a5568",
                    boxWidth: 12,
                    padding: 12,
                },
            },
            tooltip: {
                callbacks: {
                    label: (ctx) =>
                        ` ${ctx.label}: ${ctx.parsed} students (${(
                            (ctx.parsed / 500) *
                            100
                        ).toFixed(1)}%)`,
                },
                bodyFont: baseFont,
            },
        },
    };

    return (
        <div className="chart-card animate-in">
            <div className="chart-header">
                <div>
                    <div className="chart-title">Cluster Distribution</div>
                    <div className="chart-subtitle">K-Means segmentation (k=4)</div>
                </div>
                <span className="chart-badge">Activity 3</span>
            </div>
            <div className="chart-wrap-sm">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
}

/* ═══ Line Chart — Average Scores Over Time ═══ */
function ScoresLineChart() {
    const data = {
        labels: averageScoresData.labels,
        datasets: averageScoresData.datasets.map((ds) => ({
            label: ds.label,
            data: ds.data,
            borderColor: ds.color,
            backgroundColor: ds.color + "14",
            borderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 7,
            pointBackgroundColor: ds.color,
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            tension: 0.4,
            fill: false,
        })),
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: "index",
            intersect: false,
        },
        plugins: {
            legend: {
                position: "top",
                align: "end",
                labels: {
                    font: baseFont,
                    color: "#4a5568",
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 16,
                },
            },
            tooltip: { bodyFont: baseFont, titleFont: baseFont },
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 40,
                max: 90,
                grid: { color: gridColor },
                ticks: { font: baseFont, color: "#718096" },
            },
            x: {
                grid: { display: false },
                ticks: { font: baseFont, color: "#718096" },
            },
        },
    };

    return (
        <div className="chart-card full-width animate-in">
            <div className="chart-header">
                <div>
                    <div className="chart-title">Average Score Trends (APS, WWS, PTMS, CRS)</div>
                    <div className="chart-subtitle">
                        Monthly average across all scoring dimensions — January to June 2025
                    </div>
                </div>
                <span className="chart-badge">Activity 2</span>
            </div>
            <div className="chart-wrap">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

/* ═══ ChartsSection ═══ */
function ChartsSection() {
    return (
        <section className="charts-section">
            <div className="section-header">
                <div className="section-icon">📉</div>
                <div>
                    <div className="section-title">Analytics & Visualizations</div>
                    <div className="section-subtitle">Scoring, clustering, and trend insights</div>
                </div>
            </div>

            <div className="charts-grid">
                <RiskBarChart />
                <ClusterPieChart />
                <ScoresLineChart />
            </div>
        </section>
    );
}

export default ChartsSection;
