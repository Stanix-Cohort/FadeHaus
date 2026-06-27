import { FiChevronRight } from "react-icons/fi";
import MapPin from "../../assets/icons/map-pin.svg";

import DesktopBG from "../../assets/images/Contact_BG_IMG.jpg";
import MobileBG from "../../assets/images/Mobile_Contact_BG.jpg";

export default function ContactVisit() {
  const handleDirections = () => {
    window.open(
      "https://maps.google.com/?q=123+Adeola+Odeku+Street,+Victoria+Island,+Lagos",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      className="
        relative

        h-77.25
        lg:h-103.75

        overflow-hidden
      "
    >
      {/* Mobile Background */}

      <img
        src={MobileBG}
        alt=""
        className="
          absolute
          inset-0

          w-full
          h-full

          object-cover
          

          lg:hidden
        "
      />

      {/* Desktop Background */}

      <img
        src={DesktopBG}
        alt=""
        className="
          hidden
          lg:block

          absolute
          inset-0

          w-full
          h-full

          object-cover
          
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0

         bg-black/80
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10

          h-full

          flex
          flex-col

          items-center
          justify-center

          gap-6

          px-6

          lg:px-20
        "
      >
        {/* Heading */}

        <h2
          className="
            heading-4
            lg:heading-3
            text-white

            text-center
          "
        >
          VISIT FADEHAUS
        </h2>

        {/* Subtitle */}

        <p
          className="
            text-med-md

            text-white

            text-center
          "
        >
          Find Us Easily
        </p>

        {/* Address */}

        <div
          className="
            flex
            items-center

            gap-3
          "
        >
          <img
            src={MapPin}
            alt=""
            className="
            w-5
            h-5

            shrink-0
        "
          />

          <p
            className="
              text-med-sm
              lg:text-med-md

              text-white

              text-center
            "
          >
            123 Adeola Odeku St, VI, Lagos.
          </p>
        </div>

        {/* Button */}

        <button
          onClick={handleDirections}
          className="
            group

            w-58
            h-13.5

            border-[1.5px]
            border-(--color-brand-300)

            rounded-xs

            flex
            items-center
            justify-center

            gap-3

            text-(--color-brand-300)

            text-med-lg

            transition-all
            duration-300

            hover:border-(--btn-link-hover)
            hover:text-(--btn-link-hover)

            cursor-pointer
          "
        >
          Get Directions
          <FiChevronRight
            size={20}
            className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          />
        </button>
      </div>
    </section>
  );
}
