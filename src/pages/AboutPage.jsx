import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import MissionVision from "../components/about/MissionVision";
import CompanyHistory from "../components/about/CompanyHistory";
import TeamCard from "../components/about/TeamCard";
import { teamMembers, companyInfo } from "../data/companyData";
import "../styles/About.css";

const AboutPage = () => {
  useEffect(() => {
    document.title = `About Us | ${companyInfo.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      {/* 1. Header Banner */}
      <section className="about-hero">
        <div className="container">
          <div className="section-pill">
            <Building2 size={15} />
            <span>Engineering Excellence Since {companyInfo.foundedYear}</span>
          </div>
          <h1 className="section-title">
            Architecting Resilient Platforms for Tomorrow's Leaders
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "750px", margin: "0 auto" }}>
            NovaTech Solutions is an enterprise engineering practice dedicated to eliminating
            architectural friction. We combine distributed systems principles, applied machine
            learning, and zero-trust cybersecurity to deliver mission-critical software.
          </p>
        </div>
      </section>

      <div className="container">
        {/* 2. What We Do Overview */}
        <section style={{ margin: "4rem 0" }}>
          <div className="glass-card" style={{ padding: "3rem" }}>
            <div className="grid-2" style={{ alignItems: "center", gap: "3rem" }}>
              <div>
                <span className="section-pill" style={{ marginBottom: "0.8rem" }}>
                  What We Do
                </span>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.2rem" }}>
                  Empowering Organizations Through Modern Technology
                </h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1.2rem", lineHeight: 1.7 }}>
                  At NovaTech, we do not believe in superficial fixes. When enterprises partner
                  with us, we audit their systemic bottlenecks, replace brittle infrastructure
                  with self-healing containerized clusters, and integrate compliant AI workflows.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <CheckCircle size={18} color="var(--accent-emerald)" />
                    <span>Multi-tenant Kubernetes engineering with zero-downtime blue/green rollouts</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <CheckCircle size={18} color="var(--accent-emerald)" />
                    <span>Domain-tailored Generative AI assistants with enterprise vector memory</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <CheckCircle size={18} color="var(--accent-emerald)" />
                    <span>Cryptographic zero-trust network segmentation and automated SOC 2 audit readiness</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="NovaTech Engineering Team Working Together"
                  style={{ width: "100%", height: "360px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission, Vision, and Core Values */}
        <MissionVision />

        {/* 4. Company History Timeline */}
        <CompanyHistory />

        {/* 5. Leadership & Engineering Team */}
        <section style={{ padding: "4rem 0" }}>
          <div className="section-header">
            <div className="section-pill">
              <Users size={15} />
              <span>Our People</span>
            </div>
            <h2 className="section-title">The Engineers Behind the Innovation</h2>
            <p className="section-subtitle">
              Meet our team of systems engineers, machine learning researchers, and cloud
              architects committed to engineering excellence.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* 6. Security, Compliance & Trust Section */}
        <section style={{ margin: "2rem 0 5rem" }}>
          <div
            className="glass-card"
            style={{
              padding: "2.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-emerald)", fontWeight: 700, marginBottom: "0.3rem" }}>
                <ShieldCheck size={20} />
                <span>Audited Security & Enterprise Compliance</span>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800 }}>
                Enterprise Rigor Embedded Into Every Engagement
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", maxWidth: "600px" }}>
                All systems engineered by NovaTech undergo continuous static security analysis,
                automated dependency scanning, and zero-trust cryptographic verification.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Talk with an Architect</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
