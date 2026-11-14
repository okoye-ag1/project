import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { companyInfo } from "../../data/companyData";
import "../../styles/Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headlines & CTAs */}
          <div>
            <div className="hero-badge-pill">
              <Sparkles size={15} />
              <span>Next-Gen Enterprise Cloud & AI Engineering</span>
            </div>

            <h1 className="hero-title">
              Welcome to{" "}
              <span className="gradient-text">{companyInfo.name}</span>
            </h1>

            <p className="hero-lead">
              {companyInfo.tagline}. We help organizations modernize legacy systems,
              deploy autonomous Generative AI pipelines, and establish zero-trust security
              with resilient, high-velocity software engineering.
            </p>

            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary btn-lg">
                <span>Explore Services</span>
                <ArrowRight size={18} />
              </Link>

              <button
                onClick={() => {
                  const element = document.getElementById("interactive-calculator");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/services");
                  }
                }}
                className="btn btn-secondary btn-lg"
              >
                <span>Calculate Cloud ROI</span>
              </button>
            </div>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" />
                <span>ISO 27001 Certified</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" />
                <span>SOC 2 Type II Audited</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" />
                <span>99.99% Guaranteed SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Console Preview */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="terminal-title">novatech-cluster-orchestrator.ts</div>
                <Terminal size={16} color="var(--accent-cyan)" />
              </div>

              <pre className="terminal-code">
                <code>
                  <span className="code-keyword">import</span> &#123; CloudMesh, LLMAgent &#125; <span className="code-keyword">from</span> <span className="code-str">'@novatech/core'</span>;<br /><br />
                  <span className="code-comment">// Instantiate resilient infrastructure</span><br />
                  <span className="code-keyword">const</span> mesh = <span className="code-keyword">new</span> <span className="code-fn">CloudMesh</span>(&#123;<br />
                  &nbsp;&nbsp;provider: <span className="code-str">'multi-cloud'</span>,<br />
                  &nbsp;&nbsp;zeroTrust: <span className="code-keyword">true</span>,<br />
                  &nbsp;&nbsp;autoScale: <span className="code-str">'autonomous'</span><br />
                  &#125;);<br /><br />
                  <span className="code-keyword">await</span> mesh.<span className="code-fn">deploy</span>();<br />
                  <span className="code-comment">// Output: Cluster active [99.99% SLA]</span>
                </code>
              </pre>

              <div className="hero-metric-bar">
                <div className="metric-box">
                  <div className="metric-val">12ms</div>
                  <div className="metric-label">Global Latency</div>
                </div>
                <div className="metric-box">
                  <div className="metric-val">100%</div>
                  <div className="metric-label">Zero-Trust Audit</div>
                </div>
                <div className="metric-box">
                  <div className="metric-val">0s</div>
                  <div className="metric-label">Deployment Lag</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
