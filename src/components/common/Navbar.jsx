import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Layers,
  Sun,
  Moon,
  Menu,
  X,
  Briefcase,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useInquiry } from "../../context/InquiryContext";
import "../../styles/Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { selectedServices, setIsDrawerOpen } = useInquiry();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Listen to window scroll to apply subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <Link to="/" className="brand-link" onClick={closeMobileMenu}>
          <div className="brand-icon">
            <Layers size={22} />
          </div>
          <span className="brand-text">
            NovaTech<span className="brand-dot">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Services & Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="icon-btn"
            title={
              theme === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"
            }
            aria-label="Toggle Theme Mode"
          >
            {theme === "dark" ? (
              <Sun size={19} className="theme-icon" />
            ) : (
              <Moon size={19} className="theme-icon" />
            )}
          </button>

          {/* Project Scope / Inquiry Cart Drawer Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="icon-btn"
            title="View Selected Project Scope"
            aria-label="Project Scope Cart"
          >
            <Briefcase size={19} />
            {selectedServices.length > 0 && (
              <span className="cart-badge">{selectedServices.length}</span>
            )}
          </button>

          {/* Desktop Consultation CTA */}
          <button
            onClick={() => navigate("/contact")}
            className="btn btn-primary btn-sm nav-cta-btn"
          >
            <span>Consult an Architect</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMobileMenu}
        >
          <span>Home</span>
          <ArrowRight size={16} />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMobileMenu}
        >
          <span>About NovaTech</span>
          <ArrowRight size={16} />
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMobileMenu}
        >
          <span>Services & Solutions</span>
          <ArrowRight size={16} />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMobileMenu}
        >
          <span>Contact & Inquiries</span>
          <ArrowRight size={16} />
        </NavLink>

        <div style={{ marginTop: "0.5rem" }}>
          <button
            onClick={() => {
              closeMobileMenu();
              navigate("/contact");
            }}
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            <span>Get Free Architecture Review</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
