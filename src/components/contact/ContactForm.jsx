import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import "../../styles/Contact.css";

const ContactForm = ({ initialSubject = "", initialMessage = "" }) => {
  // Form State using useState
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: initialSubject,
    message: initialMessage,
    serviceInterest: "Cloud Infrastructure",
  });

  // Errors state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // If initial props change (e.g. redirected from scope drawer)
  useEffect(() => {
    if (initialSubject || initialMessage) {
      setFormData((prev) => ({
        ...prev,
        subject: initialSubject || prev.subject,
        message: initialMessage || prev.message,
      }));
    }
  }, [initialSubject, initialMessage]);

  // Validation function
  const validate = (values) => {
    const errs = {};

    // Full name validation
    if (!values.fullName.trim()) {
      errs.fullName = "Full name is required";
    } else if (values.fullName.trim().length < 2) {
      errs.fullName = "Full name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.email.trim()) {
      errs.email = "Email address is required";
    } else if (!emailRegex.test(values.email.trim())) {
      errs.email = "Please enter a valid email address (e.g., name@company.com)";
    }

    // Subject validation
    if (!values.subject.trim()) {
      errs.subject = "Subject is required";
    } else if (values.subject.trim().length < 4) {
      errs.subject = "Subject must be at least 4 characters";
    }

    // Message validation
    if (!values.message.trim()) {
      errs.message = "Message content is required";
    } else if (values.message.trim().length < 15) {
      errs.message = "Please provide more details (at least 15 characters)";
    }

    return errs;
  };

  // Handle Input Changes (onChange)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error on typing if touched
    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle Input Blur for touched state
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

  // Handle Form Submit (onSubmit)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      email: true,
      subject: true,
      message: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate asynchronous server API submission
      setTimeout(() => {
        const ticketId = `NT-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmittedData({
          ...formData,
          ticketId,
          timestamp: new Date().toLocaleString(),
        });
        setIsSubmitting(false);

        // Reset form inputs
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
          serviceInterest: "Cloud Infrastructure",
        });
        setTouched({});
        setErrors({});
      }, 1200);
    }
  };

  // Reset after successful submission to submit another
  const handleSendAnother = () => {
    setSubmittedData(null);
  };

  return (
    <div className="contact-form-card">
      {submittedData ? (
        <div className="success-banner">
          <div className="success-icon-box">
            <CheckCircle2 size={32} />
          </div>
          <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            Inquiry Successfully Transmitted!
          </h3>
          <p style={{ color: "var(--text-secondary)", maxWidth: "480px", margin: "0 auto" }}>
            Thank you, <strong>{submittedData.fullName}</strong>. Your technical inquiry has
            been logged into our architecture triage queue. Our senior solution architect
            will contact you at <strong>{submittedData.email}</strong> within 1 business day.
          </p>

          <div className="success-ticket">
            Reference Tracking ID: {submittedData.ticketId}
          </div>

          <div>
            <button
              type="button"
              onClick={handleSendAnother}
              className="btn btn-secondary"
            >
              <RefreshCw size={15} />
              <span>Submit Another Inquiry</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <h3 className="form-title">Send a Technical Inquiry</h3>
          <p className="form-subtitle">
            Fill out the form below and an enterprise architect will review your project scope.
          </p>

          {/* Full Name Field */}
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              <span>Full Name</span>
              <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Alex Morgan"
              className={`form-control ${touched.fullName && errors.fullName ? "error" : ""}`}
              required
            />
            {touched.fullName && errors.fullName && (
              <div className="error-message">
                <AlertCircle size={14} />
                <span>{errors.fullName}</span>
              </div>
            )}
          </div>

          {/* Email Address Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <span>Corporate Email Address</span>
              <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="alex.morgan@company.com"
              className={`form-control ${touched.email && errors.email ? "error" : ""}`}
              required
            />
            {touched.email && errors.email && (
              <div className="error-message">
                <AlertCircle size={14} />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Subject Field */}
          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              <span>Subject / Project Title</span>
              <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Kubernetes Migration & SOC 2 Compliance"
              className={`form-control ${touched.subject && errors.subject ? "error" : ""}`}
              required
            />
            {touched.subject && errors.subject && (
              <div className="error-message">
                <AlertCircle size={14} />
                <span>{errors.subject}</span>
              </div>
            )}
          </div>

          {/* Area of Interest */}
          <div className="form-group">
            <label htmlFor="serviceInterest" className="form-label">
              <span>Primary Technical Domain</span>
            </label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Cloud Infrastructure">Cloud Infrastructure & DevOps</option>
              <option value="AI & Machine Learning">Enterprise AI & Machine Learning</option>
              <option value="Zero-Trust Cybersecurity">Zero-Trust Cybersecurity & Audit</option>
              <option value="Custom Engineering">Full-Stack Web & Mobile Engineering</option>
              <option value="Data Engineering">Data Lakehouse & Streaming Analytics</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              <span>Detailed Project Message</span>
              <span className="required-star">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Please describe your current technology stack, challenge, target timeline, or project expectations..."
              className={`form-control ${touched.message && errors.message ? "error" : ""}`}
              required
            />
            {touched.message && errors.message && (
              <div className="error-message">
                <AlertCircle size={14} />
                <span>{errors.message}</span>
              </div>
            )}
          </div>

          {/* Submit Button with Loading State */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary btn-lg"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Validating & Dispatching...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Submit Technical Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
