import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import BrokerMarquee from "@/components/home/BrokerMarquee";
import AuthoritySection from "@/components/home/AuthoritySection";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Equipment from "@/components/home/Equipment";
import Pricing from "@/components/home/Pricing";
import Guarantees from "@/components/home/Guarantees";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrokerMarquee />
        <AuthoritySection />
        <Services />
        <HowItWorks />
        <Equipment />
        <Pricing />
        <Guarantees />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
