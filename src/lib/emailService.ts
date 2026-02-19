import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_hc01m1h";
const TEMPLATE_ID = "template_gdhs2uw";
const PUBLIC_KEY = "rhfTsv9WKTmpOXrE0";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const sendApplicationEmail = (data: FormData) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      message: data.message,
    },
    PUBLIC_KEY
  );
};
