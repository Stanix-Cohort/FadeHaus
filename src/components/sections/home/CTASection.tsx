import { FaWhatsapp } from "react-icons/fa";

import PhoneIcon from "../../../assets/icons/phone.svg";

import Container from "../../global/Container";

export default function CTASection() {
  return (
    <section
      className="
        bg-neutral-900

        py-12
        px-6

        lg:py-20
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col

            items-center

            text-center

            gap-6
          "
        >
          {/* Heading */}

          <h2
            className="
              heading-2

              text-white

              max-w-175
            "
          >
            READY FOR YOUR NEXT CUT?
          </h2>

          {/* Description */}

          <p
            className="
              text-med-sm

              text-(--color-brand-100)

              max-w-125
            "
          >
            Book your appointment in minutes and experience precision grooming
            the FadeHaus way.
          </p>

          {/* WhatsApp CTA */}
          <button className="whitespace-nowrap">
            <a
              href="https://wa.me/2348001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="
              mt-2

              w-71
              lg:w-83

              h-13.5

              border-[1.5px]
              border-(--color-brand-300)

              rounded-xs

              flex
              items-center
              justify-center

              gap-3

              text-(--color-brand-300)

              text-med-lg

              transition-all
              duration-300

              hover:bg-(--color-brand-300)
              hover:text-neutral-900
            "
            >
              <FaWhatsapp size={18} />
              Book Now On WhatsApp
            </a>
          </button>

          {/* Contact */}

          <div
            className="
              flex
              items-center

              gap-1.5

              mt-2
            "
          >
            <img
              src={PhoneIcon}
              alt="Phone"
              className="
                w-5
                h-5
              "
            />

            <span
              className="
                text-med-sm

                text-white
              "
            >
              Contact Us
            </span>

            <a
              href="tel:+2348001234567"
              className="
                text-med-sm

                text-(--color-brand-300)

                underline
              "
            >
              +234 800 123 4567
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
