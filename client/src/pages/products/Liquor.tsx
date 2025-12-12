import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, CheckCircle2, Wine } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

export default function Liquor() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-product-title">
              {t("liquorPage.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("liquorPage.subtitle")}
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/images/Liquor/SAPs-S3Q-Flavoured-Collection.jpg" 
              alt="Liquor & Alcohol"
              className="w-full rounded-md shadow-lg object-cover"
              data-testid="img-product"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-lg shadow-md overflow-hidden h-96">
              <img 
                src="/images/Liquor/Liqueurs.webp"
                alt="Liquor products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg shadow-md overflow-hidden h-96">
              <img 
                src="/images/Liquor/port-louiis-1.webp"
                alt="Liquor products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg shadow-md overflow-hidden h-96">
              <img 
                src="/images/Liquor/7-brother-750ml.webp"
                alt="Liquor products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground">
              {t("liquorPage.intro")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card data-testid="card-products">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Wine className="h-5 w-5 text-primary" />
                  {t("liquorPage.productsTitle")}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">{t("liquorPage.spiritsTitle")}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("liquorPage.spiritWhisky")}
                      </Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("liquorPage.spiritRum")}
                      </Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("liquorPage.spiritVodka")}
                      </Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("liquorPage.spiritGin")}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t("liquorPage.sizesTitle")}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("liquorPage.size200ml")}
                      </Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("liquorPage.size375ml")}
                      </Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("liquorPage.size750ml")}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t("liquorPage.gradesTitle")}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("liquorPage.gradeWhiskyHs")}
                      </Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("liquorPage.gradeRumHs")}
                      </Badge>
                      <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                        {t("liquorPage.gradeLiquorHs")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-specifications">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  {t("liquorPage.specsTitle")}
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      label: t("liquorPage.specPackagingLabel"),
                      value: t("liquorPage.specPackagingValue"),
                    },
                    {
                      label: t("liquorPage.spec20ftLabel"),
                      value: t("liquorPage.spec20ftValue"),
                    },
                    {
                      label: t("liquorPage.specOriginLabel"),
                      value: t("liquorPage.specOriginValue"),
                    },
                    {
                      label: t("liquorPage.specQualityLabel"),
                      value: t("liquorPage.specQualityValue"),
                    },
                    {
                      label: t("liquorPage.specDistributionLabel"),
                      value: t("liquorPage.specDistributionValue"),
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

          <Card className="mb-12" data-testid="card-markets">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">{t("liquorPage.marketsTitle")}</h2>
              <p className="text-muted-foreground mb-4">
                {t("liquorPage.marketsIntro")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">{t("liquorPage.marketWholesale")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">{t("liquorPage.marketRetail")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">{t("liquorPage.marketHospitality")}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">{t("liquorPage.ctaTitle")}</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t("liquorPage.ctaBody")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-request-quote">
                    {t("common.requestQuote")}
                  </Button>
                </Link>
                <Link href="/blog/east-africa-liquor-portfolio">
                  <Button size="lg" variant="outline" data-testid="button-view-blog">{t("liquorPage.ctaLearnMore")}</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
