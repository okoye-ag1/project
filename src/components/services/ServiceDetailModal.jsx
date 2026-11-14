import React, { useEffect } from "react";
import {
  X,
  CheckCircle2,
  PackageCheck,
  Clock,
  DollarSign,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useInquiry } from "../../context/InquiryContext";
import "../../styles/Services.css";

const ServiceDetailModal = ({ service, isOpen, onClose }) => {
  const { addService, removeService, isServiceSelected } = useInquiry();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const isSelected = isServiceSelected(service.id);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
      >
        <div className="modal-header">
          <div>
            <span className="section-pill" style={{ marginBottom: "0.4rem" }}>
              {service.category}
            </span>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800 }}>{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close modal dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--text-secondary)", marginBottom: "1.75rem" }}>
            {service.fullDesc}
          </p>

          <div className="grid-2" style={{ marginBottom: "1.75rem", gap: "1rem" }}>
            <div style={{ padding: "1rem", background: "var(--bg-tertiary)", borderRadius: "var(--radius-md)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                <Clock size={16} />
                <span>Estimated Delivery</span>
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {service.deliveryTime}
              </div>
            </div>

            <div style={{ padding: "1rem", background: "var(--bg-tertiary)", borderRadius: "var(--radius-md)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                <DollarSign size={16} />
                <span>Investment Tier</span>
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-cyan)" }}>
                From ${service.startingPrice.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Key Deliverables using Array.map() */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.85rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <PackageCheck size={18} color="var(--accent-blue)" />
              <span>Verified Project Deliverables</span>
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {service.deliverables.map((item, index) => (
                <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags using Array.map() */}
          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ fontSize: "0.9rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Architecture Ecosystem
            </h4>
            <div className="tech-tags">
              {service.techStack.map((tech, idx) => (
                <span key={idx} className="tech-pill" style={{ padding: "0.3rem 0.75rem", fontSize: "0.8rem" }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
            <button onClick={onClose} className="btn btn-secondary">
              Close
            </button>
            <button
              onClick={() => {
                if (isSelected) {
                  removeService(service.id);
                } else {
                  addService(service);
                }
              }}
              className={`btn ${isSelected ? "btn-secondary" : "btn-primary"}`}
            >
              {isSelected ? "Remove from Scope" : "Add to Project Scope"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
