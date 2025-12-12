import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Partner from "@/pages/Partner";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Products from "@/pages/Products";
import Cashew from "@/pages/products/Cashew";
import Coffee from "@/pages/products/Coffee";
import Cocoa from "@/pages/products/Cocoa";
import Pulses from "@/pages/products/Pulses";
import Liquor from "@/pages/products/Liquor";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/partner" component={Partner} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/products" component={Products} />
      <Route path="/products/cashew" component={Cashew} />
      <Route path="/products/coffee" component={Coffee} />
      <Route path="/products/cocoa" component={Cocoa} />
      <Route path="/products/pulses" component={Pulses} />
      <Route path="/products/liquor" component={Liquor} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
  // Observe changes in the DOM for Google Translate injection
  const observer = new MutationObserver(() => {
    const bannerFrame = document.querySelector('.goog-te-banner-frame');
    const menuFrame = document.querySelector('.goog-te-menu-frame');

    // Hide banner iframe
    if (bannerFrame) {
      (bannerFrame as HTMLElement).style.display = "none";
      (bannerFrame as HTMLElement).style.visibility = "hidden";
      (bannerFrame as HTMLElement).style.height = "0px";
    }

    // Hide dropdown iframe
    if (menuFrame) {
      (menuFrame as HTMLElement).style.display = "none";
    }

    // Remove Google's forced top spacing
    document.body.style.position = "static";
    document.body.style.top = "0px";
    document.documentElement.style.top = "0px";
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return () => observer.disconnect();
}, []);


  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <WhatsAppButton />
          <Toaster />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
