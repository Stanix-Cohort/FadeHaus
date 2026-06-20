import Container from "../global/Container";
import MobileHeroImage from "../../assets/images/Mobile_BG_IMG_Hero_Section.png";
import DesktopHeroImage from "../../assets/images/BG_IMG_Hero_Section.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-226
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
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-black/50
          "
        />
      </div>

      {/* Content */}

      <Container>
        <div
          className="
            relative
            z-10

            min-h-226

            flex
            items-center
          "
        >
          <div
            className="
              w-full

              flex
              flex-col

              items-center
              text-center

              lg:items-start
              lg:text-left

              mt-85
              md:mt-98

              lg:mt-0

              max-w-175
            "
          >
            {/* Heading */}

            <h1 className="hero-heading">
              PRECISION CUTS.
              <br />
              PREMIUM EXPERIENCE.
            </h1>

            {/* Description */}

            <p
              className="
                hero-description

                text-(--color-brand-100)

                mt-6

                max-w-162.5
              "
            >
              Where craftsmanship, style, and attention to detail come together
              to create your best look.
            </p>

            {/* CTA Buttons */}

            <div
              className="
                mt-10

                flex
                flex-col

                lg:flex-row

                items-center
                lg:items-start

                gap-6

                w-full
                lg:w-auto
              "
            >
              {/* View Gallery FIRST */}

              <button
                className="
                  w-55

                  h-13.5

                  rounded-xs

                  border-[1.5px]
                  border-(--color-brand-300)

                  text-(--color-brand-300)

                  text-med-lg

                  cursor-pointer

                  transition-all
                  duration-300

                  hover:text-(--btn-link-hover)
                  hover:border-(--btn-link-hover)
                "
              >
                View Gallery
              </button>

              {/* Book Now */}

              <button
                className="
                  w-full
                  max-w-83

                  h-13.5

                  rounded-xs

                  bg-(--color-brand-300)

                  text-neutral-900

                  text-med-md

                  cursor-pointer
                  transition-all
                  duration-300

                  hover:bg-(--btn-primary-hover)
                hover:text-neutral-900
                "
              >
                Book Now On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
