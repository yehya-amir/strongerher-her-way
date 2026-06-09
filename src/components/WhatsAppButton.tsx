import { MessageCircle } from "lucide-react";
import { useLang, WHATSAPP_URL } from "@/i18n";

export function WhatsAppButton() {
  const { t } = useLang();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed z-50 bottom-20 md:bottom-6 right-4 md:right-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all px-4 py-3 text-sm font-medium"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">{t.whatsapp}</span>
    </a>
  );
}
