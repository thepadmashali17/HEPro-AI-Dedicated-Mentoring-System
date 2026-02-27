import React from "react";
import Header from "../components/Header";
import KpiCards from "../components/KpiCards";
import ChartsSection from "../components/ChartsSection";
import StudentsTable from "../components/StudentsTable";
import AlertsPanel from "../components/AlertsPanel";
import MentorRoster from "../components/MentorRoster";

function Dashboard() {
    return (
        <>
            <Header />
            <main className="main-content">
                {/* ① KPI Cards */}
                <KpiCards />

                {/* ② Charts */}
                <ChartsSection />

                {/* ③ Alerts Panel — shown before table for priority */}
                <AlertsPanel />

                {/* ④ Student Table */}
                <StudentsTable />

                {/* ⑤ Mentor Roster */}
                <MentorRoster />
            </main>

            <footer className="footer">
                HEPro AI+ &nbsp;·&nbsp; Dedicated Mentoring System &nbsp;·&nbsp;
                AIML Internship Project &nbsp;·&nbsp; 500 Students · 4 Activities · 6 Mentors
            </footer>
        </>
    );
}

export default Dashboard;
