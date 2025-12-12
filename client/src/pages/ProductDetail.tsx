import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Package, CheckCircle2, ArrowLeft } from "lucide-react";
import cashewImage from "@assets/generated_images/Raw_cashew_nuts_product_0d9595ff.png";
import kernelsImage from "@assets/generated_images/Cashew_kernels_premium_product_1249111a.png";
import coffeeImage from "@assets/generated_images/Tanzanian_coffee_beans_product_4f570ea5.png";
import pulsesImage from "@assets/generated_images/Assorted_pulses_product_display_49ce81f5.png";
import sesameImage from "@assets/generated_images/Premium_sesame_seeds_product_f32cf303.png";
import timberImage from "@assets/generated_images/Premium_timber_logs_export_54960df6.png";
import liquorImage from "@assets/generated_images/Premium_liquor_collection_display_d309c7f9.png";

const products = {
  "raw-cashew-nuts": {
    name: "Raw Cashew Nuts (RCN)",
    image: cashewImage,
    description: "We source the finest Tanzanian Raw Cashew Nuts (RCN) known for their superior nut count, high kernel recovery, and consistent moisture levels — preferred by global processors in India and Vietnam.",
    specs: [
      { label: "Outturn", value: "50–55 LBS+" },
      { label: "Nut Count", value: "160–180 (+/-10)" },
      { label: "Moisture", value: "Approx. 10%" },
      { label: "Packaging", value: "80 kg Jute Bags" },
      { label: "Origin", value: "Masasi / Newala / Mtwara / Tandahimba" },
      { label: "40ft HC Container", value: "27–28 MT" },
      { label: "MOQ", value: "2x40ft FCL" },
    ],
  },
  "cashew-kernels": {
    name: "Cashew Nut Kernels",
    image: kernelsImage,
    description: "Our kernels are carefully processed and vacuum-packed to retain natural flavor, color, and crunch — ready for retail or industrial use worldwide.",
    specs: [
      { label: "Grades", value: "W180, W240, W320, W450, SW, LWP" },
      { label: "Moisture", value: "Max 7%" },
      { label: "Season", value: "Oct – April" },
      { label: "Packaging", value: "22.68 kg (50 lbs) vacuum-sealed cartons or 2 × 10 kg vacuum packs" },
      { label: "20ft Container", value: "~660 boxes (~15 MT)" },
      { label: "40ft Container", value: "~1100 boxes (~25 MT)" },
    ],
  },
  "coffee": {
    name: "Coffee (Arabica & Robusta)",
    image: coffeeImage,
    description: "We export Tanzanian Arabica and Robusta coffee with rich aroma, uniform beans, and international certifications. Ideal for roasters and distributors looking for consistent flavor profiles.",
    specs: [
      { label: "Crop Season", value: "May – Oct" },
      { label: "Packaging", value: "60 kg Jute Bags with PE liner" },
      { label: "20ft Container", value: "9.8 MT (164 Bags)" },
      { label: "40ft Container", value: "19.2 MT (320 Bags)" },
      { label: "Origin", value: "Kilimanjaro, Mbeya, and Bukoba Regions" },
      { label: "Arabica Grades", value: "AAA, AA, A Grades" },
      { label: "Robusta Grades", value: "FAQ 12, FAQ 14, FAQ 16, FAQ 18" },
    ],
  },
  "pulses": {
    name: "Pulses",
    image: pulsesImage,
    description: "Tanzania's fertile soil produces export-quality pulses rich in protein and taste. We supply cleaned and graded pulses ideal for food industries and bulk buyers globally.",
    specs: [
      { label: "Varieties", value: "Chickpeas, Pigeon Peas, Kidney Beans, Green Mung Beans" },
      { label: "Moisture", value: "10–14%" },
      { label: "Purity", value: "98%+" },
      { label: "Packaging", value: "50 kg PP Bags" },
      { label: "Loading", value: "24 MT in 20ft Container" },
      { label: "Crop Origin", value: "Arusha / Mtwara / Dodoma" },
      { label: "Crop Season", value: "May – Dec" },
    ],
  },
  "sesame-seeds": {
    name: "Sesame Seeds",
    image: sesameImage,
    description: "Premium white and brown sesame seeds, machine-cleaned and Sortex processed for exceptional purity and quality.",
    specs: [
      { label: "Varieties", value: "White & Brown seeds" },
      { label: "Purity", value: "98-99.95%" },
      { label: "Moisture", value: "Below 8%" },
      { label: "Processing", value: "Machine-cleaned and Sortex processed" },
      { label: "Packaging", value: "50 kg and 25 kg PP bags" },
      { label: "Season", value: "May to July" },
      { label: "20ft Container", value: "16-17 MT (approx. 350 bags)" },
      { label: "40ft Container", value: "25 MT (approx. 500 bags)" },
    ],
  },
  "timber": {
    name: "Timber",
    image: timberImage,
    description: "We supply premium Tanzanian hardwood and softwood timber, kiln-dried and export-ready for furniture, construction, and industrial applications.",
    specs: [
      { label: "Types", value: "Teak Wood, Pine Wood" },
      { label: "Origin", value: "Mafinga, Iringa, Morogoro" },
      { label: "20ft Container", value: "23 MT / 25 CBM" },
      { label: "40ft Container", value: "27 MT / 27 CBM" },
      { label: "MOQ", value: "5 × 40ft FCL" },
    ],
  },
  "liquor": {
    name: "Liquor & Alcohol Imports",
    image: liquorImage,
    description: "Gamma specializes in importing high-grade and premium Liquor from India and Mauritius, catering to bulk, wholesale and retail demands across East Africa.",
    specs: [
      { label: "Products", value: "Whisky, Rum, Vodka, Gin" },
      { label: "Sizes", value: "200ml, 375ml, 750ml" },
      { label: "Packaging", value: "Secure corrugated cartons, 12 bottles per carton" },
      { label: "20ft Container", value: "~13,200 bottles (750ml) or mixed sizes" },
      { label: "Origin", value: "India and Mauritius" },
    ],
  },
};

interface ProductDetailProps {
  productId: keyof typeof products;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const product = products[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="py-20">
      <div className="container px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full rounded-md shadow-lg"
                data-testid="img-product"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4" data-testid="text-product-name">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-product-description">
                {product.description}
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-request-quote">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>

          <Card data-testid="card-specifications">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Package className="h-6 w-6 text-primary" />
                Product Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specs.map((spec, index) => {
                  const isCashewKernelGrades =
                    product.name === "Cashew Nut Kernels" && spec.label === "Grades";

                  const gradeItems = isCashewKernelGrades
                    ? spec.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean)
                    : [];

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                      data-testid={`spec-${index}`}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">{spec.label}</div>
                        {isCashewKernelGrades ? (
                          <div className="flex flex-wrap gap-2 mt-1">
                            {gradeItems.map((grade) => (
                              <Badge
                                key={grade}
                                className="bg-[#CD4F10] text-white hover:bg-[#B54509]"
                              >
                                {grade}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <div className="text-sm text-muted-foreground">
                            {spec.value}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
