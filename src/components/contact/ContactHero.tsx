import Container from "../global/Container";

import { IoStarSharp } from "react-icons/io5";

export default function ContactHero() {
  return (
    <section
      className="
        bg-neutral-800

        pt-35
        pb-6

        lg:pt-35
        lg:pb-6

        border-b
        border-(--color-brand-300)
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col

            items-center

            gap-4

            lg:gap-6
          "
        >
          {/* Section Label */}

          <div
            className="
              flex
              items-center

              gap-2
            "
          >
            <IoStarSharp size={14} className="text-(--color-brand-700)" />

            <span
              className="
                text-bold-lg

                text-(--color-brand-700)

                uppercase
              "
            >
              CONTACT US
            </span>

            <IoStarSharp size={14} className="text-(--color-brand-700)" />
          </div>

          {/* Heading */}

          <h1
            className="
              gallery-heading

              text-center

              max-w-[320px]

              lg:max-w-none
            "
          >
            BOOK YOUR APPOINTMENT
          </h1>

          {/* Subtitle */}

          <p
            className="
              text-med-caption
              lg:text-med-sm

              text-center

              text-white

              max-w-[320px]
              lg:max-w-none
            "
          >
            Choose how you'd like to connect with FadeHaus.
          </p>
        </div>
      </Container>
    </section>
  );
}
