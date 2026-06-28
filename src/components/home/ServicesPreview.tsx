import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, A11y } from "swiper/modules";

import "swiper/css";

import Container from "../global/Container";

import ServiceCard from "../shared/ServiceCard";
import CarouselControls from "../shared/CarouselControls";

import ScissorsIcon from "../../assets/icons/scissors-icon.svg";

import { homeServices } from "../../assets/data";

export default function ServicesPreview() {
  const mobileSwiperRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="
        bg-neutral-800

        pt-12
        pb-0

        lg:pt-20
        lg:pb-0
    "
    >
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}

      <Container>
        <div
          className="
            flex
            flex-col

            items-center

            gap-4

            mb-10
            lg:mb-12
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
      </Container>

      {/* ── MOBILE / TABLET CAROUSEL ───────────────────────────────────────── */}

      <div className="lg:hidden mb-6">
        <Swiper
          modules={[Keyboard, A11y]}
          keyboard={{ enabled: true }}
          spaceBetween={24}
          slidesPerView="auto"
          style={{ paddingLeft: "1rem" }}
          onSwiper={(swiper) => {
            mobileSwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="px-0!"
        >
          {homeServices.map((service) => (
            <SwiperSlide key={service.id} className="w-auto!">
              <ServiceCard
                image={service.image}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8">
          <Container>
            <CarouselControls
              currentIndex={activeIndex}
              total={homeServices.length}
              onPrev={() => mobileSwiperRef.current?.slidePrev()}
              onNext={() => mobileSwiperRef.current?.slideNext()}
            />
          </Container>
        </div>
      </div>

      <div className="hidden lg:block mb-8">
        <Container>
          <div
            className="
              grid
              grid-cols-4

              gap-8
              xl:gap-10

              items-start
            "
          >
            {homeServices.map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </Container>
      </div>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}

      <Container>
        <div
          className="
            flex
            flex-col

            lg:flex-row

            items-center

            justify-between

            gap-6

            mb-14
            lg:mb-18
        "
        >
          <p
            className="
            text-med-caption

            text-center
            lg:text-left

            text-(--color-brand-100)

            max-w-75
            lg:max-w-none
        "
          >
            Explore our full range of services and transparent pricing.
          </p>

          <Link to="/services">
            <button
              className="
                min-w-75

                h-11

                rounded-xs

                border-[1.5px]
                border-(--color-brand-300)

                flex
                items-center
                justify-center

                gap-2

                text-(--color-brand-300)

                transition-all
                duration-300

                hover:text-(--btn-link-hover)
                hover:border-(--btn-link-hover)
              "
            >
              View All Services & Pricing
              <FiChevronRight size={18} />
            </button>
          </Link>
        </div>

        <div
          className="
            w-full
            h-px

            bg-neutral-700
          "
        />
      </Container>
    </section>
  );
}
