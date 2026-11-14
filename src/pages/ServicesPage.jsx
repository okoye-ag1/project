import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Search,
  Filter,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";
import ServiceCard from "../components/services/ServiceCard";
import ServiceFilter from "../components/services/ServiceFilter";
import ServiceDetailModal from "../components/services/ServiceDetailModal";
import QuoteDrawer from "../components/services/QuoteDrawer";
import { servicesData, serviceCategories } from "../data/servicesData";
import { companyInfo } from "../data/companyData";
import "../styles/Services.css";

const ServicesPage = () => {
  // Page Title and scroll reset
  useEffect(() => {
    document.title = `Enterprise Services & Solutions | ${companyInfo.name}`;
    window.scrollTo(0, 0);
  }, []);

  // Search and Category Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalService, setActiveModalService] = useState(null);

  // Filter logic using Array methods (filter, some, toLowerCase)
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      // 1. Category match
      const categoryMatch =
        selectedCategory === "All" || service.category === selectedCategory;

      // 2. Search query match across title, description, and tech stack tags
      const query = searchQuery.trim().toLowerCase();
      if (!query) return categoryMatch;

      const titleMatch = service.title.toLowerCase().includes(query);
      const descMatch =
        service.shortDesc.toLowerCase().includes(query) ||
        service.fullDesc.toLowerCase().includes(query);
      const techMatch = service.techStack.some((tech) =>
        tech.toLowerCase().includes(query)
      );

      return categoryMatch && (titleMatch || descMatch || techMatch);
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="page-wrapper">
      {/* Header Banner */}
      <section className="services-page-header">
        <div className="container">
          <div className="section-pill">
            <Briefcase size={15} />
            <span>Enterprise Solutions Catalog</span>
          </div>
          <h1 className="section-title">
            Scalable Infrastructure, Intelligent AI & Cyber Defense
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Explore our specialized engineering capabilities. Build a customized project
            scope by adding services to your inquiry cart to estimate timelines and budgets.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: "5rem" }}>
        {/* Search & Filter Component */}
        <ServiceFilter
          categories={serviceCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          onResetFilters={handleResetFilters}
          totalResults={filteredServices.length}
        />

        {/* Services Grid using Array.map() */}
        {filteredServices.length > 0 ? (
          <div className="grid-3">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onViewDetails={(svc) => setActiveModalService(svc)}
              />
            ))}
          </div>
        ) : (
          <div
            className="glass-card"
            style={{
              padding: "4rem 2rem",
              textAlign: "center",
              maxWidth: "540px",
              margin: "2rem auto",
            }}
          >
            <Search size={40} style={{ color: "var(--text-muted)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              No Services Matched Your Filter
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginBottom: "1.5rem" }}>
              We could not find any service matching "<strong>{searchQuery}</strong>" in the{" "}
              <strong>{selectedCategory}</strong> category.
            </p>
            <button
              onClick={handleResetFilters}
              className="btn btn-primary"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Custom Solution Inquiry Banner */}
        <div
          className="glass-card"
          style={{
            marginTop: "4.5rem",
            padding: "2.5rem 3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            border: "1px solid rgba(59, 130, 246, 0.25)",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.4rem" }}>
              Need a Bespoke Architectural Solution?
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "600px" }}>
              If your enterprise has unique hybrid cloud requirements, specialized compliance
              mandates, or proprietary data models, our systems architects are ready to construct
              a tailored proposal.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            <span>Schedule Scoping Session</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Reusable Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        isOpen={Boolean(activeModalService)}
        onClose={() => setActiveModalService(null)}
      />

      {/* Project Scope Drawer / Cart */}
      <QuoteDrawer />
    </div>
  );
};

export default ServicesPage;
