import Container from "../../global/Container";

import ArrowIcon from "../../../assets/icons/arrow_icon.svg";

import { FiChevronRight } from "react-icons/fi";

import { galleryImages } from "../../../assets/data";

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

          {/* Gallery Grid */}

          <>
            {/* Mobile / Tablet */}

            <div
              className="
                grid

                lg:hidden

                grid-cols-3

                gap-2

                w-full

                max-w-75
              "
            >
              {/* Haircut 5 */}

              <img
                src={galleryImages[0]}
                alt="Haircut style 5"
                className="
                  w-full
                  h-23.75

                  object-cover

                  rounded-xs
                "
              />

              {/* Haircut 7 */}

              <img
                src={galleryImages[2]}
                alt="Haircut style 7"
                className="
                  row-span-2

                  w-full

                  h-49.5

                  object-cover

                  rounded-xs
                "
              />

              {/* Haircut 8 */}

              <img
                src={galleryImages[3]}
                alt="Haircut style 8"
                className="
                  w-full
                  h-23.75

                  object-cover

                  rounded-xs
                "
              />

              {/* Haircut 6 */}

              <img
                src={galleryImages[1]}
                alt="Haircut style 6"
                className="
                  w-full
                  h-23.75

                  object-cover

                  rounded-xs
                "
              />

              {/* Haircut 9 */}

              <img
                src={galleryImages[4]}
                alt="Haircut style 9"
                className="
                  w-full
                  h-23.75

                  object-cover

                  rounded-xs
                "
              />
            </div>

            {/* Desktop */}

            <div
              className="
                hidden
                lg:grid

                grid-cols-[300px_420px_300px]

                gap-20

                items-start
                justify-center

                w-full
              "
            >
              {/* Left Column */}

              <div
                className="
                  flex
                  flex-col

                  gap-6
                "
              >
                <img
                  src={galleryImages[0]}
                  alt="Haircut style 5"
                  className="
                    w-75
                    h-60

                    object-cover

                    rounded-xs
                  "
                />

                <img
                  src={galleryImages[1]}
                  alt="Haircut style 6"
                  className="
                    w-75
                    h-60

                    object-cover

                    rounded-xs
                  "
                />
              </div>

              {/* Center Large Image */}

              <img
                src={galleryImages[2]}
                alt="Haircut style 7"
                className="
                  w-105
                  h-126.5

                  object-cover

                  rounded-xs
                "
              />

              {/* Right Column */}

              <div
                className="
                  flex
                  flex-col

                  gap-6
                "
              >
                <img
                  src={galleryImages[3]}
                  alt="Haircut style 8"
                  className="
                    w-75
                    h-60

                    object-cover

                    rounded-xs
                  "
                />

                <img
                  src={galleryImages[4]}
                  alt="Haircut style 9"
                  className="
                    w-75
                    h-60

                    object-cover

                    rounded-xs
                  "
                />
              </div>
            </div>
          </>

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
            {/* Description */}

            <p
              className="
             text-med-caption

             text-center
             
             lg:text-left

             text-(--color-brand-100)

             max-w-[320px]

             lg:max-w-125"
            >
              Explore a collection of precision fades, sharp tapers, clean beard
              trims, and premium grooming transformations delivered by FadeHaus.
            </p>

            {/* CTA */}

            <button
              className="
             w-full
             max-w-75

             h-11

             rounded-xs

             bg-(--color-brand-300)
             

             flex
             items-center
             justify-center

             gap-2

             text-med-md

             text-neutral-900
    "
            >
              VIEW GALLERY
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
