import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from 'clsx'
import { noHelpDesk } from "@/lib";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleWhatsAppClick = (message: string) => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=${noHelpDesk}&text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, "_blank")
};

export const handleSendEmail = () => {
  const email = 'info@generasicakap.com';
  const subject = '';
  const body = '';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};