"use client";
import { useState } from "react";
import { useEmailJS } from "../_hooks/useEmailJs";

import { validateForm } from "../_utils/formValidation";
import { sendEmailService } from "../_utils/emailService";

import { DynamicInput } from "./DynamicInput";
import { ProjectTypeSelector } from "./ProjectTypeSelector";
import { ContactTemplates } from "./ContactTemplates";
import { EmailLoadingState } from "./LoadingStates";

import Btn from "../../_components/Btn";

export default function ContactPart({ className }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    timeframe: "",
    budget: "",
    service: "",
  });

  const [projectType, setProjectType] = useState("new-project");
  const { email, isLoading, setIsLoading, isMounted } = useEmailJS();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      service: "",
      timeframe: "",
      budget: "",
      email: "",
    });
  };

  const handleProjectTypeChange = (type) => {
    setProjectType(type);

    setFormData((prevData) => ({
      name: prevData.name,
      email: prevData.email,
      timeframe: "",
      budget: type === "collab" ? "" : prevData.budget,
      service: "",
    }));
  };

  const sendEmail = async () => {
    if (!validateForm(formData, projectType)) return;
    if (!email) {
      alert("EmailJS is still loading. Please wait a moment and try again.");
      return;
    }

    setIsLoading(true);

    try {
      await sendEmailService(email, formData, projectType);
      alert("Message sent successfully! Ahmed will get back to you soon.");
      resetForm();
    } catch (err) {
      console.error("EmailJS Error Details:", err);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderDynamicInput = (name, placeholder) => (
    <DynamicInput
      name={name}
      placeholder={placeholder}
      value={formData[name]}
      onChange={handleChange}
      isLoading={isLoading}
      type={name === "email" ? "email" : "text"}
    />
  );

  const currentTemplate = ContactTemplates[projectType];

  return (
    <div className={`${className} `}>
      {/* Project type selector */}
      <ProjectTypeSelector onTypeChange={handleProjectTypeChange} />

      {/* Dynamic contact template */}
      {currentTemplate(renderDynamicInput)}

      {/* Action buttons */}
      <div className="flex sm:flex-row gap-4 pt-10 md:pt-8 sm:justify-start justify-end">
        <Btn
          onClick={sendEmail}
          disabled={isLoading || !email}
          className="text-sm md:text-base h-6 md:h-10 bg-primary-800 hover:bg-main text-tertiary md:py-2 px-4 md:px-8 rounded-full transition-all duration-500 flex justify-center items-center"
        >
          {isLoading ? "Sending..." : "[ Send Message ]"}
        </Btn>
      </div>

      {/* Loading states */}
      {!email && isMounted && <EmailLoadingState />}
      {isLoading && <SendingLoader />}
    </div>
  );
}
