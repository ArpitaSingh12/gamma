import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

interface Spec {
  label: string;
  value: string;
  isHsCode?: boolean;
  isGrades?: boolean;
}

export default function Cashew() {
  const { t } = useTranslation();

  const rcnSpecs: Spec[] = [
    { label: t("cashewPage.rcnOutturn"), value: "50–55 LBS+" },
    { label: t("cashewPage.rcnNutCount"), value: "160–180 (+/-10)" },
    { label: t("cashewPage.rcnMoisture"), value: "Approx. 10%" },
    { label: t("cashewPage.rcnPackaging"), value: "80 kg Jute Bags" },
    {
      label: t("cashewPage.rcnOrigin"),
      value: "Masasi / Newala / Mtwara / Tandahimba",
    },
    { label: t("cashewPage.rcnHsCode"), value: "08013100", isHsCode: true },
    { label: t("cashewPage.rcnContainer"), value: "27–28 MT" },
    { label: t("cashewPage.rcnMoq"), value: "2x40ft FCL" },
  ];

  const kernelsSpecs: Spec[] = [
    {
      label: t("cashewPage.kernelsGrades"),
      value: "W180, W240, W320, W450, SW, LWP",
      isGrades: true,
    },
    { label: t("cashewPage.kernelsHsCode"), value: "08013220", isHsCode: true },
    { label: t("cashewPage.kernelsMoisture"), value: "Max 7%" },
    { label: t("cashewPage.kernelsSeason"), value: "Oct – April" },
    {
      label: t("cashewPage.kernelsPackaging"),
      value: "22.68 kg (50 lbs) vacuum-sealed cartons",
    },
    {
      label: t("cashewPage.kernelsAltPack"),
      value: "2 × 10 kg vacuum packs per carton",
    },
    {
      label: t("cashewPage.kernels20ft"),
      value: "~660 boxes (~15 MT)",
    },
    {
      label: t("cashewPage.kernels40ft"),
      value: "~1100 boxes (~25 MT)",
    },
  ];

  return (
    <div className="py-20">
      <div className="container px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("cashewPage.backToProducts")}
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              data-testid="text-product-title"
            >
              {t("cashewPage.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("cashewPage.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <Card data-testid="card-raw-cashew">
              <div className="aspect-video overflow-hidden rounded-t-md">
                <img
                  src="\images\Cashew\rcn image.jpeg"
                  alt="Raw Cashew Nuts (RCN)"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">
                  {t("cashewPage.rcnTitle")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("cashewPage.rcnBody")}
                </p>

                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  {t("cashewPage.rcnSpecsTitle")}
                </h3>
                <div className="space-y-2">
                  {rcnSpecs.map((spec, index) => {
                    const isHsCodeRow = spec.isHsCode;

                    return (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <div className="text-sm">
                          <span className="font-medium">{spec.label}:</span>{" "}
                          {isHsCodeRow ? (
                            <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                              {spec.value}
                            </Badge>
                          ) : (
                            <span>{spec.value}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-cashew-kernels">
              <div className="aspect-video overflow-hidden rounded-t-md">
                <img
                  src="/images/Cashew/tasty-cashew-nuts-as-background_1150-45355.avif"
                  alt="Cashew Nut Kernels"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">
                  {t("cashewPage.kernelsTitle")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("cashewPage.kernelsBody")}
                </p>

                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  {t("cashewPage.kernelsSpecsTitle")}
                </h3>
                <div className="space-y-2">
                  {kernelsSpecs.map((spec, index) => {
                    const isGradesRow = spec.isGrades;
                    const isHsCodeRow = spec.isHsCode;
                    const gradeItems = isGradesRow
                      ? spec.value
                          .split(",")
                          .map((item) => item.trim())
                          .filter(Boolean)
                      : [];

                    return (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <div className="text-sm">
                          <span className="font-medium">{spec.label}:</span>{" "}
                          {isGradesRow ? (
                            <span className="inline-flex flex-wrap gap-2 mt-1">
                              {gradeItems.map((grade) => (
                                <Badge
                                  key={grade}
                                  className="bg-[#CD4F10] text-white hover:bg-[#B54509]"
                                >
                                  {grade}
                                </Badge>
                              ))}
                            </span>
                          ) : isHsCodeRow ? (
                            <Badge className="bg-[#CD4F10] text-white hover:bg-[#B54509]">
                              {spec.value}
                            </Badge>
                          ) : (
                            <span>{spec.value}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {t("cashewPage.ctaTitle")}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t("cashewPage.ctaBody")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-request-quote">
                    {t("cashewPage.ctaRequestQuote")}
                  </Button>
                </Link>
                <Link href="/blog/tanzania-cashew-season-2025">
                  <Button
                    size="lg"
                    variant="outline"
                    data-testid="button-learn-more"
                  >
                    {t("cashewPage.ctaLearnMore")}
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
