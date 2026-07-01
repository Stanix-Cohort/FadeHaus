import beardtrim from "../assets/images/beardTrim.png";
import buzzcut from "../assets/images/buzzcut.png";
import executivepackage from "../assets/images/executivepackage.png";
import lowfade from "../assets/images/lowfade.png";
import mainland from "../assets/images/mainland.png";
import skinfade from "../assets/images/skinfade.png";
import signaturegrooming from "../assets/images/signaturegrooming.png";
import taperfade from "../assets/images/taperfade.png";
import fullbeardsculpting from "../assets/images/fullbeardsculting.svg";
import island from "../assets/images/island.png";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Services.css";

const WHATSAPP = "2349125285704";

const openWhatsApp = (service: string = ""): void => {
  const msg = encodeURIComponent(
    service
      ? `Hi, I'd like to book: ${service}`
      : "Hi, I'd like to book an appointment.",
  );
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
};

const tabs: string[] = [
  "HAIRCUTS",
  "BEARD SERVICE",
  "PREMIUM PACKAGE",
  "HOME SERVICE",
];

// {/* <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 60px' }} /> */}

interface Service {
  name: string;
  price: string;
  desc: string;
  img: string;
}

interface TabData {
  label: string;
  services: Service[];
}

interface FAQ {
  q: string;
  a: string;
}

const data: Record<string, TabData> = {
  HAIRCUTS: {
    label: "Precision Haircuts",
    services: [
      {
        name: "SKIN FADE",
        price: "₦5,000",
        desc: "Clean, sharp fade with seamless blending.",
        // img: "/assets/skinfade.svg",
        img: skinfade,
      },
      {
        name: "LOW FADE",
        desc: "Low, sharp fade with seamless blending.",
        price: "₦4,500",
        // img: "/assets/lowfade.svg",
        img: lowfade,
      },
      {
        name: "TAPER FADE",
        desc: "Stylish, sharp fade with seamless blending.",
        // img: "/assets/taperfade.svg",
        price: "₦4,500",
        img: taperfade,
      },
      {
        name: "BUZZ CUT",
        desc: "Low, even & sharp with fixed level.",
        price: "₦3,500",
        // img: "/assets/buzzcut.svg",
        img: buzzcut,
      },
      {
        name: "BEARD TRIM",
        desc: "Sharp shaping and maintenance.",
        price: "₦3,000",
        // img: "/assets/beardtrim.svg",
        img: beardtrim,
      },
      {
        name: "FULL BEARD SCULPTING",
        desc: "Sharp shaping and styling.",
        price: "₦4,000",
        // img: "/assets/fullbeardsculpting.svg",
        img: fullbeardsculpting,
      },
    ],
  },
  "BEARD SERVICE": {
    label: "Beard Grooming",
    services: [
      {
        name: "BEARD TRIM",
        desc: "Sharp shaping and maintenance.",
        // img: "/assets/beardtrim.svg",
        price: "₦3,000",
        img: beardtrim,
      },
      {
        name: "FULL BEARD SCULPTING",
        desc: "Sharp shaping and styling.",
        price: "₦4,000",
        // img: "/assets/fullbeardsculpting.svg",
        img: fullbeardsculpting,
      },
    ],
  },
  "PREMIUM PACKAGE": {
    label: "Premium Packages",
    services: [
      {
        name: "SIGNATURE GROOMING PACKAGE",
        price: "₦8,000",
        desc: "Haircut + Beard Grooming",
        // img: "/assets/signature.svg",
        img: signaturegrooming,
      },
      {
        name: "EXECUTIVE PACKAGE",
        price: "₦10,000",
        desc: "Haircut + Beard + Finishing Treatment",
        // img: "/assets/executive.svg",
        img: executivepackage,
      },
    ],
  },
  "HOME SERVICE": {
    label: "Home Visits",
    services: [
      {
        name: "MAINLAND",
        price: "₦15,000",
        desc: "Professional grooming delivered to your location.",
        // img: "/assets/mainland.svg",
        img: mainland,
      },
      {
        name: "ISLAND",
        price: "₦20,000",
        desc: "Premium home service across selected locations.",
        // img: "/assets/island.svg",
        img: island,
      },
    ],
  },
};

