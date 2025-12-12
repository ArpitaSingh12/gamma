import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { blogPosts, BlogCategoryKey } from "@/data/blogPosts";
import cashewImage from "@assets/generated_images/Raw_cashew_nuts_product_0d9595ff.png";
import { useLanguage, useTranslation } from "@/contexts/LanguageContext";
import coffeeImage from "@assets/generated_images/Tanzanian_coffee_beans_product_4f570ea5.png";
import portImage from "@assets/generated_images/International_shipping_port_operations_cd4fe4c1.png";
import pulsesImage from "@assets/generated_images/Assorted_pulses_product_display_49ce81f5.png";

const imageMap: Record<string, string> = {
  cashew: cashewImage,
  coffee: coffeeImage,
  port: portImage,
  pulses: pulsesImage,
  pulsesHero2: "/images/Pulses/different-types-grains_4fdc5c692f79d253-1.jpg",
  coffeeGrading: "/images/Coffee/delicious-organic-coffee-still-life_23-2151762341.avif",
  liquor: "/images/Liquor/SAPs-S3Q-Flavoured-Collection.jpg",
};

const CATEGORY_LABEL_MAP: Record<BlogCategoryKey, string> = {
  industryInsights: "common.blogCategoryIndustryInsights",
  productSpotlight: "common.blogCategoryProductSpotlight",
  tradeInsights: "common.blogCategoryTradeInsights",
  companyNews: "common.blogCategoryCompanyNews",
  exportGuide: "common.blogCategoryExportGuide",
  educational: "common.blogCategoryEducational",
};

const categories: { key: "all" | BlogCategoryKey; labelKey: string }[] = [
  { key: "all", labelKey: "common.blogCategoryAll" },
  { key: "industryInsights", labelKey: "common.blogCategoryIndustryInsights" },
  { key: "productSpotlight", labelKey: "common.blogCategoryProductSpotlight" },
  { key: "tradeInsights", labelKey: "common.blogCategoryTradeInsights" },
  { key: "companyNews", labelKey: "common.blogCategoryCompanyNews" },
  { key: "exportGuide", labelKey: "common.blogCategoryExportGuide" },
  { key: "educational", labelKey: "common.blogCategoryEducational" },
];

export default function Blog() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<"all" | BlogCategoryKey>("all");

  const allPosts = Object.values(blogPosts);

  const filteredPosts =
    selectedCategory === "all"
      ? allPosts
      : allPosts.filter((post) => post.categoryKey === selectedCategory);

  return (
    <div className="py-20">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-blog-title">
              {t("common.blogTitle")}
            </h1>
            <p className="text-lg text-muted-foreground" data-testid="text-blog-subtitle">
              {t("common.blogSubtitle")}
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const label = t(category.labelKey);
              return (
                <Badge
                  key={category.key}
                  variant={selectedCategory === category.key ? "default" : "outline"}
                  className="cursor-pointer hover-elevate"
                  onClick={() => setSelectedCategory(category.key)}
                  data-testid={`filter-${label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {label}
                </Badge>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => {
              const localized = post.translations[language] ?? post.translations["en"];

              return (
                <Card
                  key={post.id}
                  className="overflow-hidden hover-elevate group flex flex-col"
                  style={{ animationDelay: `${index * 50}ms` }}
                  data-testid={`card-blog-${post.id}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={imageMap[post.image]}
                      alt={localized.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="flex-1">
                    <Badge className="w-fit mb-2" data-testid={`badge-category-${post.id}`}>
                      {t(CATEGORY_LABEL_MAP[post.categoryKey])}
                    </Badge>
                    <h3
                      className="text-lg font-semibold leading-tight mb-2"
                      data-testid={`text-blog-title-${post.id}`}
                    >
                      {localized.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {localized.excerpt}
                    </p>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.id}`} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full"
                        data-testid={`button-read-more-${post.id}`}
                      >
                        {t("common.blogReadMore")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t("common.blogNoPosts")}</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">{t("common.blogNewsletterPrompt")}</p>
            <Link href="/contact">
              <Button data-testid="button-subscribe">{t("common.blogNewsletterButton")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
