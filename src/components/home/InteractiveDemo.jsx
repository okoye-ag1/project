import React, { useState } from "react";
import {
  Calculator,
  Zap,
  TrendingUp,
  Server,
  ShieldCheck,
  Check,
  PlusCircle,
} from "lucide-react";
import { useInquiry } from "../../context/InquiryContext";
import { servicesData } from "../../data/servicesData";
import "../../styles/Hero.css";

const InteractiveDemo = () => {
  const { addService, isServiceSelected } = useInquiry();

  // Interactive State Hooks
  const [scale, setScale] = useState("growth"); // "startup", "growth", "enterprise"
  const [workload, setWorkload] = useState("cloud"); // "cloud", "ai", "security"
  const [volume, setVolume] = useState(5); // Millions of monthly requests

  // Dynamic calculations based on state
  const scaleMultipliers = {
    startup: { baseSavings: 1400, latencyCut: 45, nodes: 4 },
    growth: { baseSavings: 3800, latencyCut: 65, nodes: 12 },
    enterprise: { baseSavings: 9500, latencyCut: 82, nodes: 36 },
  };

  const workloadConfigs = {
    cloud: {
      serviceId: "cloud-devops",
      title: "Cloud Infrastructure & DevOps",
      speedGain: "3.4x Faster Deployments",
      blueprint: "Terraform + Multi-AZ EKS Cluster",
    },
    ai: {
      serviceId: "ai-solutions",
      title: "Enterprise AI & Machine Learning",
      speedGain: "85% Automation Rate",
      blueprint: "Vector DB RAG + Fine-Tuned LLM Pipeline",
    },
    security: {
      serviceId: "cybersecurity",
      title: "Zero-Trust Cybersecurity & Compliance",
      speedGain: "99.9% Threat Mitigation",
      blueprint: "mTLS Zero-Trust Mesh + SOC 2 Telemetry",
    },
  };

  const currentMultiplier = scaleMultipliers[scale];
  const currentWorkload = workloadConfigs[workload];

  const estimatedMonthlySavings = Math.round(
    currentMultiplier.baseSavings + volume * 280
  );
  const latencyReduction = Math.min(
    92,
    currentMultiplier.latencyCut + Math.round(volume * 0.8)
  );
  const clusterNodes = currentMultiplier.nodes + Math.round(volume * 1.5);

  const matchedService = servicesData.find(
    (s) => s.id === currentWorkload.serviceId
  );
  const isAdded = matchedService ? isServiceSelected(matchedService.id) : false;

  const handleAddToScope = () => {
    if (matchedService) {
      addService(matchedService);
    }
  };

  return (
    <div className="container" id="interactive-calculator">
      <div className="interactive-calc-wrapper">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="section-pill">
            <Calculator size={15} />
            <span>Interactive Architecture Estimator</span>
          </div>
          <h2 className="section-title">
            Simulate Your Digital Infrastructure ROI
          </h2>
          <p className="section-subtitle">
            Configure your technical workload parameters below to forecast efficiency gains,
            latency reductions, and estimated monthly cost optimization.
          </p>
        </div>

        <div className="calc-grid">
          {/* Controls Column */}
          <div>
            {/* Business Scale Selection */}
            <div className="calc-control-group">
              <label className="calc-label">
                <span>1. Organization Scale:</span>
                <span style={{ color: "var(--accent-cyan)", textTransform: "capitalize" }}>
                  {scale}
                </span>
              </label>
              <div className="pill-selector">
                <button
                  type="button"
                  className={`pill-option ${scale === "startup" ? "active" : ""}`}
                  onClick={() => setScale("startup")}
                >
                  Startup (&lt; 20 Team)
                </button>
                <button
                  type="button"
                  className={`pill-option ${scale === "growth" ? "active" : ""}`}
                  onClick={() => setScale("growth")}
                >
                  Growth / Scale-Up
                </button>
                <button
                  type="button"
                  className={`pill-option ${scale === "enterprise" ? "active" : ""}`}
                  onClick={() => setScale("enterprise")}
                >
                  Global Enterprise
                </button>
              </div>
            </div>

            {/* Workload Focus */}
            <div className="calc-control-group">
              <label className="calc-label">
                <span>2. Primary Modernization Target:</span>
              </label>
              <div className="pill-selector">
                <button
                  type="button"
                  className={`pill-option ${workload === "cloud" ? "active" : ""}`}
                  onClick={() => setWorkload("cloud")}
                >
                  Cloud & Kubernetes
                </button>
                <button
                  type="button"
                  className={`pill-option ${workload === "ai" ? "active" : ""}`}
                  onClick={() => setWorkload("ai")}
                >
                  Generative AI & LLM
                </button>
                <button
                  type="button"
                  className={`pill-option ${workload === "security" ? "active" : ""}`}
                  onClick={() => setWorkload("security")}
                >
                  Zero-Trust Security
                </button>
              </div>
            </div>

            {/* Traffic Volume Slider */}
            <div className="calc-control-group">
              <div className="calc-label">
                <span>3. Monthly Request Traffic:</span>
                <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>
                  {volume} Million req/month
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="calc-range-slider"
                aria-label="Monthly traffic slider"
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
                <span>1M req/mo</span>
                <span>15M req/mo</span>
                <span>30M+ req/mo</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div>
            <div className="calc-result-box">
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Projected Monthly Savings
              </div>
              <div className="calc-result-val">
                ${estimatedMonthlySavings.toLocaleString()}
                <span style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>/mo</span>
              </div>

              <div className="calc-result-breakdown">
                <div className="calc-row">
                  <span style={{ color: "var(--text-secondary)" }}>Targeted Latency Reduction:</span>
                  <span style={{ fontWeight: 700, color: "var(--accent-emerald)" }}>
                    -{latencyReduction}%
                  </span>
                </div>
                <div className="calc-row">
                  <span style={{ color: "var(--text-secondary)" }}>Recommended Node Sizing:</span>
                  <span style={{ fontWeight: 600 }}>{clusterNodes} Managed Nodes</span>
                </div>
                <div className="calc-row">
                  <span style={{ color: "var(--text-secondary)" }}>Operational Velocity:</span>
                  <span style={{ fontWeight: 600, color: "var(--accent-cyan)" }}>
                    {currentWorkload.speedGain}
                  </span>
                </div>
                <div className="calc-row" style={{ borderBottom: "none" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Recommended Blueprint:</span>
                  <span style={{ fontWeight: 500, fontSize: "0.8rem", textAlign: "right" }}>
                    {currentWorkload.blueprint}
                  </span>
                </div>
              </div>

              {matchedService && (
                <button
                  type="button"
                  onClick={handleAddToScope}
                  className={`btn ${isAdded ? "btn-secondary" : "btn-primary"}`}
                  style={{ width: "100%" }}
                >
                  {isAdded ? (
                    <>
                      <Check size={16} color="var(--accent-emerald)" />
                      <span>In Your Project Scope</span>
                    </>
                  ) : (
                    <>
                      <PlusCircle size={16} />
                      <span>Add {currentWorkload.title} to Scope</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
