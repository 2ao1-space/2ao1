export const sendEmailService = async (emailjs, formData, projectType) => {
  const serviceId = import.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const projectTemplateId = import.meta.env
    .NEXT_PUBLIC_EMAILJS_PROJECT_TEMPLATE_ID;
  const collabTemplateId = import.meta.env
    .NEXT_PUBLIC_EMAILJS_COLLABORATION_TEMPLATE_ID;
  const publicKey = import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !projectTemplateId || !collabTemplateId || !publicKey) {
    throw new Error("Missing EmailJS environment variables");
  }

  const templateId =
    projectType === "collab" ? collabTemplateId : projectTemplateId;

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    service: formData.service,
    timeframe: formData.timeframe,
    budget: formData.budget,
    project_type: projectType,
    reply_to: formData.email,
  };

  const result = await emailjs.send(
    serviceId,
    templateId,
    templateParams,
    publicKey
  );
  return result;
};
