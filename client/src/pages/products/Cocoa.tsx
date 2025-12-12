import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, CheckCircle2, Award } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const heroImages = [
  "/images/Cocoa/cocoa-1.jpg",
  "/images/Cocoa/cocoa-2.jpg",
  "/images/Cocoa/cocoa-3.jpg",
];

export default function Cocoa() {
  const { t } = useTranslation();

  return (
    <div className="py-20">
      <div className="container px-6">
        <Link href="/products">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.backToProducts")}
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-product-title">
              {t("cocoaPage.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("cocoaPage.subtitle")}
            </p>
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={t("cocoaPage.title")}
                  className="w-full rounded-md shadow-lg object-cover h-64 md:h-80"
                  data-testid="img-product"
                />
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-2xl md:text-3xl font-bold text-[#CD4F10]">
                {t("cocoaPage.tagline")}
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground">{t("cocoaPage.intro")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card data-testid="card-specifications">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  {t("cocoaPage.specsTitle")}
                </h2>
                <div className="space-y-3">
                  {[
                    { label: t("cocoaPage.specCropSeason"), value: t("cocoaPage.specCropSeasonValue") },
                    { label: t("cocoaPage.specPackaging"), value: t("cocoaPage.specPackagingValue") },
                    { label: t("cocoaPage.spec20ft"), value: t("cocoaPage.spec20ftValue") },
                    { label: t("cocoaPage.spec40ft"), value: t("cocoaPage.spec40ftValue") },
                    { label: t("cocoaPage.specOrigin"), value: t("cocoaPage.specOriginValue") },
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

            <Card data-testid="card-grades">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {t("cocoaPage.gradesTitle")}
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("cocoaPage.hsCodeFermented")}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("cocoaPage.gradePremium")}</Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("cocoaPage.gradeStandard")}</Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("cocoaPage.gradeFaq")}</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Semi-Processed Products</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">Cocoa Nibs</Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">Cocoa Liquor / Paste</Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">Cocoa Butter</Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">Cocoa Powder</Badge>
                    </div>
                    <div className="mt-3">
                      <Badge>{t("cocoaPage.hsCodeSemiProcessed")}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12" data-testid="card-certifications">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                {t("cocoaPage.certTitle")}
              </h2>
              <div className="flex flex-wrap gap-3">
                <Badge>{t("cocoaPage.certFairTrade")}</Badge>
                <Badge>{t("cocoaPage.certEu")}</Badge>
                <Badge>{t("cocoaPage.certEcoCert")}</Badge>
                <Badge>{t("cocoaPage.certOrganic")}</Badge>
                <Badge>{t("cocoaPage.certIso")}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">{t("cocoaPage.ctaTitle")}</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("cocoaPage.ctaBody")}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-request-quote">{t("common.requestQuote")}</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
