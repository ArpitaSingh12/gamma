import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, CheckCircle2 } from "lucide-react";
import pulsesImage from "@assets/generated_images/Assorted_pulses_product_display_49ce81f5.png";
import sesameImage from "@assets/generated_images/Premium_sesame_seeds_product_f32cf303.png";
import { useTranslation } from "@/contexts/LanguageContext";

export default function Pulses() {
  const { t } = useTranslation();

  return (
    <div className="py-20">
      <div className="container px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.backToProducts")}
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-product-title">
              {t("pulsesPage.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("pulsesPage.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <Card data-testid="card-pulses">
              <div className="aspect-video overflow-hidden rounded-t-md">
                <img src={pulsesImage} alt="Pulses" className="w-full h-full object-cover" />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">{t("pulsesPage.pulsesTitle")}</h2>
                <p className="text-muted-foreground mb-6">
                  {t("pulsesPage.pulsesBody")}
                </p>
                
                <h3 className="font-semibold mb-3">{t("pulsesPage.varietiesTitle")}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                    {t("pulsesPage.varietyChickpeas")}
                  </Badge>
                  <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                    {t("pulsesPage.varietyPigeonPeas")}
                  </Badge>
                  <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                    {t("pulsesPage.varietyKidneyBeans")}
                  </Badge>
                  <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                    {t("pulsesPage.varietyGreenMungBeans")}
                  </Badge>
                </div>

                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  {t("pulsesPage.specTitle")}
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      label: t("pulsesPage.specMoistureLabel"),
                      value: t("pulsesPage.specPulsesMoistureValue"),
                    },
                    {
                      label: t("pulsesPage.specPurityLabel"),
                      value: t("pulsesPage.specPulsesPurityValue"),
                    },
                    {
                      label: t("pulsesPage.specPackagingLabel"),
                      value: t("pulsesPage.specPulsesPackagingValue"),
                    },
                    {
                      label: t("pulsesPage.specLoadingLabel"),
                      value: t("pulsesPage.specPulsesLoadingValue"),
                    },
                    {
                      label: t("pulsesPage.specOriginLabel"),
                      value: t("pulsesPage.specPulsesOriginValue"),
                    },
                    {
                      label: t("pulsesPage.specSeasonLabel"),
                      value: t("pulsesPage.specPulsesSeasonValue"),
                    },
                    {
                      label: t("pulsesPage.spec20ftLabel"),
                      value: t("pulsesPage.specPulses20ftValue"),
                    },
                    {
                      label: t("pulsesPage.spec40ftLabel"),
                      value: t("pulsesPage.specPulses40ftValue"),
                    },
                  ].map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <span className="font-medium">{spec.label}:</span> {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-sesame">
              <div className="aspect-video overflow-hidden rounded-t-md">
                <img src={sesameImage} alt="Sesame Seeds" className="w-full h-full object-cover" />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">{t("pulsesPage.sesameTitle")}</h2>
                <p className="text-muted-foreground mb-6">
                  {t("pulsesPage.sesameBody")}
                </p>
                
                <h3 className="font-semibold mb-3">{t("pulsesPage.varietiesTitle")}</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                    {t("pulsesPage.varietyWhiteSesame")}
                  </Badge>
                  <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                    {t("pulsesPage.varietyBrownSesame")}
                  </Badge>
                </div>
                <div className="mt-3 mb-4 text-sm">
                  <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                    <span className="font-medium">
                      {t("pulsesPage.sesameHsCode")}
                    </span>
                  </Badge>
                </div>

                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  {t("pulsesPage.specTitle")}
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      label: t("pulsesPage.specPurityLabel"),
                      value: t("pulsesPage.specSesamePurityValue"),
                    },
                    {
                      label: t("pulsesPage.specMoistureLabel"),
                      value: t("pulsesPage.specSesameMoistureValue"),
                    },
                    {
                      label: t("pulsesPage.specProcessingLabel"),
                      value: t("pulsesPage.specSesameProcessingValue"),
                    },
                    {
                      label: t("pulsesPage.specPackagingLabel"),
                      value: t("pulsesPage.specSesamePackagingValue"),
                    },
                    {
                      label: t("pulsesPage.specSeasonLabel"),
                      value: t("pulsesPage.specSesameSeasonValue"),
                    },
                    {
                      label: t("pulsesPage.spec20ftLabel"),
                      value: t("pulsesPage.specSesame20ftValue"),
                    },
                    {
                      label: t("pulsesPage.spec40ftLabel"),
                      value: t("pulsesPage.specSesame40ftValue"),
                    },
                  ].map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <span className="font-medium">{spec.label}:</span> {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30">
              <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">{t("pulsesPage.ctaTitle")}</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t("pulsesPage.ctaBody")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-request-quote">
                    {t("common.requestQuote")}
                  </Button>
                </Link>
                <Link href="/blog/tanzania-pulses-seeds-portfolio">
                  <Button size="lg" variant="outline" data-testid="button-view-blog">{t("pulsesPage.ctaBlogButton")}</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
