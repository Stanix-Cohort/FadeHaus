import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, A11y } from "swiper/modules";

import "swiper/css";

import Container from "../global/Container";

import BackgroundImage from "../../assets/images/BG_Section_4.jpg";

import { IoStarSharp } from "react-icons/io5";

import TestimonialCard from "../shared/TestimonialCard";
import CarouselControls from "../shared/CarouselControls";

import { testimonials } from "../../assets/data";

export default function Testimonials() {
  const swiperRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="
        relative

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

      {/* Header */}

      <Container>
        <div
          className="
            relative
            z-10

            flex
            flex-col

            items-center

            mb-12
            lg:mb-16
          "
        >
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
              <IoStarSharp size={18} color="#A68F64" />

              <span
                className="
                  text-bold-lg
                  text-(--color-brand-700)
                "
              >
                TESTIMONIALS
              </span>

              <IoStarSharp size={18} color="#A68F64" />
            </div>

            <h2
              className="
                gallery-heading

                text-center

                max-w-[320px]
                lg:max-w-225
              "
            >
              WHAT OUR CUSTOMERS ARE SAYING
            </h2>
          </div>
        </div>
      </Container>

      {/* Carousel */}

      <div
        className="
          relative
          z-10

          mb-10
        "
      >
        <Swiper
          modules={[Keyboard, A11y]}
          keyboard={{
            enabled: true,
          }}
          spaceBetween={24}
          slidesPerView={"auto"}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="
            px-0!

            lg:px-20!
          "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="
                w-auto!
              "
            >
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                review={testimonial.review}
                rating={testimonial.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}

        <div
          className="
            mt-10

            px-0

            lg:px-0
          "
        >
          <Container>
            <CarouselControls
              currentIndex={activeIndex}
              total={testimonials.length}
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </Container>
        </div>
      </div>
    </section>
  );
}
