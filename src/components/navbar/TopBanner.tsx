import Container from "../global/Container";

import FireIcon from "../../assets/icons/fire-icon.svg";
import MapPin from "../../assets/icons/map-pin.svg";
import PhoneIcon from "../../assets/icons/phone.svg";

export default function TopBanner() {
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
      <Container>
        <div
          className="
            h-9

            overflow-x-auto
            scroll-smooth

            scrollbar-hide
          "
        >
          <div
            className="
              flex
              items-center
              justify-center

              gap-6

              min-w-max

              h-full

              mx-auto
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

            {/* Divider */}

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
              Get Directions
            </a>

            {/* Divider */}

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
        </div>
      </Container>
    </div>
  );
}
