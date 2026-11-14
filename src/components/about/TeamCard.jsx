import React from "react";
import "../../styles/About.css";

const TeamCard = ({ member }) => {
  return (
    <div className="team-card">
      <div className="team-img-wrapper">
        <img
          src={member.image}
          alt={member.name}
          className="team-img"
          loading="lazy"
        />
        {member.id === "okoye-david" && (
          <span className="team-lead-badge">Project Developer</span>
        )}
      </div>

      <div className="team-body">
        <h4 className="team-name">{member.name}</h4>
        <div className="team-role">{member.role}</div>
        <p className="team-bio">{member.bio}</p>

        <div className="team-skills">
          {member.skills.map((skill, index) => (
            <span key={index} className="tech-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
