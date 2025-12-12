import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import GoogleTranslateWidget from "@/components/GoogleTranslateWidget";
import { useTranslation } from "@/contexts/LanguageContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoImage from "@assets/WhatsApp Image 2025-11-10 at 11.05.53_02785800_1762753322023.jpg";

// Product links shown inside the navigation dropdown and mobile menu.
// Use translation keys so names/descriptions change with language.
const agriProducts = [
  {
    nameKey: "products.cashew" as const,
    descKey: "products.cashewDesc" as const,
    href: "/products/cashew",
  },
  {
    nameKey: "products.coffee" as const,
    descKey: "products.coffeeDesc" as const,
    href: "/products/coffee",
  },
  {
    nameKey: "products.cocoa" as const,
    descKey: "products.cocoaDesc" as const,
    href: "/products/cocoa",
  },
  {
    nameKey: "products.pulses" as const,
    descKey: "products.pulsesDesc" as const,
    href: "/products/pulses",
  },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
  function adjustForGoogleTranslateBanner() {
    const bannerFrame = document.querySelector(".goog-te-banner-frame");

    let height = 0;

    if (bannerFrame instanceof HTMLIFrameElement) {
      height = bannerFrame.offsetHeight || 40;
    }

    const header = document.getElementById("main-header");

    if (header) {
      header.style.marginTop = height + "px";
    }
  }

  const interval = setInterval(adjustForGoogleTranslateBanner, 500);
  return () => clearInterval(interval);
}, []);


  return (
    <header 
    id="main-header"
    className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-visible">
      <div className="container flex min-h-16 items-center justify-between px-4 md:px-6 gap-2">
        <Link href="/" data-testid="link-home">
          <img src={logoImage} alt="Gamma International Tanzania Ltd" className="h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">

          <Link href="/" data-testid="link-nav-home">
            <span className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-foreground"}`}>
              {t("nav.home")}
            </span>
          </Link>
          
          <Link href="/about" data-testid="link-nav-about">
            <span className={`text-sm font-medium transition-colors hover:text-primary ${location === "/about" ? "text-primary" : "text-foreground"}`}>
              {t("nav.about")}
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium" data-testid="button-nav-products">
                  {t("nav.products")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {agriProducts.map((product) => (
                          <li key={product.nameKey}>
                            <NavigationMenuLink asChild>
                              <Link href={product.href}>
                                <span
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                  data-testid={`link-product-${product.nameKey.split('.').pop()?.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {t(product.nameKey)}
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    {t(product.descKey)}
                                  </p>
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <NavigationMenuLink asChild>
                        <Link href="/products/liquor">
                          <span className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" data-testid="link-product-liquor">
                            <div className="text-sm font-medium leading-none">{t("products.liquor")}</div>
                            <p className="text-xs text-muted-foreground">{t("products.liquorHighlight")}</p>
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/partner" data-testid="link-nav-partner">
            <span className={`text-sm font-medium transition-colors hover:text-primary ${location === "/partner" ? "text-primary" : "text-foreground"}`}>
              {t("nav.partner")}
            </span>
          </Link>

          <Link href="/blog" data-testid="link-nav-blog">
            <span className={`text-sm font-medium transition-colors hover:text-primary ${location === "/blog" ? "text-primary" : "text-foreground"}`}>
              {t("nav.blog")}
            </span>
          </Link>

          <Link href="/contact" data-testid="link-nav-contact">
            <span className={`text-sm font-medium transition-colors hover:text-primary ${location === "/contact" ? "text-primary" : "text-foreground"}`}>
              {t("nav.contact")}
            </span>
          </Link>
        </nav>

        {/* Desktop: Google Translate + Request Quote */}

      <div className="hidden md:flex items-center gap-3">
      <div className="relative z-50 px-2 translate-widget"></div>
          <GoogleTranslateWidget />
          <Link href="/contact">
            <Button data-testid="button-request-quote">{t("nav.requestQuote")}</Button>
          </Link>
        </div>

        {/* Mobile: show Google Translate + menu button */}
        <div className="flex items-center gap-2 md:hidden">
        <div className="relative z-50 px-2 translate-widget"></div>
          <GoogleTranslateWidget />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col gap-4 p-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-home">
              <span className="text-sm font-medium">{t("nav.home")}</span>
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-about">
              <span className="text-sm font-medium">{t("nav.about")}</span>
            </Link>
            <div>
              <div className="flex flex-col gap-2">
                {agriProducts.map((product) => (
                  <Link
                    key={product.nameKey}
                    href={product.href}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-product-${product.nameKey.split('.').pop()?.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="text-sm text-muted-foreground">
                      {t(product.nameKey)}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/products/liquor"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-product-liquor"
                >
                  <span className="text-sm text-muted-foreground">{t("products.liquor")}</span>
                </Link>
              </div>
            </div>
            <Link href="/partner" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-partner">
              <span className="text-sm font-medium">{t("nav.partner")}</span>
            </Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-blog">
              <span className="text-sm font-medium">{t("nav.blog")}</span>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-contact">
              <span className="text-sm font-medium">{t("nav.contact")}</span>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full" data-testid="button-mobile-request-quote">{t("nav.requestQuote")}</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
