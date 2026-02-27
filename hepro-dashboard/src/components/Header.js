import React from "react";

function Header() {
    const today = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-left">
                    <div className="header-logo">🎓</div>
                    <div className="header-title-group">
                        <div className="header-title">HEPro AI+ Dashboard</div>
                        <div className="header-subtitle">Student Mentoring Insights</div>
                    </div>
                </div>

                <div className="header-right">
                    <div className="header-badge">
                        <span>🤖</span>
                        <span>AI/ML Internship Project</span>
                    </div>
                    <div className="header-date">📅 {today}</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
