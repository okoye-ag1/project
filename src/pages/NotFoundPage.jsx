import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="page-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "75vh" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "560px" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "rgba(244, 63, 94, 0.12)",
            color: "var(--accent-rose)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <AlertTriangle size={38} />
        </div>
        <h1 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          404
        </h1>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Route Not Found in NovaTech Cluster
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
          The requested endpoint does not exist or has been relocated. Please check the URL
          or return to the main dashboard.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Link to="/" className="btn btn-primary">
            <Home size={17} />
            <span>Return to Home</span>
          </Link>
          <Link to="/services" className="btn btn-secondary">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
