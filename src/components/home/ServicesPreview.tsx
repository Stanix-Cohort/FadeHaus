import { FiChevronRight } from "react-icons/fi";

import Container from "../global/Container";
import ServiceCard from "../shared/ServiceCard";

import ScissorsIcon from "../../assets/icons/scissors-icon.svg";

import { homeServices } from "../../assets/data";

export default function ServicesPreview() {
  return (
    <section
      id="services-preview"
      className="
        bg-neutral-800

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
              <img
                src={ScissorsIcon}
                alt=""
                className="
                  w-5
                  h-5
                "
              />

              <span
                className="
                  text-bold-lg
                  text-(--color-brand-700)
                "
              >
                OUR SERVICES
              </span>

              <img
                src={ScissorsIcon}
                alt=""
                className="
                  w-5
                  h-5
                "
              />
            </div>

            <h2
              className="
                gallery-heading

                text-center

                max-w-225
              "
            >
              PREMIUM GROOMING TAILORED TO YOUR STYLE.
            </h2>
          </div>

          {/* Cards */}

          <div
            className="
              flex

              gap-6

              overflow-x-auto

              w-full

              scrollbar-hide
            "
          >
            {homeServices.map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* Footer */}

          <div
            className="
              w-full

              flex
              flex-col

              lg:flex-row

              items-center

              justify-between

              gap-6
            "
          >
            <p
              className="
                text-med-caption

                text-center
                lg:text-left

                text-(--color-brand-100)

                max-w-75
              "
            >
              Explore our full range of services and transparent pricing.
            </p>

            <button
              className="
                w-full
                max-w-75

                h-11

                rounded-xs

                border-[1.5px]
                border-(--color-brand-300)

                flex
                items-center
                justify-center

                gap-2

                text-(--color-brand-300)
                hover:text-(--btn-link-hover)
                hover:border-(--btn-link-hover)
              "
            >
              View All Services & Pricing
              <FiChevronRight size={18} />
            </button>
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
