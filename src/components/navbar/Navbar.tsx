import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import Logo from "../global/Logo";
import Container from "../global/Container";
import Button from "../global/Button";

import NavLinks from "./NavLinks";
import HamburgerButton from "./HamburgerButton";
import MobileSidebar from "./MobileSidebar";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // All pages except Home should have filled navbar

    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.getElementById("home");

      if (!heroSection) return;

      const triggerPoint =
        heroSection.offsetTop + heroSection.offsetHeight * 0.7;

      setIsScrolled(window.scrollY >= triggerPoint);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20FadeHaus,%20I'd%20like%20to%20book%20an%20appointment.`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <nav
        className={`
          fixed

          left-0
          right-0

          top-8

          z-60

          transition-all
          duration-500

          ${isScrolled ? "bg-neutral-800 shadow-md" : "bg-transparent"}
        `}
      >
        <Container>
          <div
            className="
              flex
              items-center
              justify-between

              h-23
            "
          >
            {/* Logo */}

            <Link to="/" aria-label="FadeHaus Home">
              <Logo />
            </Link>

            {/* Desktop Nav */}

            <div
              className="
                hidden
                lg:flex

                items-center

                gap-14
              "
            >
              <NavLinks />
            </div>

            {/* Desktop CTA */}

            <div
              className="
                hidden
                lg:block
              "
            >
              <Button
                size="md"
                className="rounded"
                onClick={openWhatsApp}
                aria-label="Book appointment on WhatsApp"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu */}

            <div className="lg:hidden">
              <HamburgerButton onClick={() => setIsMenuOpen(true)} />
            </div>
          </div>
        </Container>
      </nav>

      <MobileSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
