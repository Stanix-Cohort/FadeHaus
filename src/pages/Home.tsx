import HomeLayout from "../layouts/HomeLayout";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";
import FAQSection from "../components/home/FAQSection";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />

      <ServicesPreview />

      <GalleryPreview />

      <Testimonials />

      <CTASection />

      <FAQSection />

      <Footer />
    </HomeLayout>
  );
}
