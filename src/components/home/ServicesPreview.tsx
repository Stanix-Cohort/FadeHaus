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
      id="services-preview"
      className="
        bg-neutral-800

        py-12
        lg:py-20
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

      {/* ── MOBILE / TABLET CAROUSEL ───────────────────────────────────────────

          WHY the Swiper lives OUTSIDE Container:
          ──────────────────────────────────────────
          Container applies horizontal padding so content stays inset from the
          viewport edge. If Swiper sits inside Container it inherits that
          padding on both sides — the first card never touches the left edge
          and the carousel feels boxed in rather than open.

          Solution: Swiper is a direct child of <section> (no Container).
          We replicate only the LEFT padding via `style` so the first card
          aligns with the header text above, while cards to the right bleed
          freely to the screen edge on swipe. This is the standard pattern
          for full-bleed carousels that stay aligned with page content.

          ── paddingLeft value ──
          Match this to your Container's horizontal padding token.
          If Container uses `px-4`  → "1rem"
          If Container uses `px-6`  → "1.5rem"
          If Container uses `px-5`  → "1.25rem"
          Adjust here if your Container breakpoint padding changes.
      ──────────────────────────────────────────────────────────────────────── */}

      <div className="lg:hidden mb-10">
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

        {/* Controls stay inside Container so chevrons + indicators align
            with the rest of the page content */}
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

      {/* ── DESKTOP STATIC GRID ────────────────────────────────────────────────

          WHY items-stretch (not items-start):
          ──────────────────────────────────────
          Each ServiceCard has a fixed h-[520px], so all cards in the row
          are already the same height. BUT items-start was previously used,
          which means each grid cell only takes up as much height as its
          card needs and does not stretch to fill the row.

          Switching to items-stretch ensures every grid cell stretches to
          the full row height. This matters because the desktop animation
          zone inside ServiceCard uses flex-col layout — if the cell height
          is taller than the card's intrinsic content, items-stretch ensures
          the card fills that cell fully rather than collapsing. This keeps
          the gold border and button zone sitting at a CONSISTENT vertical
          position across all four cards in the row, even if content length
          differs slightly between cards.

          WHY no Swiper on desktop:
          ──────────────────────────
          All four cards are always visible simultaneously. Swiper on desktop
          adds drag affordances and momentum that feel wrong for a static
          layout. A CSS grid is the correct primitive — simple, predictable,
          and zero JavaScript overhead.
      ──────────────────────────────────────────────────────────────────────── */}

      <div className="hidden lg:block mb-12">
        <Container>
          <div
            className="
              grid
              grid-cols-4

              gap-8
              xl:gap-10

              items-stretch
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
            lg:mb-20
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

        {/* Section divider */}
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
