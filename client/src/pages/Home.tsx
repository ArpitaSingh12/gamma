import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import GlobalPresence from "@/components/GlobalPresence";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <GlobalPresence />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
}
