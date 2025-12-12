import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import coffeeImage from "@assets/generated_images/Tanzanian_coffee_beans_product_4f570ea5.png";
import pulsesImage from "@assets/generated_images/Assorted_pulses_product_display_49ce81f5.png";
import liquorImage from "@assets/generated_images/Premium_liquor_collection_display_d309c7f9.png";
import cashewImage from "@assets/generated_images/Raw_cashew_nuts_product_0d9595ff.png";
import { useTranslation } from "@/contexts/LanguageContext";


export default function Products() {
  const { t } = useTranslation();
  
  const exportProducts = [
  {
    name: t("products.cashew"),
    desc: t("products.cashewDesc"),
    highlight: t("products.cashewHighlight"),
    image: cashewImage,
    href: "/products/cashew",
    category: "Export",
  },
  {
    name: t("products.coffee"),
    desc: t("products.coffeeDesc"),
    highlight: t("products.coffeeHighlight"),
    image: coffeeImage,
    href: "/products/coffee",
    category: "Export",
  },
  {
    name: t("products.cocoa"),
    desc: t("products.cocoaDesc"),
    highlight: t("products.cocoaHighlight"),
    image: coffeeImage,
    href: "/products/cocoa",
    category: "Export",
  },
  {
    name: t("products.pulses"),
    desc: t("products.pulsesDesc"),
    highlight: t("products.pulsesHighlight"),
    image: pulsesImage,
    href: "/products/pulses",
    category: "Export",
  },
];

const importProducts = [
  {
    name: t("products.liquor"),
    desc: t("products.liquorDesc"),
    highlight: t("products.liquorHighlight"),
    image: liquorImage,
    href: "/products/liquor",
    category: "Import",
  },
];
  
  return (
    <div className="py-20">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-products-page-title">
            {t("common.productsPageTitle")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("common.productsPageSubtitle")}
          </p>
        </div>

        {/* Export Products */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold">{t("common.productsExportTitle")}</h2>
            <Badge variant="outline" className="text-base">{t("common.productsExportBadge")}</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exportProducts.map((product, index) => {
              const highlightText = product.highlight;
              const highlightPoints = highlightText
                .split("|")
                .map((item) => item.trim())
                .filter(Boolean);

              return (
                <Link href={product.href} key={product.name} className="block">
                  <Card
                    className="overflow-hidden hover-elevate group transition-all duration-300 hover:border-[#CD4F10] hover:shadow-lg hover:shadow-[#CD4F10]/20 cursor-pointer h-full flex flex-col"
                    style={{ animationDelay: `${index * 100}ms` }}
                    data-testid={`card-product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader className="text-center">
                      <h3
                        className="text-xl font-semibold"
                        data-testid={`text-product-name-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {product.name}
                      </h3>
                      <div
                        className="text-sm text-muted-foreground"
                        data-testid={`text-product-highlight-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <ul className="list-disc list-outside space-y-1 ml-4 text-left">
                          {highlightPoints.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p
                        className="text-sm text-muted-foreground"
                        data-testid={`text-product-description-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {product.desc}
                      </p>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        className="w-full"
                        data-testid={`button-learn-more-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {t("common.learnMore")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Link href="/contact" className="w-full" onClick={(e) => e.stopPropagation()}>
                        <Button
                          className="w-full"
                          data-testid={`button-request-quote-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {t("common.requestQuote")}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Import Products */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold">{t("common.productsImportTitle")}</h2>
            <Badge variant="outline" className="text-base">{t("common.productsImportBadge")}</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importProducts.map((product, index) => {
              const highlightText = product.highlight;
              const highlightPoints = highlightText
                .split("|")
                .map((item) => item.trim())
                .filter(Boolean);

              return (
                <Link href={product.href} key={product.name} className="block">
                  <Card
                    className="overflow-hidden hover-elevate group transition-all duration-300 hover:border-[#CD4F10] hover:shadow-lg hover:shadow-[#CD4F10]/20 cursor-pointer h-full flex flex-col"
                    style={{ animationDelay: `${index * 100}ms` }}
                    data-testid={`card-product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader className="text-center">
                      <h3
                        className="text-xl font-semibold"
                        data-testid={`text-product-name-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {product.name}
                      </h3>
                      <div
                        className="text-sm text-muted-foreground"
                        data-testid={`text-product-highlight-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <ul className="list-disc list-outside space-y-1 ml-4 text-left">
                          {highlightPoints.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p
                        className="text-sm text-muted-foreground"
                        data-testid={`text-product-description-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {product.desc}
                      </p>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        className="w-full"
                        data-testid={`button-learn-more-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {t("common.learnMore")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Link href="/contact" className="w-full" onClick={(e) => e.stopPropagation()}>
                        <Button
                          className="w-full"
                          data-testid={`button-request-quote-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {t("common.requestQuote")}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-16 bg-muted/30">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">{t("common.productsCtaTitle")}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("common.productsCtaBody")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" data-testid="button-request-quote">
                  {t("common.productsCtaRequestQuote")}
                </Button>
              </Link>
              <Link href="/partner">
                <Button size="lg" variant="outline" data-testid="button-partner">
                  {t("common.productsCtaPartner")}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
