import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

import Container from "../global/Container";

import MobileHeroImage from "../../assets/images/Mobile_BG_IMG.png";
import DesktopHeroImage from "../../assets/images/BG_IMG_Hero_Section.png";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

export default function Hero() {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20FadeHaus,%20I'd%20like%20to%20book%20an%20appointment.`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="home"
      className="
        relative

        h-226
        lg:h-190

        overflow-hidden
      "
    >
      {/* Background */}

      <div className="absolute inset-0">
        {/* Mobile / Tablet */}

        <img
          src={MobileHeroImage}
          alt="FadeHaus Barber"
          className="
            block
            lg:hidden

            w-full
            h-full

            object-cover
            object-center
          "
        />

        {/* Desktop */}

        <img
          src={DesktopHeroImage}
          alt="FadeHaus Barber"
          className="
            hidden
            lg:block

            w-full
            h-full

            object-cover
            object-center
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-black/45
          "
        />
      </div>

      {/* Content */}

      <Container>
        <div
          className="
            relative
            z-20

            h-full

            flex
            flex-col

            items-center
            text-center

            lg:items-start
            lg:text-left
          "
        >
          <div
            className="
              mt-62

              md:mt-60

              lg:mt-52

              max-w-190
            "
          >
            {/* Heading */}

            <h1
              className="
                hero-heading

                leading-[120%]

                tracking-[0.01em]
              "
            >
              PRECISION CUTS.
              <br />
              PREMIUM EXPERIENCE.
            </h1>

            {/* Description */}

            <p
              className="
                mt-4

                mx-auto
                lg:mx-0

                max-w-[320px]
                md:max-w-125

                text-(--color-brand-100)

                font-medium

                text-[14px]
                md:text-[15px]
                lg:text-[20px]

                leading-[120%]

                tracking-wider
              "
            >
              Where craftsmanship, style, and attention to detail come together
              to create your best look.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-8

                flex
                flex-col

                lg:flex-row

                items-center
                lg:items-start

                gap-4
              "
            >
              {/* WhatsApp */}

              <button
                onClick={openWhatsApp}
                aria-label="Book appointment on WhatsApp"
                className="
                  order-1
                  lg:order-2

                  w-83
                  h-13.5

                  rounded-xs

                  bg-(--color-brand-300)

                  text-neutral-900

                  text-med-md

                  flex
                  items-center
                  justify-center

                  gap-3

                  transition-all
                  duration-300

                  hover:bg-(--btn-primary-hover)

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-(--color-brand-300)
                "
              >
                Book Now On WhatsApp
                <FiChevronRight size={18} />
              </button>

              {/* Gallery */}

              <Link
                to="/gallery"
                className="
                  order-2
                  lg:order-1
                "
              >
                <button
                  aria-label="View Gallery"
                  className="
                    w-45.25
                    h-13.5

                    rounded-xs

                    border-[1.5px]
                    border-(--color-brand-300)

                    text-(--color-brand-300)

                    text-med-lg

                    transition-all
                    duration-300

                    hover:text-(--btn-link-hover)
                    hover:border-(--btn-link-hover)

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-(--color-brand-300)
                  "
                >
                  View Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
