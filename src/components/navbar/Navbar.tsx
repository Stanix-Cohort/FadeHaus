import { useState } from "react";

import Logo from "../global/Logo";
import Container from "../global/Container";
import Button from "../global/Button";

import NavLinks from "./NavLinks";
import HamburgerButton from "./HamburgerButton";
import MobileSidebar from "./MobileSidebar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="
          fixed
          left-0
          right-0

          top-8

          z-50

         bg-neutral-800
        "
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

            <div
              className="
                lg:hidden
              "
            >
              <HamburgerButton onClick={() => setIsMenuOpen(true)} />
            </div>
          </div>
        </Container>
      </nav>

      {/* Sidebar */}

      <MobileSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
