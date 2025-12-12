import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Globe2, Shield, FileCheck, Users2, TrendingUp } from "lucide-react";
import portImage from "@assets/generated_images/International_shipping_port_operations_cd4fe4c1.png";
import { useTranslation } from "@/contexts/LanguageContext";


export default function WhyChooseUs() {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: Globe2,
      title: t("whyChooseUs.benefit1Title"),
      desc: t("whyChooseUs.benefit1Desc"),
    },
    {
      icon: Shield,
      title: t("whyChooseUs.benefit2Title"),
      desc: t("whyChooseUs.benefit2Desc"),
    },
    {
      icon: Users2,
      title: t("whyChooseUs.benefit3Title"),
      desc: t("whyChooseUs.benefit3Desc"),
    },
    {
      icon: FileCheck,
      title: t("whyChooseUs.benefit4Title"),
      desc: t("whyChooseUs.benefit4Desc"),
    },
    {
      icon: CheckCircle2,
      title: t("whyChooseUs.benefit5Title"),
      desc: t("whyChooseUs.benefit5Desc"),
    },
    {
      icon: TrendingUp,
      title: t("whyChooseUs.benefit6Title"),
      desc: t("whyChooseUs.benefit6Desc"),
    },
  ];
  
  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-title">
            {t("whyChooseUs.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-subtitle">
            {t("whyChooseUs.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="hover-elevate"
                  data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <benefit.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3
                          className="font-semibold mb-1"
                          data-testid={`text-benefit-title-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src={portImage} 
              alt="International shipping port operations"
              className="rounded-md w-full shadow-lg"
              data-testid="img-port-operations"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
