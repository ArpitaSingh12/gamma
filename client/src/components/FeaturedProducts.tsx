import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import cashewImage from "@assets/generated_images/Raw_cashew_nuts_product_0d9595ff.png";
import coffeeImage from "@assets/generated_images/Tanzanian_coffee_beans_product_4f570ea5.png";
import pulsesImage from "@assets/generated_images/Assorted_pulses_product_display_49ce81f5.png";
import { useTranslation } from "@/contexts/LanguageContext";

const products = [
  {
    key: "cashew" as const,
    nameKey: "products.cashew" as const,
    descKey: "products.cashewDesc" as const,
    highlightKey: "products.cashewHighlight" as const,
    image: cashewImage,
    href: "/products/cashew",
  },
  {
    key: "coffee" as const,
    nameKey: "products.coffee" as const,
    descKey: "products.coffeeDesc" as const,
    highlightKey: "products.coffeeHighlight" as const,
    image: coffeeImage,
    href: "/products/coffee",
  },
  {
    key: "cocoa" as const,
    nameKey: "products.cocoa" as const,
    descKey: "products.cocoaDesc" as const,
    highlightKey: "products.cocoaHighlight" as const,
    image: coffeeImage,
    href: "/products/cocoa",
  },
  {
    key: "pulses" as const,
    nameKey: "products.pulses" as const,
    descKey: "products.pulsesDesc" as const,
    highlightKey: "products.pulsesHighlight" as const,
    image: pulsesImage,
    href: "/products/pulses",
  },
  {
    key: "liquor" as const,
    nameKey: "products.liquor" as const,
    descKey: "products.liquorDesc" as const,
    highlightKey: "products.liquorHighlight" as const,
    image: "/images/Liquor/SAPs-S3Q-Flavoured-Collection.jpg",
    href: "/products/liquor",
  },
];

export default function FeaturedProducts() {
  const { t } = useTranslation();

  const liquorImages = [
    "/images/Liquor/SAPs-S3Q-Flavoured-Collection.jpg",
    "/images/Liquor/Liqueurs.webp",
    "/images/Liquor/port-louiis-1.webp",
    "/images/Liquor/7-brother-750ml.webp",
  ];

  const cashewImages = [
  "/images/Cashew/cashew.png",
  "/images/Cashew/rcn image.jpeg",
  "/images/Cashew/RCN img-2.jpg",
  "/images/Cashew/tasty-cashew-nuts-as-background_1150-45355.avif",
];


  const coffeeImages = [
    "/images/Coffee/1290988.jpg",
    "/images/Coffee/954512.jpg",
    "/images/Coffee/delicious-organic-coffee-still-life_23-2151762341.avif",
    "/images/Coffee/What-Is-Robusta-Coffee-–-Learn-About-Robusta-4-Helena-Coffee.jpg",
  ];

  const cocoaImages = [
    "/images/Cocoa/cocoa-1.jpg",
    "/images/Cocoa/cocoa-2.jpg",
    "/images/Cocoa/cocoa-3.jpg",
    "/images/Cocoa/cocoa-4.jpg",
  ];

  const pulsesImages = [
    "/images/Pulses/360_F_117825265_rOF5SE5y4MtbIPJAF18qexRRatDZVA4C.jpg",
    "/images/Pulses/collection-common-food-allergens-people_23-2149870534.avif",
    "/images/Pulses/different-types-grains_4fdc5c692f79d253-1.jpg",
    "/images/Pulses/istockphoto-637856490-612x612.jpg",
  ];

  const [liquorImageIndex, setLiquorImageIndex] = useState(0);
  const [cashewImageIndex, setCashewImageIndex] = useState(0);
  const [coffeeImageIndex, setCoffeeImageIndex] = useState(0);
  const [cocoaImageIndex, setCocoaImageIndex] = useState(0);
  const [pulsesImageIndex, setPulsesImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiquorImageIndex((prev) => (prev + 1) % liquorImages.length);
      setCashewImageIndex((prev) => (prev + 1) % cashewImages.length);
      setCoffeeImageIndex((prev) => (prev + 1) % coffeeImages.length);
      setCocoaImageIndex((prev) => (prev + 1) % cocoaImages.length);
      setPulsesImageIndex((prev) => (prev + 1) % pulsesImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  
  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-products-title">
            {t("home.productsTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
            {t("home.productsSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const name = t(product.nameKey);
            const desc = t(product.descKey);
            const highlightText = t(product.highlightKey);
            const highlightPoints = highlightText
              .split("|")
              .map((item) => item.trim())
              .filter(Boolean);

            return (
            <Link href={product.href} key={product.nameKey} className="block">
              <Card 
                className="overflow-hidden hover-elevate group transition-all duration-300 hover:border-[#CD4F10] hover:shadow-lg hover:shadow-[#CD4F10]/20 cursor-pointer h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-product-${product.nameKey.split('.').pop()?.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-black/5">
                  <img
                    src={
                      product.key === "liquor"
                        ? liquorImages[liquorImageIndex]
                        : product.key === "cashew"
                        ? cashewImages[cashewImageIndex]
                        : product.key === "coffee"
                        ? coffeeImages[coffeeImageIndex]
                        : product.key === "cocoa"
                        ? cocoaImages[cocoaImageIndex]
                        : product.key === "pulses"
                        ? pulsesImages[pulsesImageIndex]
                        : product.image
                    }
                    alt={name}
                    className={
                      product.key === "liquor"
                        ? liquorImageIndex === 0
                          ? "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          : "max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        : "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    }
                  />
                </div>
                <CardHeader className="text-center">
                  <h3 className="text-xl font-semibold" data-testid={`text-product-name-${product.nameKey.split('.').pop()?.toLowerCase().replace(/\s+/g, '-')}`}>
                    {name}
                  </h3>
                  <div className="text-sm text-muted-foreground" data-testid={`text-product-highlight-${product.nameKey.split('.').pop()?.toLowerCase().replace(/\s+/g, '-')}`}>
                    <ul className="list-disc list-outside space-y-1 ml-4 text-left">
                      {highlightPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground" data-testid={`text-product-description-${product.nameKey.split('.').pop()?.toLowerCase().replace(/\s+/g, '-')}`}>
                    {desc}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full" data-testid={`button-learn-more-${product.nameKey.split('.').pop()?.toLowerCase().replace(/\s+/g, '-')}`}>
                    {t("common.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="/contact" className="w-full" onClick={(e) => e.stopPropagation()}>
                    <Button className="w-full" data-testid={`button-request-quote-${product.nameKey.split('.').pop()?.toLowerCase().replace(/\s+/g, '-')}`}>
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
    </section>
  );
}