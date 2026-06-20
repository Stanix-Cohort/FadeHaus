import Container from "../global/Container";

import ArrowIcon from "../../assets/icons/arrow_icon.svg";

import { galleryImages } from "../../assets/data";

export default function GalleryPreview() {
  return (
    <section
      id="gallery"
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
            "
          >
            {/* Left Column */}

            <div
              className="
                flex
                flex-col

                gap-2
                "
            >
              <img
                src={galleryImages[0]}
                alt=""
                className="
                h-23.75
                w-full

                object-cover

                rounded-xs
            "
              />

              <img
                src={galleryImages[1]}
                alt=""
                className="
                h-23.75
                w-full

                object-cover

                rounded-xs
            "
              />
            </div>

            {/* Center Tall Image */}

            <img
              src={galleryImages[2]}
              alt=""
              className="
                h-49.5
                w-full

                object-cover

                rounded-xs
                "
            />

            {/* Right Column */}

            <div
              className="
                flex
                flex-col

                gap-2
                "
            >
              <img
                src={galleryImages[3]}
                alt=""
                className="
                h-23.75
                w-full

                object-cover

                rounded-xs
            "
              />

              <img
                src={galleryImages[4]}
                alt=""
                className="
                h-23.75
                w-full

                object-cover

                rounded-xs
            "
              />
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
            "
          >
            {/* Left Column */}

            <div
              className="
                flex
                flex-col

                gap-4
              "
            >
              <img
                src={galleryImages[0]}
                alt=""
                className="
                  h-60
                  w-full

                  object-cover

                  rounded-xs
                "
              />

              <img
                src={galleryImages[1]}
                alt=""
                className="
                  h-60
                  w-full

                  object-cover

                  rounded-xs
                "
              />
            </div>

            {/* Center */}

            <img
              src={galleryImages[2]}
              alt=""
              className="
                h-125
                w-full

                object-cover

                rounded-xs
              "
            />

            {/* Right Column */}

            <div
              className="
                flex
                flex-col

                gap-4
              "
            >
              <img
                src={galleryImages[3]}
                alt=""
                className="
                  h-60
                  w-full

                  object-cover

                  rounded-xs
                "
              />

              <img
                src={galleryImages[4]}
                alt=""
                className="
                  h-60
                  w-full

                  object-cover

                  rounded-xs
                "
              />
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
              hover:text-neutral-900

                text-med-lg"
            >
              View Gallery
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
