import React from "react";
import { useNavigate } from "react-router-dom";
import { X, Trash2, ArrowRight, Briefcase, Sparkles } from "lucide-react";
import { useInquiry } from "../../context/InquiryContext";
import "../../styles/Services.css";

const QuoteDrawer = () => {
  const {
    selectedServices,
    removeService,
    clearInquiries,
    isDrawerOpen,
    setIsDrawerOpen,
    totalEstimatedCost,
  } = useInquiry();

  const navigate = useNavigate();

  if (!isDrawerOpen) return null;

  const handleProceedToContact = () => {
    setIsDrawerOpen(false);
    navigate("/contact", {
      state: {
        prefilledSubject: `Project Inquiry: Scope with ${selectedServices.length} Selected Services`,
        prefilledMessage: `Hello NovaTech Team,\n\nI would like to request an architecture proposal for the following selected solutions:\n${selectedServices
          .map((s, idx) => `${idx + 1}. ${s.title} (Starting from $${s.startingPrice})`)
          .join("\n")}\n\nEstimated project tier: $${totalEstimatedCost.toLocaleString()}\n\nPlease reach out to discuss timelines.`,
      },
    });
  };

  return (
    <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}>
      <aside
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
        aria-label="Project Scope Drawer"
      >
        <div className="drawer-header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Briefcase size={20} color="var(--accent-blue)" />
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Project Scope Cart</h3>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="modal-close-btn"
            aria-label="Close Project Scope"
          >
            <X size={18} />
          </button>
        </div>

        <div className="drawer-list">
          {selectedServices.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--text-muted)" }}>
              <Briefcase size={42} style={{ margin: "0 auto 1rem", opacity: 0.4 }} />
              <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                Your project scope is empty
              </p>
              <p style={{ fontSize: "0.85rem" }}>
                Browse our services and click "Scope" to assemble your custom infrastructure blueprint.
              </p>
            </div>
          ) : (
            selectedServices.map((service) => (
              <div key={service.id} className="drawer-item">
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.2rem" }}>
                    {service.title}
                  </h4>
                  <div style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
                    From ${service.startingPrice.toLocaleString()} • {service.deliveryTime}
                  </div>
                </div>
                <button
                  onClick={() => removeService(service.id)}
                  style={{
                    color: "var(--text-muted)",
                    padding: "0.4rem",
                    borderRadius: "4px",
                  }}
                  title="Remove from scope"
                  aria-label={`Remove ${service.title}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {selectedServices.length > 0 && (
          <div className="drawer-footer">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Total Estimated Base:
              </span>
              <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-cyan)" }}>
                ${totalEstimatedCost.toLocaleString()}
              </span>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
              <button
                type="button"
                onClick={clearInquiries}
                className="btn btn-secondary btn-sm"
                style={{ flex: "0.4" }}
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleProceedToContact}
                className="btn btn-primary"
                style={{ flex: "1" }}
              >
                <span>Request Proposal</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default QuoteDrawer;
