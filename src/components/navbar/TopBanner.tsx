import Container from "../global/Container";

import FireIcon from "../../assets/icons/fire-icon.svg";
import MapPin from "../../assets/icons/map-pin.svg";
import PhoneIcon from "../../assets/icons/phone.svg";

export default function TopBanner() {
  const BannerContent = () => (
    <div
      className="
        flex
        items-center

        gap-6

        min-w-max

        h-full
      "
    >
      {/* Promo */}

      <div
        className="
          flex
          items-center

          gap-2

          shrink-0
        "
      >
        <img
          src={FireIcon}
          alt="Promo"
          className="
            w-5
            h-5
          "
        />

        <span
          className="
            text-bold-sm
            text-brand
          "
        >
          GET 20% OFF ON YOUR FIRST BOOKING.
        </span>
      </div>

      <span className="text-neutral-400">|</span>

      {/* Location */}

      <div
        className="
          flex
          items-center

          gap-2

          shrink-0
        "
      >
        <img
          src={MapPin}
          alt="Location"
          className="
            w-4
            h-4
          "
        />

        <span
          className="
            text-med-sm
            text-white
          "
        >
          123 Adeola Odeku St, VI, Lagos.
        </span>
      </div>

      {/* Directions */}

      <a
        href="#"
        className="
          text-bold-sm

          text-brand

          underline

          shrink-0
        "
      >
        Get Directions link
      </a>

      <span className="text-neutral-400">|</span>

      {/* Phone */}

      <div
        className="
          flex
          items-center

          gap-2

          shrink-0
        "
      >
        <img
          src={PhoneIcon}
          alt="Phone"
          className="
            w-4
            h-4
          "
        />

        <span
          className="
            text-med-sm
            text-white
          "
        >
          Call Us:
        </span>

        <a
          href="tel:+2348001234567"
          className="
            text-bold-sm

            text-brand

            underline
          "
        >
          +234 800 123 4567
        </a>
      </div>
    </div>
  );

  return (
    <div
      className="
        fixed
        top-0
        left-0
        right-0

        z-50

        bg-neutral-900
      "
    >
      {/* Mobile / Tablet */}

      <div
        className="
          lg:hidden

          h-9

          flex
          items-center

          overflow-hidden
        "
      >
        <div
          className="
            marquee-content

            flex
            items-center

            h-full
          "
        >
          <BannerContent />
        </div>
      </div>

      {/* Desktop */}

      <div className="hidden lg:block">
        <Container>
          <div
            className="
              h-9

              flex
              items-center
              justify-center
            "
          >
            <BannerContent />
          </div>
        </Container>
      </div>
    </div>
  );
}
