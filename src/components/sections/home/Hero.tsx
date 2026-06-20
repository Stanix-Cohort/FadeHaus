import Container from "../../global/Container";

import HeroImage from "../../../assets/images/Mobile_BG_IMG_Hero_Section.png";

import FloatingWhatsApp from "../../global/FloatingWhatsApp";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-226
      "
    >
      {/* Background Image */}

      <div
        className="
          absolute
          inset-0
        "
      >
        <img
          src={HeroImage}
          alt="FadeHaus Barber"
          className="
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
            flex-col
            items-center
            justify-end
            pt-24

            px-6
            py-12

            text-center
          "
        >
          {/* Heading */}

          <h2
            className="
              heading-2
              text-white
              max-w-87.5
            "
          >
            PRECISION CUTS.
            <br />
            PREMIUM EXPERIENCE.
          </h2>

          {/* Description */}

          <p
            className="
              text-med-md

              mt-4

              max-w-85

              text-(--color-brand-100)
            "
          >
            Where craftsmanship, style, and attention to detail come together to
            create your best look.
          </p>

          {/* CTA Buttons */}

          <div
            className="
              mt-8

              flex
              flex-col

              items-center

              gap-6

              w-full
            "
          >
            <button
              className="
                w-full
                max-w-83

                h-13.5

                bg-(--color-brand-300)

                text-med-md

                text-neutral-900

                rounded-xs
              "
            >
              Book Now On WhatsApp
            </button>

            <button
              className="
                w-45.25
                h-13.5

                border-[1.5px]
                border-(--color-brand-300)

                text-med-md
                text-white

                rounded-xs
              "
            >
              View Gallery
            </button>
          </div>
        </div>
      </Container>

      <FloatingWhatsApp />
    </section>
  );
}
