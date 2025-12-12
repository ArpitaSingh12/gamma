import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, CheckCircle2, Award, Coffee as CoffeeIcon } from "lucide-react";
import coffeeImage from "@assets/generated_images/Tanzanian_coffee_beans_product_4f570ea5.png";
import { useTranslation } from "@/contexts/LanguageContext";

const heroCoffeeImages = [
  coffeeImage,
  "/images/Coffee/1290988.jpg",
  "/images/Coffee/954512.jpg",
];

export default function Coffee() {
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

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3"
              data-testid="text-product-title"
            >
              <span>{t("coffeePage.title")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("coffeePage.subtitle")}
            </p>
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {heroCoffeeImages.map((img, index) => (
                <img 
                  key={index}
                  src={img}
                  alt={t("coffeePage.title")}
                  className="w-full rounded-md shadow-lg object-cover h-64 md:h-80"
                  data-testid="img-product"
                />
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-2xl md:text-3xl font-bold text-[#CD4F10]">
                {t("coffeePage.tagline")}
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground">
              {t("coffeePage.intro")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card data-testid="card-specifications">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  {t("coffeePage.specsTitle")}
                </h2>
                <div className="space-y-3">
                  {[
                    { label: t("coffeePage.specCropSeason"), value: t("coffeePage.specCropSeasonValue") },
                    { label: t("coffeePage.specPackaging"), value: t("coffeePage.specPackagingValue") },
                    { label: t("coffeePage.spec20ft"), value: t("coffeePage.spec20ftValue") },
                    { label: t("coffeePage.spec40ft"), value: t("coffeePage.spec40ftValue") },
                    { label: t("coffeePage.specOrigin"), value: t("coffeePage.specOriginValue") },
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
                  {t("coffeePage.gradesTitle")}
                </h2>
                  <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <CoffeeIcon className="h-4 w-4 text-primary" />
                      <span>{t("coffeePage.arabicaTitle")}</span>
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("coffeePage.arabicaHsCode")}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("coffeePage.arabicaGradeAAA")}</Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("coffeePage.arabicaGradeAA")}</Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("coffeePage.arabicaGradeA")}</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <CoffeeIcon className="h-4 w-4 text-primary" />
                      <span>{t("coffeePage.robustaTitle")}</span>
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("coffeePage.robustaHsCode")}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("coffeePage.robustaFaq12")}</Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("coffeePage.robustaFaq14")}</Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("coffeePage.robustaFaq16")}</Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">{t("coffeePage.robustaFaq18")}</Badge>
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
                {t("coffeePage.certTitle")}
              </h2>
              <div className="flex flex-wrap gap-3">
                <Badge>{t("coffeePage.certFairTrade")}</Badge>
                <Badge>{t("coffeePage.certEu")}</Badge>
                <Badge>{t("coffeePage.certEcoCert")}</Badge>
                <Badge>{t("coffeePage.certOrganic")}</Badge>
                <Badge>{t("coffeePage.certIso")}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">{t("coffeePage.ctaTitle")}</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t("coffeePage.ctaBody")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-request-quote">
                    {t("common.requestQuote")}
                  </Button>
                </Link>
                <Link href="/blog/tanzanian-coffee-global-hearts">
                  <Button size="lg" variant="outline" data-testid="button-learn-more">
                    {t("coffeePage.ctaWhy")}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
