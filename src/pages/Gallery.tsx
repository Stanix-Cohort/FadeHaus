import { useState } from "react";
import "./Gallery.css";
import Haircut1 from "../assets/images/Haircut_1.png";
import Haircut2 from "../assets/images/Haircut_2.png";
import Haircut3 from "../assets/images/Haircut_3.png";
import Haircut5 from "../assets/images/Haircut_5.png";
import Haircut6 from "../assets/images/Haircut_6.png";
import Haircut7 from "../assets/images/Haircut_7.png";
import Haircut8 from "../assets/images/Haircut_8.png";
import Haircut9 from "../assets/images/Haircut_9.png";
import BeardTrim from "../assets/images/beardTrim.png";
import FullBeard from "../assets/images/fullbeardsculting.png";
import HomeService from "../assets/images/Home_Service_Cut_4.png";
import BgSection from "../assets/images/BG_Section_4.jpg";
import phoneIcon from "../assets/icons/phone.svg";

const WHATSAPP = "2347049666359";

interface GalleryItem {
  id: number;
  img: string;
  category: string;
  label: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, img: Haircut1, category: "fades", label: "Fade" },
  { id: 2, img: Haircut2, category: "fades", label: "Fade" },
  { id: 3, img: Haircut3, category: "tapers", label: "Taper" },
  { id: 4, img: Haircut5, category: "fades", label: "Fade" },
  { id: 5, img: Haircut6, category: "beard", label: "Beard" },
  { id: 6, img: Haircut7, category: "lowcuts", label: "Low cut" },
  { id: 7, img: Haircut8, category: "tapers", label: "Taper" },
  { id: 8, img: Haircut9, category: "fades", label: "Fade" },
  { id: 9, img: BeardTrim, category: "beard", label: "Beard" },
  { id: 10, img: FullBeard, category: "beard", label: "Beard" },
  { id: 11, img: HomeService, category: "lowcuts", label: "Low cut" },
];

const tabs = ["ALL", "FADES", "TAPERS", "BEARD", "LOW CUTS"];

const faqs = [
  { q: "How do I book an appointment?", a: "Simply message us on WhatsApp or click the Book Now button." },
  { q: "Do I need to pay before my appointment?", a: "No, payment is made at the time of service." },
  { q: "Do you offer home service visits?", a: "Yes! We offer home visits on the Mainland and Island." },
  { q: "How much does a haircut cost?", a: "Prices start from ₦3,500. Check our Services page for full pricing." },
  { q: "Can I bring a reference photo?", a: "Absolutely! Reference photos help our barbers deliver exactly what you want." },
  { q: "Where is FadeHaus located?", a: "We are located at 123 Adeola Odeku St, VI, Lagos." },
  { q: "How long does a typical appointment take?", a: "Most sessions take between 30–60 minutes depending on the service." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="gal-faq-item" onClick={() => setOpen(!open)}>
      <div className="gal-faq-item__top">
        <span>- {q}</span>
        <span className={`gal-faq-item__arrow ${open ? "open" : ""}`}>&#x2304;</span>
      </div>
      {open && <p className="gal-faq-item__ans">{a}</p>}
    </div>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const filtered = activeTab === "ALL"
    ? galleryItems
    : galleryItems.filter((item) =>
        item.category === activeTab.toLowerCase().replace(" ", "")
      );

  return (
    <div className="gallery-page">
      <div className="gal-header">
        <p className="gal-header__label">💈 GALLERY 💈</p>
        <h1 className="gal-header__title">PRECISION CUTS. PREMIUM EXPERIENCE</h1>
      </div>

      <div className="gal-tabs-row">
        <div className="gal-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`gal-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <a href="/services" className="gal-view-all">
            View All Services &amp; Pricing &rsaquo;
          </a>
        </div>
      </div>

      <hr className="gal-divider" />

      <div className="gal-grid">
        {filtered.map((item) => (
          <div key={item.id} className="gal-card">
            <img src={item.img} alt={item.label} loading="lazy" className="gal-card__img" />
            <p className="gal-card__label">{item.label}</p>
            <hr className="gal-card__line" />
          </div>
        ))}
      </div>

      {/* <div className="gal-cta" style={{ backgroundImage: `url(${BgSection})` }}> */}
       <div className="gal-cta">
        <div className="gal-cta__overlay" />
        <div className="gal-cta__content">
          <h2 className="gal-cta__title">LOVE WHAT YOU SEE?</h2>
          <p className="gal-cta__sub">Book Your Appointment Now.</p>
          <button className="gal-cta__btn" onClick={() => window.open(`https://wa.me/${WHATSAPP}`, "_blank")}>
            &#9711; Book Now On WhatsApp
          </button>
          <div className="gal-cta__phone">
            <img src={phoneIcon} style={{ width: "16px", filter: "invert(75%) sepia(50%) saturate(400%) hue-rotate(5deg)" }} alt="phone" />
            <span>Contact Us</span>
            <a href="tel:+2347049666359">+234 704 966 6359</a>
          </div>
        </div>
      </div>

      <div className="gal-faqs">
        <p className="gal-faqs__label">&#9432; FAQs &#9432;</p>
        <p className="gal-faqs__sub">
          Have questions? Here are answers to some of the things clients ask before booking with FadeHaus.
        </p>
        <div className="gal-faqs__grid">
          <div>{faqs.slice(0, 4).map((f) => <FAQItem key={f.q} {...f} />)}</div>
          <div>{faqs.slice(4).map((f) => <FAQItem key={f.q} {...f} />)}</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;