import React from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Heart,
  Code,
} from "lucide-react";
import { companyInfo } from "../../data/companyData";
import "../../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Elevator Pitch */}
          <div className="footer-brand">
            <Link to="/" className="brand-link" onClick={scrollToTop}>
              <div className="brand-icon">
                <Layers size={22} />
              </div>
              <span className="brand-text">
                NovaTech<span className="brand-dot">.</span>
              </span>
            </Link>
            <p className="footer-bio">{companyInfo.description}</p>
            <div className="footer-socials">
              <a
                href={companyInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <Github size={17} />
              </a>
              <a
                href={companyInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={companyInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Twitter Profile"
              >
                <Twitter size={17} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link" onClick={scrollToTop}>
                  About Company
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" onClick={scrollToTop}>
                  Services & Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link" onClick={scrollToTop}>
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Technology Areas */}
          <div>
            <h4 className="footer-heading">Capabilities</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services" className="footer-link" onClick={scrollToTop}>
                  Cloud & Kubernetes
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" onClick={scrollToTop}>
                  Generative AI & LLMs
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" onClick={scrollToTop}>
                  Zero-Trust Security
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" onClick={scrollToTop}>
                  Modern Web Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-heading">Global Headquarters</h4>
            <div className="footer-contact-item">
              <MapPin size={17} />
              <span>{companyInfo.contact.address}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={17} />
              <a href={`mailto:${companyInfo.contact.email}`} style={{ color: "inherit" }}>
                {companyInfo.contact.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone size={17} />
              <span>{companyInfo.contact.phone}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Student Academic Credit */}
        <div className="footer-bottom">
          <div className="student-tagline">
            Designed & Developed by{" "}
            <span className="student-highlight">Okoye Chiemeka David</span> | Matric:{" "}
            <span className="student-highlight">25/sci01/085</span> | Department:{" "}
            <span className="student-highlight">Computer Science</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span>© {new Date().getFullYear()} NovaTech Solutions Inc. All rights reserved.</span>
            <button onClick={scrollToTop} className="back-to-top" aria-label="Scroll to top of page">
              <span>Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
