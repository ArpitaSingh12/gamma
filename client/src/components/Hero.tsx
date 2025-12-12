import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Award, TrendingUp, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/images/Hero/360_F_956889985_edbwI1vh3jL5jYZqKVcyNz58qJmwV02I.jpg",
    "/images/Hero/delicious-organic-coffee-still-life_23-2151762341.avif",
    "/images/Hero/istockphoto-1053389316-612x612.jpg",
    "/images/Hero/collection-common-food-allergens-people_23-2149870534.avif",
    "/images/Hero/SAPs-S3Q-Flavoured-Collection.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  
  const statIconClass = "h-7 w-7 text-primary shrink-0";

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/50" />
        </div>
      ))}
      
      <div className="relative z-10 container px-6 py-20">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200" data-testid="text-hero-subtitle">
            {t("hero.subtitle")}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link href="/products">
              <Button size="lg" className="bg-primary/90 backdrop-blur hover:bg-primary border border-primary-border" data-testid="button-hero-view-products">
                {t("hero.viewProducts")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/partner">
              <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur text-white border-white/30 hover:bg-background/20" data-testid="button-hero-partner">
                {t("hero.partnerWithUs")}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="flex items-center gap-3 text-white" data-testid="stat-expertise">
              <Award className={statIconClass} />
              <div>
                <div className="text-2xl font-bold">{t("hero.yearsExpertise")}</div>
                <div className="text-sm text-white/80">{t("hero.combinedExpertise")}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white" data-testid="stat-countries">
              <Globe className={statIconClass} />
              <div>
                <div className="text-2xl font-bold">{t("hero.countries")}</div>
                <div className="text-sm text-white/80">{t("hero.globalReach")}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white" data-testid="stat-supply-chain">
              <TrendingUp className={statIconClass} />
              <div>
                <div className="text-2xl font-bold">{t("hero.supplyChain")}</div>
                <div className="text-sm text-white/80">{t("hero.chainManagement")}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white" data-testid="stat-logistics">
              <Clock className={statIconClass} />
              <div>
                <div className="text-2xl font-bold">{t("hero.logisticsTitle")}</div>
                <div className="text-sm text-white/80">{t("hero.logisticsSubtitle")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
