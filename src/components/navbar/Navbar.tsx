import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Logo from "../global/Logo";
import Container from "../global/Container";
import Button from "../global/Button";

import NavLinks from "./NavLinks";
import HamburgerButton from "./HamburgerButton";
import MobileSidebar from "./MobileSidebar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // All pages except Home stay filled

    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;

      setIsScrolled(window.scrollY > heroHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`
          fixed
          left-0
          right-0

          top-8

          z-50

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

              py-6
            "
          >
            {/* Logo */}

            <Logo />

            {/* Desktop Navigation */}

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
              <Button size="md" className="rounded">
                Book Now
              </Button>
            </div>

            {/* Mobile / Tablet */}

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
