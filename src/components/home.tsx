import { useLanguage } from "./landing/LanguageContext";
import { Header } from "./landing/Header";
import { Hero } from "./landing/Hero";
import { Features } from "./landing/Features";
import { Trust } from "./landing/Trust";
import { Testimonials } from "./landing/Testimonials";
import { Pricing } from "./landing/Pricing";
import { Footer } from "./landing/Footer";
import { FabricShowcase } from "./landing/FabricShowcase";
import { GlobalPresence } from "./landing/GlobalPresence";
import { WarehouseShowcase } from "./landing/WarehouseShowcase";
import { AnnouncementBar } from "./landing/AnnouncementBar";
import { NewsSection } from "./landing/NewsSection";
import { AgentsSection } from "./landing/AgentsSection";

function HomeContent() {
  const { dir, language } = useLanguage();
  
  return (
    <div className={`min-h-screen bg-background dark:bg-gray-900 font-sans text-foreground overflow-x-hidden selection:bg-texafab-emerald/20 dark:selection:bg-texafab-teal/30 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        {language === "ar" ? "انتقل إلى المحتوى الرئيسي" : "Skip to main content"}
      </a>
      
      {/* Fixed top container for announcement bar and header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar />
      </div>
      <Header />
      
      <main id="main-content">
        <Hero />
        <WarehouseShowcase />
        <Features />
        <FabricShowcase />
        <Trust />
        <GlobalPresence />
        <NewsSection />
        <Testimonials />
        <AgentsSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

function Home() {
  return <HomeContent />;
}

export default Home;