const faqs: FAQ[] = [
  {
    q: "How do I book an appointment?",
    a: "Simply click 'Book This' on any service or message us directly on WhatsApp.",
  },
  {
    q: "Do you offer home service?",
    a: "Yes! We offer home visits on the Mainland and Island. Select the Home Service tab for pricing.",
  },
  {
    q: "How long does a session take?",
    a: "Most sessions take between 30–60 minutes depending on the service.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash and bank transfers. Payment is made before or at the time of service.",
  },
  {
    q: "Can I walk in without an appointment?",
    a: "Walk-ins are welcome but booking in advance guarantees your slot.",
  },
];

const ServiceCard = ({ name, price, desc, img }: Service) => (
  <div className="svc-card">
    <div className="svc-card__img-wrap">
      <img src={img} alt={name} loading="lazy" className="svc-card__img" />
    </div>
    <h3 className="svc-card__name">{name}</h3>
    <p className="svc-card__desc">{desc}</p>
    <p className="svc-card__price">{price}</p>
    <button className="svc-card__btn" onClick={() => openWhatsApp(name)}>
      Book This
    </button>
  </div>
);

const FAQItem = ({ q, a }: FAQ) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-item__top">
        <span>- {q}</span>
        <span className={`faq-item__arrow ${open ? "open" : ""}`}>
          &#x2304;
        </span>
      </div>
      {open && <p className="faq-item__ans">{a}</p>}
    </div>
  );
};

const Services = () => {
  const [searchParams] = useSearchParams();

  const initialTab =
    searchParams.get("tab") && tabs.includes(searchParams.get("tab") as string)
      ? (searchParams.get("tab") as string)
      : "HAIRCUTS";

  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const current = data[activeTab];

  return (
    <div className="services-page">
      <div className="svc-header">
        {/* <p className="svc-header__label">✂ OUR SERVICES ✂</p> */}


      <p className="svc-header__label flex items-center justify-center gap-2">
  <span className="svc-scissors">✂</span>
  <span>OUR SERVICES</span>
  <span className="svc-scissors">✂</span>
</p>



        <h1 className="svc-header__title">PREMIUM GROOMING SERVICE</h1>
      </div>

      <div className="svc-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`svc-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="svc-section">
        <p className="svc-section__label">{current.label}</p>
        <div className="svc-grid">
          {current.services.map((s) => (
            <ServiceCard key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="svc-tailored">
        <p className="svc-tailored__heading">Need something tailored?</p>
        <p className="svc-tailored__sub">
          For bespoke packages or home service quotes, message us directly on:{" "}
          <span className="svc-tailored__wa" onClick={() => openWhatsApp()}>
            WhatsApp
          </span>
        </p>
      </div>

      <hr className="svc-divider" />

      <div className="svc-banner">
        <h2 className="svc-banner__title">READY FOR YOUR NEXT CUT?</h2>
        <p className="svc-banner__sub">
          Book your appointment in minutes and experience precision grooming the
          FadeHaus way.
        </p>
        <button className="svc-banner__btn" onClick={() => openWhatsApp()}>
          &#9711; Book Now On WhatsApp
        </button>
      </div>

      <div className="svc-faqs">
        <p className="svc-faqs__label">&#9432; FAQs &#9432;</p>

        <p className="svc-faqs__sub">
          Have questions? Here are answers to some of the things clients ask
          before booking with FadeHaus.
        </p>

        <div className="svc-faqs__grid">
          <div>
            {faqs.slice(0, 3).map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>

          <div>
            {faqs.slice(3).map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
