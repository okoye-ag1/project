import React from "react";
import {
  Cloud,
  Cpu,
  Shield,
  Code,
  Database,
  Layers,
  CheckCircle,
  Plus,
  Check,
  Eye,
  Clock,
  Star,
} from "lucide-react";
import { useInquiry } from "../../context/InquiryContext";
import "../../styles/Services.css";

// Dynamic Icon resolver based on service definition
const getServiceIcon = (iconName) => {
  switch (iconName) {
    case "Cloud":
      return <Cloud size={22} />;
    case "Cpu":
      return <Cpu size={22} />;
    case "Shield":
      return <Shield size={22} />;
    case "Code":
      return <Code size={22} />;
    case "Database":
      return <Database size={22} />;
    case "Layers":
    default:
      return <Layers size={22} />;
  }
};

const ServiceCard = ({ service, onViewDetails }) => {
  const { addService, removeService, isServiceSelected } = useInquiry();
  const isSelected = isServiceSelected(service.id);

  const handleScopeToggle = () => {
    if (isSelected) {
      removeService(service.id);
    } else {
      addService(service);
    }
  };

  return (
    <article className="service-card">
      {/* Service Header Visual */}
      <div className="service-img-wrapper">
        <img
          src={service.image}
          alt={service.title}
          className="service-img"
          loading="lazy"
        />
        {service.badge && (
          <span className="service-badge">{service.badge}</span>
        )}
      </div>

      <div className="service-body">
        {/* Icon & Category */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="service-icon-bubble">
            {getServiceIcon(service.iconName)}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", color: "#fbbf24" }}>
            <Star size={14} fill="#fbbf24" strokeWidth={0} />
            <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>{service.rating}</span>
            <span style={{ color: "var(--text-muted)" }}>({service.reviewsCount})</span>
          </div>
        </div>

        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.shortDesc}</p>

        {/* Feature List using Array.map() */}
        <ul className="service-feature-list" aria-label="Key Features">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="service-feature-item">
              <CheckCircle size={15} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Pills using Array.map() */}
        <div className="tech-tags" aria-label="Technology Stack">
          {service.techStack.map((tech, index) => (
            <span key={index} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Card Pricing & Actions Footer */}
        <div className="service-footer">
          <div className="service-pricing">
            <span className="pricing-label">Starting From</span>
            <span className="pricing-amount">${service.startingPrice.toLocaleString()}</span>
          </div>

          <div className="service-action-btns">
            <button
              type="button"
              onClick={() => onViewDetails(service)}
              className="btn btn-secondary btn-sm"
              title="View full specifications"
            >
              <Eye size={15} />
              <span>Details</span>
            </button>

            <button
              type="button"
              onClick={handleScopeToggle}
              className={`btn btn-sm ${
                isSelected ? "btn-secondary" : "btn-primary"
              }`}
              style={{
                borderColor: isSelected ? "var(--accent-emerald)" : undefined,
                color: isSelected ? "var(--accent-emerald)" : undefined,
              }}
              title={isSelected ? "Remove from scope" : "Add to project inquiry"}
            >
              {isSelected ? (
                <>
                  <Check size={15} />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus size={15} />
                  <span>Scope</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
