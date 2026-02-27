import React from "react";
import { mentorData } from "../data/mockData";

const AVATARS = ["👩‍🏫", "👨‍💼", "👩‍⚕️", "👨‍🔬", "👩‍🌿", "👨‍🚀"];

const TAG_COLORS = {
    Academic: "tag-academic",
    Wellness: "tag-wellness",
    Career: "tag-career",
};

function MentorRoster() {
    return (
        <section className="mentor-section">
            <div className="section-header">
                <div className="section-icon">🧑‍🏫</div>
                <div>
                    <div className="section-title">Mentor Roster</div>
                    <div className="section-subtitle">
                        Assigned mentors and their areas of expertise
                    </div>
                </div>
            </div>

            <div className="mentor-grid">
                {mentorData.map((m, i) => (
                    <div className="mentor-card animate-in" key={m.id}>
                        <div className="mentor-avatar">{AVATARS[i] || "👤"}</div>
                        <div className="mentor-info">
                            <div className="mentor-name">{m.name}</div>
                            <div className="mentor-spec">{m.specialization}</div>
                            <span className={`mentor-expertise-tag ${TAG_COLORS[m.expertise]}`}>
                                {m.expertise}
                            </span>
                        </div>
                        <div className="mentor-rating">⭐ {m.rating}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MentorRoster;
