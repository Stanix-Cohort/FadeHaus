import ContactHero from "../components/contact/ContactHero";
import ContactBooking from "../components/contact/ContactBooking";
import ContactVisit from "../components/contact/ContactVisit";
import FAQSection from "../components/home/FAQSection";

export default function Contact() {
  return (
    <>
      <ContactHero />

      <ContactBooking />

      <ContactVisit />

      <FAQSection />
    </>
  );
}
