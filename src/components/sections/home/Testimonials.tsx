import Container from "../../global/Container";

import { IoStarSharp } from "react-icons/io5";

import TestimonialCard from "../../shared/TestimonialCard";

import BGSection4 from "../assets/images/BG_Section_4.jpg";

import { testimonials } from "../../../assets/data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative

        py-12
        lg:py-20

        overflow-hidden
      "
    >
      {/* Background */}

      <div className="absolute inset-0">
        <img
          src={BGSection4}
          alt=""
          className="
            w-full
            h-full

            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-black/80
          "
        />
      </div>

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
              <IoStarSharp size={20} color="#A68F64" />

              <span
                className="
                  text-bold-lg
                  text-(--color-brand-700)
                "
              >
                TESTIMONIALS
              </span>

              <IoStarSharp size={20} color="#A68F64" />
            </div>

            <h2
              className="
                gallery-heading

                text-center

                max-w-7xl
                lg:max-w-175
              "
            >
              WHAT OUR CUSTOMERS
              <br />
              ARE SAYING
            </h2>
          </div>

          {/* Mobile / Tablet */}

          <div
            className="
              lg:hidden

              w-full

              overflow-x-auto

              scrollbar-hide
            "
          >
            <div
              className="
                flex

                gap-4

                min-w-max

                px-1
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
          </div>

          {/* Desktop */}

          <div
            className="
              hidden
              lg:flex

              items-stretch
              justify-center

              gap-4
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
        </div>
      </Container>
    </section>
  );
}
