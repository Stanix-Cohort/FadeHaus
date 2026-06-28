import { Link } from "react-router-dom";

import Container from "../global/Container";

import ArrowIcon from "../../assets/icons/arrow_icon.svg";

import { galleryImages } from "../../assets/data";

export default function GalleryPreview() {
  return (
    <section
      className="
        bg-neutral-800

        pt-12
        pb-12

        lg:pt-16
        lg:pb-20
    "
    >
      <Container>
        <div
          className="
            flex
            flex-col

            items-center
          "
        >
          {/* Header */}

          <div
            className="
              flex
              flex-col

              items-center

              gap-4

              mb-8
              lg:mb-10
            "
          >
            <div
              className="
                flex
                items-center

                gap-2
              "
            >
              <img src={ArrowIcon} alt="" className="w-5 h-5" />

              <span
                className="
                  text-bold-lg
                  text-(--color-brand-700)
                "
              >
                GALLERY
              </span>

              <img src={ArrowIcon} alt="" className="w-5 h-5" />
            </div>

            <h2
              className="
                gallery-heading

                text-center

                max-w-[320px]

                lg:max-w-200
              "
            >
              RESULTS THAT SPEAK FOR THEMSELVES
            </h2>
          </div>

          {/* MOBILE + TABLET */}

          <div
            className="
              grid

              grid-cols-[1fr_1.2fr_1fr]

              gap-2

              w-full

              max-w-95

              lg:hidden

              mb-8
            "
          >
            {/* Left */}

            <div
              className="
                flex
                flex-col

                gap-2
              "
            >
              <div
                className="
                  overflow-hidden

                  rounded-xs

                  border-4
                  border-transparent

                  transition-all
                  duration-300

                  hover:border-(--color-brand-300)
                "
              >
                <img
                  src={galleryImages[0]}
                  alt="FadeHaus haircut result"
                  className="
                    h-23.75
                    w-full

                    object-cover

                    transition-transform
                    duration-500

                    hover:scale-105
                  "
                />
              </div>

              <div
                className="
                  overflow-hidden

                  rounded-xs

                  border-4
                  border-transparent

                  transition-all
                  duration-300

                  hover:border-(--color-brand-300)
                "
              >
                <img
                  src={galleryImages[1]}
                  alt="FadeHaus grooming result"
                  className="
                    h-23.75
                    w-full

                    object-cover

                    transition-transform
                    duration-500

                    hover:scale-105
                  "
                />
              </div>
            </div>

            {/* Center */}

            <div
              className="
                overflow-hidden

                rounded-xs

                border-4
                border-transparent

                transition-all
                duration-300

                hover:border-(--color-brand-300)
              "
            >
              <img
                src={galleryImages[2]}
                alt="FadeHaus premium transformation"
                className="
                  h-49.5
                  w-full

                  object-cover

                  transition-transform
                  duration-500

                  hover:scale-105
                "
              />
            </div>

            {/* Right */}

            <div
              className="
                flex
                flex-col

                gap-2
              "
            >
              <div
                className="
                  overflow-hidden

                  rounded-xs

                  border-4
                  border-transparent

                  transition-all
                  duration-300

                  hover:border-(--color-brand-300)
                "
              >
                <img
                  src={galleryImages[3]}
                  alt="FadeHaus fade haircut"
                  className="
                    h-23.75
                    w-full

                    object-cover

                    transition-transform
                    duration-500

                    hover:scale-105
                  "
                />
              </div>

              <div
                className="
                  overflow-hidden

                  rounded-xs

                  border-4
                  border-transparent

                  transition-all
                  duration-300

                  hover:border-(--color-brand-300)
                "
              >
                <img
                  src={galleryImages[4]}
                  alt="FadeHaus beard grooming"
                  className="
                    h-23.75
                    w-full

                    object-cover

                    transition-transform
                    duration-500

                    hover:scale-105
                  "
                />
              </div>
            </div>
          </div>

          {/* DESKTOP */}

          <div
            className="
              hidden
              lg:grid

              w-full

              max-w-275

              grid-cols-[1fr_1.3fr_1fr]

              gap-4

              mb-10
            "
          >
            {/* Left */}

            <div
              className="
                flex
                flex-col

                gap-4
              "
            >
              <div
                className="
                  overflow-hidden

                  rounded-xs

                  border-4
                  border-transparent

                  transition-all
                  duration-300

                  hover:border-(--color-brand-300)
                "
              >
                <img
                  src={galleryImages[0]}
                  alt="FadeHaus haircut result"
                  className="
                    h-60
                    w-full

                    object-cover

                    transition-transform
                    duration-500

                    hover:scale-105
                  "
                />
              </div>

              <div
                className="
                  overflow-hidden

                  rounded-xs

                  border-4
                  border-transparent

                  transition-all
                  duration-300

                  hover:border-(--color-brand-300)
                "
              >
                <img
                  src={galleryImages[1]}
                  alt="FadeHaus grooming result"
                  className="
                    h-60
                    w-full

                    object-cover

                    transition-transform
                    duration-500

                    hover:scale-105
                  "
                />
              </div>
            </div>

            {/* Center */}

            <div
              className="
                overflow-hidden

                rounded-xs

                border-4
                border-transparent

                transition-all
                duration-300

                hover:border-(--color-brand-300)
              "
            >
              <img
                src={galleryImages[2]}
                alt="FadeHaus premium transformation"
                className="
                  h-125
                  w-full

                  object-cover

                  transition-transform
                  duration-500

                  hover:scale-105
                "
              />
            </div>

            {/* Right */}

            <div
              className="
                flex
                flex-col

                gap-4
              "
            >
              <div
                className="
                  overflow-hidden

                  rounded-xs

                  border-4
                  border-transparent

                  transition-all
                  duration-300

                  hover:border-(--color-brand-300)
                "
              >
                <img
                  src={galleryImages[3]}
                  alt="FadeHaus fade haircut"
                  className="
                    h-60
                    w-full

                    object-cover

                    transition-transform
                    duration-500

                    hover:scale-105
                  "
                />
              </div>

              <div
                className="
                  overflow-hidden

                  rounded-xs

                  border-4
                  border-transparent

                  transition-all
                  duration-300

                  hover:border-(--color-brand-300)
                "
              >
                <img
                  src={galleryImages[4]}
                  alt="FadeHaus beard grooming"
                  className="
                    h-60
                    w-full

                    object-cover

                    transition-transform
                    duration-500

                    hover:scale-105
                  "
                />
              </div>
            </div>
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

                max-w-[320px]

                lg:max-w-162.5
              "
            >
              Explore a collection of precision fades, sharp tapers, clean beard
              trims, and premium grooming transformations delivered by FadeHaus.
            </p>
            <Link to="/gallery">
              <button
                className="
                w-55

                h-13.5

                px-8

                rounded-xs

                border-[1.5px]
                border-(--color-brand-300)

                bg-(--color-brand-300)

                text-neutral-900

                cursor-pointer

                transition-all
                duration-300

                hover:bg-(--btn-primary-hover)

                text-med-lg
              "
              >
                View Gallery
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
