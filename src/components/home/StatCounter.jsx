import React from "react";
import { stats } from "../../data/companyData";
import "../../styles/Hero.css";

const StatCounter = () => {
  return (
    <div className="container" style={{ marginTop: "-2rem", position: "relative", zIndex: 10 }}>
      <div className="stats-strip">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-number">{stat.value}</div>
            <div className="stat-name">{stat.label}</div>
            <div className="stat-change">{stat.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCounter;
