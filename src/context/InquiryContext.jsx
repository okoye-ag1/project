import React, { createContext, useContext, useState, useEffect } from "react";

const InquiryContext = createContext();

export const InquiryProvider = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState(() => {
    try {
      const saved = localStorage.getItem("novatech_selected_services");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem("novatech_selected_services", JSON.stringify(selectedServices));
  }, [selectedServices]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addService = (service) => {
    if (!selectedServices.some((item) => item.id === service.id)) {
      setSelectedServices((prev) => [...prev, service]);
      showToast(`"${service.title}" added to your project scope!`);
    } else {
      showToast(`"${service.title}" is already in your project scope.`);
    }
  };

  const removeService = (serviceId) => {
    setSelectedServices((prev) => prev.filter((item) => item.id !== serviceId));
    showToast("Service removed from project scope.");
  };

  const clearInquiries = () => {
    setSelectedServices([]);
    showToast("Project scope reset.");
  };

  const isServiceSelected = (serviceId) => {
    return selectedServices.some((item) => item.id === serviceId);
  };

  const totalEstimatedCost = selectedServices.reduce(
    (total, item) => total + (item.startingPrice || 0),
    0
  );

  return (
    <InquiryContext.Provider
      value={{
        selectedServices,
        addService,
        removeService,
        clearInquiries,
        isServiceSelected,
        isDrawerOpen,
        setIsDrawerOpen,
        totalEstimatedCost,
        toastMessage,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
};
