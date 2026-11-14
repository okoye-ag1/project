import React from "react";
import { Star, MessageSquareQuote } from "lucide-react";
import { clientTestimonials } from "../../data/companyData";
import "../../styles/Hero.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <MessageSquareQuote size={15} />
            <span>Proven Enterprise Impact</span>
          </div>
          <h2 className="section-title">Trusted by High-Velocity Engineering Teams</h2>
          <p className="section-subtitle">
            See how forward-thinking leaders leverage NovaTech's architecture to achieve
            dramatic latency cuts and zero-downtime scalability.
          </p>
        </div>

        <div className="grid-3">
          {clientTestimonials.map((item) => (
            <div key={item.id} className="glass-card testimonial-card">
              <div>
                <div className="testimonial-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" strokeWidth={0} />
                  ))}
                </div>

                <div className="testimonial-metric-tag">{item.metric}</div>

                <p className="testimonial-quote">"{item.quote}"</p>
              </div>

              <div className="testimonial-author">
                <img
                  src={item.avatar}
                  alt={item.clientName}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="author-name">{item.clientName}</div>
                  <div className="author-role">{item.designation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
