import Container from "../global/Container";

import PhoneIcon from "../../assets/icons/phone.svg";

import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="
        bg-neutral-900

        py-12
        lg:py-20
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col

            items-center

            gap-10
          "
        >
          {/* Heading */}

          <div
            className="
              flex
              flex-col

              items-center

              gap-4
            "
          >
            <h2
              className="
                gallery-heading

                text-center

                max-w-200
              "
            >
              READY FOR YOUR
              <br />
              NEXT LOOK?
            </h2>

            <p
              className="
                text-med-sm

                text-center

                text-(--color-brand-100)

                max-w-[320px]
              "
            >
              Book your appointment today and experience premium grooming
              tailored to your style.
            </p>
          </div>

          {/* Actions */}

          <div
            className="
              flex
              flex-col

              items-center

              gap-6

              w-full

              lg:flex-row
              lg:justify-center
            "
          >
            {/* WhatsApp Button */}

            <a
              href="https://wa.me/2347049666359"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                max-w-71

                lg:max-w-83

                h-13.5

                rounded-xs

                border-[1.5px]
                border-(--color-brand-300)

                flex
                items-center
                justify-center

                gap-3"
            >
              <FaWhatsapp size={18} color="#DCC9A1" />

              <span
                className="
                text-med-lg

                text-(--color-brand-300)

                whitespace-nowrap"
              >
                Book Now on WhatsApp
              </span>
            </a>

            {/* Contact */}

            <div
              className="
                flex
                items-center

                gap-2
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
                Contact Us:
              </span>

              <a
                href="tel:+2347049666359"
                className="
                  text-med-sm

                  text-brand

                  underline
                "
              >
                +234 800 123 4567
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
