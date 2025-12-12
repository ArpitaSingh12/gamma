import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

export default function CallToAction() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-title">
            {t("common.ctaTitle")}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90" data-testid="text-cta-subtitle">
            {t("common.ctaSubtitle")}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
                data-testid="button-cta-contact"
              >
                {t("common.ctaPrimaryButton")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/partner">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
                data-testid="button-cta-learn-more"
              >
                {t("common.ctaSecondaryButton")}
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <a href="tel:+255678960061" className="flex items-center gap-2 hover:underline" data-testid="link-cta-phone">
              <Phone className="h-4 w-4" />
              +255 678 960 061
            </a>
            <a href="mailto:info@gammaimternationaltz.com" className="flex items-center gap-2 hover:underline" data-testid="link-cta-email">
              <Mail className="h-4 w-4" />
              info@gammaimternationaltz.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
