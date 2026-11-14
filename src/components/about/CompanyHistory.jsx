import React from "react";
import { historyMilestones } from "../../data/companyData";
import { History, Milestone } from "lucide-react";
import "../../styles/About.css";

const CompanyHistory = () => {
  return (
    <section className="timeline-section">
      <div className="section-header">
        <div className="section-pill">
          <History size={15} />
          <span>Our Growth & Evolution</span>
        </div>
        <h2 className="section-title">The NovaTech Journey</h2>
        <p className="section-subtitle">
          From a focused Kubernetes consulting team to an international enterprise
          cloud and artificial intelligence powerhouse.
        </p>
      </div>

      <div className="timeline-container">
        {historyMilestones.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-year">{item.year}</div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyHistory;
