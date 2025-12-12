import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiInstagram, SiYoutube, SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/WhatsApp Image 2025-11-10 at 11.05.53_02785800_1762753322023.jpg";
import { useTranslation } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  const productLinks = [
    { name: t("products.cashew"), href: "/products/cashew" },
    { name: t("products.coffee"), href: "/products/coffee" },
    { name: t("products.cocoa"), href: "/products/cocoa" },
    { name: t("products.pulses"), href: "/products/pulses" },
    { name: t("products.liquor"), href: "/products/liquor" },
  ];

  const quickLinks = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.partner"), href: "/partner" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={logoImage}
              alt={t("common.contactHeadOfficeName")}
              className="h-10 mb-4"
            />
            <p
              className="text-sm text-muted-foreground mb-4"
              data-testid="text-footer-description"
            >
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/gamma-international-tanzania-limited-22319335a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="link-social-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/gammainternationaltz?igsh=MWV4NnY0MTBxdGtvcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="link-social-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@gammainternationaltanzanialimi?si=Sggn5kddzklq2WnV"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="link-social-youtube"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/255678960061"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="link-social-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3
              className="font-semibold mb-4"
              data-testid="text-footer-products-title"
            >
              {t("common.footerProductsTitle")}
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-product-${link.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold mb-4"
              data-testid="text-footer-company-title"
            >
              {t("common.footerCompanyTitle")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold mb-4"
              data-testid="text-footer-contact-title"
            >
              {t("common.footerContactTitle")}
            </h3>
            <ul className="space-y-3">
              <li
                className="flex items-start gap-2 text-sm text-muted-foreground"
                data-testid="text-footer-address"
              >
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  {t("common.contactAddressLine1")}, {t("common.contactAddressLine2")}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+255678960061"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  +255 678 960 061
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@gammaimternationaltz.com"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  info@gammaimternationaltz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            © {new Date().getFullYear()} {t("common.contactHeadOfficeName")}. {t(
              "common.footerCopyright"
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
