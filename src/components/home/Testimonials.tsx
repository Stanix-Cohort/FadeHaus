import Container from "../global/Container";

import BackgroundImage from "../../assets/images/BG_Section_4.jpg";

import { IoStarSharp } from "react-icons/io5";

import TestimonialCard from "../shared/TestimonialCard";

import { testimonials } from "../../assets/data";

export default function Testimonials() {
  return (
    <section
      className="
        relative

        overflow-hidden

        py-12
        lg:py-20
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          inset-0
        "
      >
        <img
          src={BackgroundImage}
          alt=""
          className="
            w-full
            h-full

            object-cover

            opacity-20
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-neutral-800
          "
        />
      </div>

      {/* Content */}

      <Container>
        <div
          className="
            relative
            z-10

            flex
            flex-col

            items-center

            gap-10
          "
        >
          {/* Header */}

          <div
            className="
              flex
              flex-col

              items-center

              gap-4
            "
          >
            <div
              className="
                flex
                items-center

                gap-2
              "
            >
              <IoStarSharp size={18} color="#DCC9A1" />

              <span
                className="
                  text-bold-lg
                  text-(--color-brand-700)
                "
              >
                TESTIMONIALS
              </span>

              <IoStarSharp size={18} color="#DCC9A1" />
            </div>

            <h2
              className="
                gallery-heading

                text-center

                max-w-[320px]

                lg:max-w-225
              "
            >
              WHAT OUR CLIENTS ARE SAYING
            </h2>
          </div>

          {/* Mobile / Tablet */}

          <div
            className="
    flex

    gap-6

    overflow-x-auto

    w-full

    scrollbar-hide

    lg:hidden
  "
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                image={testimonial.image}
                name={testimonial.name}
                review={testimonial.review}
                rating={testimonial.rating}
              />
            ))}
          </div>

          {/* Desktop */}

          <div
            className="
            hidden
            lg:flex

            justify-center

            gap-6

            w-full
  "
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                image={testimonial.image}
                name={testimonial.name}
                review={testimonial.review}
                rating={testimonial.rating}
              />
            ))}
          </div>

          {/* Divider */}

          <div
            className="
              w-full
              h-px

              bg-neutral-700
            "
          />
        </div>
      </Container>
    </section>
  );
}
