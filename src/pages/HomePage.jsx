import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Server,
  Cpu,
} from "lucide-react";
import Hero from "../components/home/Hero";
import StatCounter from "../components/home/StatCounter";
import InteractiveDemo from "../components/home/InteractiveDemo";
import Testimonials from "../components/home/Testimonials";
import ServiceCard from "../components/services/ServiceCard";
import ServiceDetailModal from "../components/services/ServiceDetailModal";
import { servicesData } from "../data/servicesData";
import { companyInfo } from "../data/companyData";

const HomePage = () => {
  const [selectedService, setSelectedService] = React.useState(null);

  useEffect(() => {
    document.title = `${companyInfo.name} | Intelligent Digital Infrastructure`;
    window.scrollTo(0, 0);
  }, []);

  // Display top 3 featured services on home page
  const featuredServices = servicesData.slice(0, 3);

  return (
    <div className="page-wrapper">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stat Counter Strip */}
      <StatCounter />

      {/* 3. Interactive ROI & Infrastructure Estimator */}
      <InteractiveDemo />

      {/* 4. Featured Services Preview */}
      <section className="container" style={{ padding: "4rem 0" }}>
        <div className="section-header">
          <div className="section-pill">
            <Layers size={15} />
            <span>Featured Capabilities</span>
          </div>
          <h2 className="section-title">Engineered for Massive Scale</h2>
          <p className="section-subtitle">
            Explore our foundational service tracks built by industry specialists in
            cloud architecture, machine intelligence, and zero-trust security.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: "3rem" }}>
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onViewDetails={(svc) => setSelectedService(svc)}
            />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="/services" className="btn btn-secondary btn-lg">
            <span>View All Enterprise Services ({servicesData.length})</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 5. Enterprise Testimonials */}
      <Testimonials />

      {/* 6. Strategic Call to Action Banner */}
      <section className="container" style={{ margin: "3rem auto 6rem" }}>
        <div
          className="glass-card"
          style={{
            padding: "3.5rem 2.5rem",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "200px",
              height: "200px",
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, marginBottom: "1rem" }}>
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p style={{ maxWidth: "620px", margin: "0 auto 2rem", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
            Schedule an architecture consultation with our engineering directors. We assess
            your existing workload and deliver an actionable modernization roadmap.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Request Architecture Proposal</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              <span>Learn About Our Methodology</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};

export default HomePage;
