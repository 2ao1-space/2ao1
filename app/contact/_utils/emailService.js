export const sendEmailService = async (emailjs, formData, projectType) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const projectTemplateId = process.env.NEXT_PUBLIC_EMAILJS_PROJECT_TEMPLATE_ID;
  const collabTemplateId =
    process.env.NEXT_PUBLIC_EMAILJS_COLLABORATION_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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
