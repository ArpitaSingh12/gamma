import { useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

// Full list of Google Translate language codes with country codes
const languages = [
  { code: "af", label: "Afrikaans", countryCode: "za" },
  { code: "sq", label: "Albanian", countryCode: "al" },
  { code: "am", label: "Amharic", countryCode: "et" },
  { code: "ar", label: "Arabic", countryCode: "sa" },
  { code: "hy", label: "Armenian", countryCode: "am" },
  { code: "az", label: "Azerbaijani", countryCode: "az" },
  { code: "eu", label: "Basque", countryCode: "es" },
  { code: "be", label: "Belarusian", countryCode: "by" },
  { code: "bn", label: "Bengali", countryCode: "bd" },
  { code: "bs", label: "Bosnian", countryCode: "ba" },
  { code: "bg", label: "Bulgarian", countryCode: "bg" },
  { code: "ca", label: "Catalan", countryCode: "es" },
  { code: "ceb", label: "Cebuano", countryCode: "ph" },
  { code: "ny", label: "Chichewa", countryCode: "mw" },
  { code: "zh-CN", label: "Chinese (Simplified)", countryCode: "cn" },
  { code: "zh-TW", label: "Chinese (Traditional)", countryCode: "tw" },
  { code: "co", label: "Corsican", countryCode: "fr" },
  { code: "hr", label: "Croatian", countryCode: "hr" },
  { code: "cs", label: "Czech", countryCode: "cz" },
  { code: "da", label: "Danish", countryCode: "dk" },
  { code: "nl", label: "Dutch", countryCode: "nl" },
  { code: "en", label: "English", countryCode: "gb" },
  { code: "eo", label: "Esperanto", countryCode: "eu" },
  { code: "et", label: "Estonian", countryCode: "ee" },
  { code: "tl", label: "Filipino", countryCode: "ph" },
  { code: "fi", label: "Finnish", countryCode: "fi" },
  { code: "fr", label: "French", countryCode: "fr" },
  { code: "fy", label: "Frisian", countryCode: "nl" },
  { code: "gl", label: "Galician", countryCode: "es" },
  { code: "ka", label: "Georgian", countryCode: "ge" },
  { code: "de", label: "German", countryCode: "de" },
  { code: "el", label: "Greek", countryCode: "gr" },
  { code: "gu", label: "Gujarati", countryCode: "in" },
  { code: "ht", label: "Haitian Creole", countryCode: "ht" },
  { code: "ha", label: "Hausa", countryCode: "ng" },
  { code: "haw", label: "Hawaiian", countryCode: "us" },
  { code: "iw", label: "Hebrew", countryCode: "il" },
  { code: "hi", label: "Hindi", countryCode: "in" },
  { code: "hmn", label: "Hmong", countryCode: "la" },
  { code: "hu", label: "Hungarian", countryCode: "hu" },
  { code: "is", label: "Icelandic", countryCode: "is" },
  { code: "ig", label: "Igbo", countryCode: "ng" },
  { code: "id", label: "Indonesian", countryCode: "id" },
  { code: "ga", label: "Irish", countryCode: "ie" },
  { code: "it", label: "Italian", countryCode: "it" },
  { code: "ja", label: "Japanese", countryCode: "jp" },
  { code: "jw", label: "Javanese", countryCode: "id" },
  { code: "kn", label: "Kannada", countryCode: "in" },
  { code: "kk", label: "Kazakh", countryCode: "kz" },
  { code: "km", label: "Khmer", countryCode: "kh" },
  { code: "ko", label: "Korean", countryCode: "kr" },
  { code: "ku", label: "Kurdish (Kurmanji)", countryCode: "tr" },
  { code: "ky", label: "Kyrgyz", countryCode: "kg" },
  { code: "lo", label: "Lao", countryCode: "la" },
  { code: "la", label: "Latin", countryCode: "va" },
  { code: "lv", label: "Latvian", countryCode: "lv" },
  { code: "lt", label: "Lithuanian", countryCode: "lt" },
  { code: "lb", label: "Luxembourgish", countryCode: "lu" },
  { code: "mk", label: "Macedonian", countryCode: "mk" },
  { code: "mg", label: "Malagasy", countryCode: "mg" },
  { code: "ms", label: "Malay", countryCode: "my" },
  { code: "ml", label: "Malayalam", countryCode: "in" },
  { code: "mt", label: "Maltese", countryCode: "mt" },
  { code: "mi", label: "Maori", countryCode: "nz" },
  { code: "mr", label: "Marathi", countryCode: "in" },
  { code: "mn", label: "Mongolian", countryCode: "mn" },
  { code: "my", label: "Myanmar (Burmese)", countryCode: "mm" },
  { code: "ne", label: "Nepali", countryCode: "np" },
  { code: "no", label: "Norwegian", countryCode: "no" },
  { code: "ps", label: "Pashto", countryCode: "af" },
  { code: "fa", label: "Persian", countryCode: "ir" },
  { code: "pl", label: "Polish", countryCode: "pl" },
  { code: "pt", label: "Portuguese", countryCode: "pt" },
  { code: "pa", label: "Punjabi", countryCode: "in" },
  { code: "ro", label: "Romanian", countryCode: "ro" },
  { code: "ru", label: "Russian", countryCode: "ru" },
  { code: "sm", label: "Samoan", countryCode: "ws" },
  { code: "gd", label: "Scots Gaelic", countryCode: "gb" },
  { code: "sr", label: "Serbian", countryCode: "rs" },
  { code: "st", label: "Sesotho", countryCode: "ls" },
  { code: "sn", label: "Shona", countryCode: "zw" },
  { code: "sd", label: "Sindhi", countryCode: "pk" },
  { code: "si", label: "Sinhala", countryCode: "lk" },
  { code: "sk", label: "Slovak", countryCode: "sk" },
  { code: "sl", label: "Slovenian", countryCode: "si" },
  { code: "so", label: "Somali", countryCode: "so" },
  { code: "es", label: "Spanish", countryCode: "es" },
  { code: "su", label: "Sundanese", countryCode: "id" },
  { code: "sw", label: "Swahili", countryCode: "tz" },
  { code: "sv", label: "Swedish", countryCode: "se" },
  { code: "tg", label: "Tajik", countryCode: "tj" },
  { code: "ta", label: "Tamil", countryCode: "in" },
  { code: "te", label: "Telugu", countryCode: "in" },
  { code: "th", label: "Thai", countryCode: "th" },
  { code: "tr", label: "Turkish", countryCode: "tr" },
  { code: "uk", label: "Ukrainian", countryCode: "ua" },
  { code: "ur", label: "Urdu", countryCode: "pk" },
  { code: "uz", label: "Uzbek", countryCode: "uz" },
  { code: "vi", label: "Vietnamese", countryCode: "vn" },
  { code: "cy", label: "Welsh", countryCode: "gb" },
  { code: "xh", label: "Xhosa", countryCode: "za" },
  { code: "yi", label: "Yiddish", countryCode: "il" },
  { code: "yo", label: "Yoruba", countryCode: "ng" },
  { code: "zu", label: "Zulu", countryCode: "za" },
];

// Function to get flag image URL from country code using a reliable CDN
const getFlagImageUrl = (countryCode: string): string => {
  return `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${countryCode.toLowerCase()}.svg`;
};

export default function GoogleTranslateWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }

    const scriptId = "google-translate-script";
    if (document.getElementById(scriptId)) return;

    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;

      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    const handleClick = () => {
      const menu = document.querySelector(".goog-te-menu-frame.skiptranslate");
      if (menu) document.body.style.overflow = "visible";
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const selectLanguage = (code: string) => {
    setCurrentLanguage(code);

    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = code;
      const event = document.createEvent("HTMLEvents");
      event.initEvent("change", true, true);
      combo.dispatchEvent(event);
    }

    // Save language preference
    localStorage.setItem("preferredLanguage", code);

    setIsOpen(false);
    setSearch("");
  };

  // Get current language data
  const currentLangData = languages.find((lang) => lang.code === currentLanguage);
  const currentCountryCode = currentLangData?.countryCode || "gb";
  const currentLabel = currentLangData?.label || "English";
  const currentFlagUrl = getFlagImageUrl(currentCountryCode);

  return (
    <div ref={buttonRef} className="relative">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="google-translate-nav inline-flex items-center rounded-full border border-primary/40 bg-white/80 px-2 py-2 text-sm shadow-sm backdrop-blur-sm cursor-pointer hover:bg-white/90 transition-colors gap-2"
      >
        <img
          src={currentFlagUrl}
          alt={currentLabel}
          className="h-5 w-7 object-cover rounded-sm"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = getFlagImageUrl("gb");
          }}
        />
        <span className="text-xs font-medium hidden sm:inline max-w-[60px] truncate">
          {currentLabel}
        </span>
        <span className="text-xs font-medium sm:hidden">Lng</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 mt-2 w-64 md:w-80 max-h-96 bg-white border border-gray-200 rounded-lg shadow-xl z-[9999] flex flex-col"
        >
          {/* Search Input */}
          <div className="sticky top-0 p-3 border-b border-gray-200 bg-white rounded-t-lg">
            <input
              type="text"
              placeholder="Search language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent"
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>

          {/* Language List */}
          <div className="overflow-y-auto flex-1">
            {languages
              .filter((lang) =>
                lang.label.toLowerCase().includes(search.toLowerCase()) ||
                lang.code.toLowerCase().includes(search.toLowerCase())
              )
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors border-b border-gray-100 last:border-b-0 flex items-center gap-3 hover:bg-gray-50 ${
                    currentLanguage === lang.code
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-gray-800"
                  }`}
                >
                  <img
                    src={getFlagImageUrl(lang.countryCode)}
                    alt={lang.label}
                    className="h-5 w-7 object-cover rounded-sm flex-shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getFlagImageUrl("gb");
                    }}
                  />
                  <span className="flex-1">{lang.label}</span>
                  {currentLanguage === lang.code && (
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}

            {languages.filter((lang) =>
              lang.label.toLowerCase().includes(search.toLowerCase()) ||
              lang.code.toLowerCase().includes(search.toLowerCase())
            ).length === 0 && (
              <div className="px-4 py-8 text-center text-gray-500 text-sm">
                No languages found
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="absolute top-[-9999px]" />
    </div>
  );
}