import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import { companyInfo } from "../data/companyData";
import "../styles/Contact.css";

const faqs = [
  {
    q: "How quickly does NovaTech respond to new architecture inquiries?",
    a: "All submitted technical inquiries are routed directly to our solutions architecture queue. You will receive an initial response and scoping calendar invite within 1 business day.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs) prior to discovery calls?",
    a: "Yes. We execute mutual enterprise NDAs prior to reviewing proprietary source code, infrastructure diagrams, or corporate dataset specifications.",
  },
  {
    q: "What engagement models do you support?",
    a: "We offer both fixed-deliverable project contracts (e.g. cloud migrations, SOC 2 audits, custom LLM rollouts) and dedicated embedded architecture retainers.",
  },
  {
    q: "Are your cloud deployments compatible with our existing security policies?",
    a: "Absolutely. All infrastructure as code (IaC) modules and container architectures are customized to adhere strictly to your internal compliance standards, IAM controls, and network firewalls.",
  },
];

const ContactPage = () => {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(0);

  // Read location state for prefilled values from Scope Cart
  const prefilledSubject = location.state?.prefilledSubject || "";
  const prefilledMessage = location.state?.prefilledMessage || "";

  useEffect(() => {
    document.title = `Contact Architecture Team | ${companyInfo.name}`;
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="page-wrapper">
      {/* 1. Header Banner */}
      <section className="contact-hero">
        <div className="container">
          <div className="section-pill">
            <MessageSquare size={15} />
            <span>Connect With Our Systems Team</span>
          </div>
          <h1 className="section-title">Let's Engineer Something Exceptional</h1>
          <p className="section-subtitle" style={{ maxWidth: "680px", margin: "0 auto" }}>
            Whether you need a full cloud migration, an autonomous AI implementation,
            or a zero-trust compliance assessment, our senior engineers are here to advise you.
          </p>
        </div>
      </section>

      <div className="container">
        {/* 2. Main Two-Column Contact Layout */}
        <div className="contact-layout">
          {/* Left Column: Direct Contact Info Card */}
          <ContactInfo />

          {/* Right Column: Controlled Form Component */}
          <ContactForm
            initialSubject={prefilledSubject}
            initialMessage={prefilledMessage}
          />
        </div>

        {/* 3. Frequently Asked Architecture Questions Accordion */}
        <section style={{ margin: "2rem 0 6rem" }}>
          <div className="section-header">
            <div className="section-pill">
              <HelpCircle size={15} />
              <span>Technical FAQ</span>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Answers to common questions regarding enterprise engagements, security protocols,
              and our development workflow.
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: "1.25rem 1.75rem",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
                onClick={() => toggleFaq(index)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {faq.q}
                  </h4>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      color: "var(--accent-blue)",
                      flexShrink: 0,
                    }}
                  />
                </div>
                {openFaq === index && (
                  <p style={{ marginTop: "0.85rem", fontSize: "0.93rem", lineHeight: 1.65, color: "var(--text-secondary)" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
