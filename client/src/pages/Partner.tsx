import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const process = [
  {
    step: "1",
    title: "common.partnerProcessStep1Title",
    description: "common.partnerProcessStep1Desc",
  },
  {
    step: "2",
    title: "common.partnerProcessStep2Title",
    description: "common.partnerProcessStep2Desc",
  },
  {
    step: "3",
    title: "common.partnerProcessStep3Title",
    description: "common.partnerProcessStep3Desc",
  },
  {
    step: "4",
    title: "common.partnerProcessStep4Title",
    description: "common.partnerProcessStep4Desc",
  },
  {
    step: "5",
    title: "common.partnerProcessStep5Title",
    description: "common.partnerProcessStep5Desc",
  },
];

export default function Partner() {
  const { t } = useTranslation();
  
  const benefits = [
    t("common.partnerBenefit1"),
    t("common.partnerBenefit2"),
    t("common.partnerBenefit3"),
    t("common.partnerBenefit4"),
    t("common.partnerBenefit5"),
    t("common.partnerBenefit6"),
  ];
  
  return (
    <div className="py-20">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" data-testid="text-partner-title">
            {t("nav.partner")}
          </h1>
          
          <p className="text-lg text-muted-foreground text-center mb-12" data-testid="text-partner-subtitle">
            {t("common.partnerSubtitle")}
          </p>

          <Card className="mb-12" data-testid="card-usps">
              <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6" data-testid="text-usps-title">
                {t("common.partnerWhyTitle")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center" data-testid="text-process-title">
              {t("common.partnerProcessTitle")}
            </h2>
            <div className="space-y-6">
              {process.map((item) => (
                <Card key={item.step} className="hover-elevate" data-testid={`process-step-${item.step}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2" data-testid={`text-process-title-${item.step}`}>
                          {t(item.title)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t(item.description)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-muted/30" data-testid="card-cta">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">{t("common.partnerCtaTitle")}</h2>
              <p className="text-muted-foreground mb-6">
                {t("common.partnerCtaBody")}
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-partner-contact">
                  {t("common.partnerCtaButton")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
