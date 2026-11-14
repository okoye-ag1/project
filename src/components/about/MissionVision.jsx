import React from "react";
import { Compass, Target, Zap, ShieldCheck, TrendingUp, Eye } from "lucide-react";
import { companyInfo, coreValues } from "../../data/companyData";
import "../../styles/About.css";

// Helper for dynamic icon resolution
const getValueIcon = (iconName) => {
  switch (iconName) {
    case "Zap":
      return <Zap size={22} />;
    case "ShieldCheck":
      return <ShieldCheck size={22} />;
    case "TrendingUp":
      return <TrendingUp size={22} />;
    case "Eye":
      return <Eye size={22} />;
    default:
      return <Target size={22} />;
  }
};

const MissionVision = () => {
  return (
    <section>
      {/* Mission & Vision Cards */}
      <div className="mission-vision-grid">
        <div className="glass-card mission-card">
          <div className="mission-title">
            <Target size={22} color="var(--accent-blue)" />
            <span>Our Mission</span>
          </div>
          <p className="mission-text">{companyInfo.mission}</p>
        </div>

        <div className="glass-card mission-card">
          <div className="mission-title">
            <Compass size={22} color="var(--accent-purple)" />
            <span>Our Vision</span>
          </div>
          <p className="mission-text">{companyInfo.vision}</p>
        </div>
      </div>

      {/* Core Values Section */}
      <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          Our Guiding Principles & Engineering Values
        </h3>
        <p style={{ color: "var(--text-secondary)" }}>
          The philosophical pillars underpinning every line of code and cloud deployment.
        </p>
      </div>

      <div className="values-grid">
        {coreValues.map((val) => (
          <div key={val.id} className="value-card">
            <div className="value-icon-box">{getValueIcon(val.icon)}</div>
            <h4 className="value-card-title">{val.title}</h4>
            <p className="value-card-desc">{val.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
