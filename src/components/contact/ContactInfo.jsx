import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Copy,
  Check,
  ShieldAlert,
} from "lucide-react";
import { companyInfo } from "../../data/companyData";
import "../../styles/Contact.css";

const ContactInfo = () => {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <div className="contact-info-card">
      <div>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          Contact Information
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>
          Reach out to our global technical consulting team or visit our Silicon Valley
          engineering headquarters.
        </p>
      </div>

      {/* Physical Address */}
      <div className="contact-channel">
        <div className="channel-icon">
          <MapPin size={22} />
        </div>
        <div>
          <div className="channel-title">Corporate Headquarters</div>
          <div className="channel-content">{companyInfo.contact.address}</div>
        </div>
      </div>

      {/* Official Email */}
      <div className="contact-channel">
        <div className="channel-icon">
          <Mail size={22} />
        </div>
        <div>
          <div className="channel-title">Direct Inquiries</div>
          <div className="channel-content">{companyInfo.contact.email}</div>
          <button
            type="button"
            className="copy-pill-btn"
            onClick={() => handleCopy(companyInfo.contact.email, "email")}
          >
            {copiedKey === "email" ? (
              <>
                <Check size={12} color="var(--accent-emerald)" />
                <span style={{ color: "var(--accent-emerald)" }}>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Phone Number */}
      <div className="contact-channel">
        <div className="channel-icon">
          <Phone size={22} />
        </div>
        <div>
          <div className="channel-title">Telephone & Hotline</div>
          <div className="channel-content">{companyInfo.contact.phone}</div>
          <button
            type="button"
            className="copy-pill-btn"
            onClick={() => handleCopy("+18005556682", "phone")}
          >
            {copiedKey === "phone" ? (
              <>
                <Check size={12} color="var(--accent-emerald)" />
                <span style={{ color: "var(--accent-emerald)" }}>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy Number</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Operating Hours & Incident Hotline */}
      <div className="contact-channel">
        <div className="channel-icon">
          <Clock size={22} />
        </div>
        <div>
          <div className="channel-title">Working Hours & Operations</div>
          <div className="channel-content">{companyInfo.contact.businessHours}</div>
        </div>
      </div>

      {/* Security Response Badge */}
      <div
        style={{
          padding: "1rem",
          background: "var(--bg-tertiary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--border-subtle)",
          display: "flex",
          gap: "0.75rem",
          alignItems: "center",
          fontSize: "0.85rem",
        }}
      >
        <ShieldAlert size={20} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
        <span style={{ color: "var(--text-secondary)" }}>
          Existing enterprise clients with mission-critical SLA tier can page our 24/7
          on-call SRE via the encrypted client portal.
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
