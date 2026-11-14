import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { InquiryProvider, useInquiry } from "./context/InquiryContext";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { CheckCircle2 } from "lucide-react";
import "./styles/index.css";

// Sub-component to render floating Toast notification from context
const ToastNotification = () => {
  const { toastMessage } = useInquiry();
  if (!toastMessage) return null;

  return (
    <aside className="toast-banner" role="status" aria-live="polite">
      <CheckCircle2 size={18} color="var(--accent-emerald)" />
      <span>{toastMessage}</span>
    </aside>
  );
};

function App() {
  return (
    <ThemeProvider>
      <InquiryProvider>
        <Router>
          <div className="app-container">
            {/* Top Navigation */}
            <Navbar />

            {/* Application Page Routes */}
            <main id="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            {/* Global Toast Notification */}
            <ToastNotification />

            {/* Global Footer */}
            <Footer />
          </div>
        </Router>
      </InquiryProvider>
    </ThemeProvider>
  );
}

export default App;
