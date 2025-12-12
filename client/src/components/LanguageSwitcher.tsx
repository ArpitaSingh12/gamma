import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/locales/translations";

// Simple globe icon to match the provided design (circle with latitude/longitude lines)
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      {/* vertical meridian */}
      <line
        x1="12"
        y1="3"
        x2="12"
        y2="21"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* two additional meridians (left/right arcs) */}
      <path
        d="M8.5 4.5C7 6.2 6.1 8.9 6.1 12s0.9 5.8 2.4 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M15.5 4.5C17 6.2 17.9 8.9 17.9 12s-0.9 5.8-2.4 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* latitude lines */}
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.5 8.2C8.2 7.4 10 7 12 7s3.8 0.4 5.5 1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M6.5 15.8C8.2 16.6 10 17 12 17s3.8-0.4 5.5-1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

const AVAILABLE_LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "sw", label: "Swahili" },
  { code: "fr", label: "French" },
  { code: "ar", label: "Arabic" },
  { code: "ja", label: "Japanese" },
  { code: "zh", label: "Chinese" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const current = AVAILABLE_LANGUAGES.find((l) => l.code === language) ?? AVAILABLE_LANGUAGES[0];

  return (
    <div className="relative" data-testid="language-switcher">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        onClick={() => setOpen((prev) => !prev)}
        data-testid="button-language-toggle"
      >
        <GlobeIcon className="h-4 w-4" />
        <span className="text-xs md:text-sm">{current.label}</span>
      </Button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-40 rounded-md border bg-popover shadow-md z-50"
          role="menu"
        >
          {AVAILABLE_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`flex w-full items-center px-3 py-2 text-xs md:text-sm text-left hover:bg-accent hover:text-accent-foreground ${
                lang.code === current.code ? "bg-accent/40 font-medium" : ""
              }`}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              data-testid={`button-lang-${lang.code}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
