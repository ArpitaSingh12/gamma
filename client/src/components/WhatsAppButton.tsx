import { useTranslation } from "@/contexts/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useTranslation();
  // Your WhatsApp business number (format: country code + number without + or spaces)
  const whatsappNumber = "255678960061"; // Tanzania number: +255 678 960 061

  const isBrowser = typeof window !== "undefined";
  const isMobile =
    isBrowser && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Open plain chat without any prefilled user message
  const whatsappUrl = isMobile
    ? `https://wa.me/${whatsappNumber}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label={t("common.whatsappAriaLabel") || "Contact us on WhatsApp"}
    >
      {/* WhatsApp Logo SVG */}
      <svg
        viewBox="0 0 32 32"
        className="w-9 h-9"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.828.737 5.484 2.013 7.788L0 32l8.35-2.013A15.931 15.931 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.336c-2.522 0-4.928-.706-6.956-1.925l-.5-.294-5.156 1.244 1.275-5.044-.325-.519A13.276 13.276 0 0 1 2.664 16c0-7.35 5.986-13.336 13.336-13.336S29.336 8.65 29.336 16 23.35 29.336 16 29.336zm7.294-9.95c-.4-.2-2.363-1.169-2.731-1.3-.369-.131-.637-.2-.906.2-.269.4-1.038 1.3-1.269 1.569-.231.269-.469.3-.869.1-.4-.2-1.694-.625-3.225-1.994-1.194-1.063-2-2.375-2.231-2.775-.231-.4-.025-.619.175-.819.181-.181.4-.469.6-.7.2-.231.269-.4.4-.669.131-.269.069-.5-.031-.7-.1-.2-.906-2.187-1.244-2.994-.331-.788-.662-.681-.906-.694-.231-.013-.5-.019-.769-.019s-.706.1-1.075.5c-.369.4-1.406 1.375-1.406 3.356s1.438 3.894 1.638 4.163c.2.269 2.825 4.319 6.844 6.056.956.413 1.706.662 2.288.844.963.306 1.838.263 2.531.156.769-.119 2.363-.969 2.694-1.9.331-.931.331-1.731.231-1.9-.1-.169-.369-.269-.769-.469z" />
      </svg>
      <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {t("common.whatsappTooltip") || "Chat with us"}
      </span>
    </a>
  );
}
