import Haircut1 from "./images/Haircut_1.png";
import Haircut2 from "./images/Haircut_2.png";
import Haircut3 from "./images/Haircut_3.png";
import Haircut4 from "./images/Home_Service_Cut_4.png";

import Haircut5 from "./images/Haircut_5.png";
import Haircut6 from "./images/Haircut_6.png";
import Haircut7 from "./images/Haircut_7.png";
import Haircut8 from "./images/Haircut_8.png";
import Haircut9 from "./images/Haircut_9.png";

import Profile1 from "./images/profile_1.png";
import Profile2 from "./images/profile_2.png";
import Profile3 from "./images/profile_3.png";
import Profile4 from "./images/profile_4.svg";

import ClipperIcon from "./icons/clipper_icon.svg";
import TrimmerIcon from "./icons/trimmer_icon.svg";
import FullPackageIcon from "./icons/full_package_icon.svg";
import MapPinIcon from "./icons/map-pin.svg";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Services",
    href: "/services",
  },

  {
    label: "Gallery",
    href: "/gallery",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

export const homeServices = [
  {
    id: 1,
    icon: ClipperIcon,
    image: Haircut1,
    title: "PRECISION HAIRCUTS",
    description:
      "Clean cuts tailored to your style, face shape, and personal preference.",
  },

  {
    id: 2,
    icon: TrimmerIcon,
    image: Haircut2,
    title: "BEARD TRIM",
    description: "Sharp lines, clean shaping, and expert beard maintenance.",
  },

  {
    id: 3,
    icon: FullPackageIcon,
    image: Haircut3,
    title: "PREMIUM PACKAGE",
    description:
      "A complete grooming session combining haircut, beard care, and finishing touches.",
  },

  {
    id: 4,
    icon: MapPinIcon,
    image: Haircut4,
    title: "HOME SERVICES",
    description:
      "Professional FadeHaus grooming delivered to your preferred location.",
  },
];

export const galleryImages = [Haircut5, Haircut6, Haircut7, Haircut8, Haircut9];

export const testimonials = [
  {
    id: 1,
    image: Profile1,
    name: "Emeka, O.",
    review:
      "FadeHaus is easily one of the best. The attention to detail on my fade was outstanding, and the booking process was effortless.",
    rating: 5,
  },

  {
    id: 2,
    image: Profile2,
    name: "Tunde, A.",
    review:
      "Consistency is what keeps me coming back. Every cut is sharp, every appointment is on time, and the team always delivers top-quality service.",
    rating: 5,
  },

  {
    id: 3,
    image: Profile3,
    name: "Michael, E.",
    review:
      "I booked FadeHaus for my brother after seeing their gallery online. The results exceeded expectations.",
    rating: 4.5,
  },
  {
    id: 4,
    image: Profile4,
    name: "Dami, A.",
    review:
      "I showed them a reference photo and they delivered exactly what I wanted. Clean environment, professional service, and a genuinely premium experience",
    rating: 4,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I book an appointment?",
    answer:
      "Simply click 'Book This' on any service or message us directly on WhatsApp.",
  },

  {
    id: 2,
    question: "Do you offer home service?",
    answer:
      "Yes! We offer home visits on the Mainland and Island. Select the Home Service tab for pricing.",
  },

  {
    id: 3,
    question: "How long does a session take?",
    answer:
      "Most sessions take between 30–60 minutes depending on the service.",
  },

  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept cash and bank transfers. Payment is made before or at the time of service.",
  },

  {
    id: 5,
    question: "Can I walk in without an appointment?",
    answer: "Walk-ins are welcome but booking in advance guarantees your slot.",
  },

  {
    id: 6,
    question: "Can I bring a reference photo?",
    answer:
      "Absolutely. In fact, we encourage it. You can send your preferred style directly through WhatsApp when booking.",
  },
  {
    id: 7,
    question: "Where is FadeHaus located?",
    answer:
      "Our address and Get Direction links can be found on the Contact page, announcement bar and footer.",
  },
];

export const serviceTypes = [
  "HAIRCUT",
  "BEARD TRIM",
  "PREMIUM PACKAGE",
  "HOME SERVICE",
];

export const appointmentTimes = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];