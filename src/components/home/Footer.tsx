import Container from "../global/Container";

import Logo from "../../assets/icons/FadeHause_Logo.svg";

import MapPin from "../../assets/icons/map-pin.svg";

import { FaWhatsapp } from "react-icons/fa";

import { FiInstagram } from "react-icons/fi";

import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="
        bg-neutral-900

        py-20
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col

            gap-12
          "
        >
          {/* Main Footer Content */}

          <div
            className="
              flex
              flex-col

              gap-8

              max-w-175
            "
          >
            {/* Logo */}

            <img
              src={Logo}
              alt="FadeHaus"
              className="
                w-40
                h-auto

                lg:w-52.25
              "
            />

            {/* Description */}

            <p
              className="
                text-med-sm
                text-white

                max-w-[320px]

                lg:max-w-130
              "
            >
              Premium grooming, precision cuts, and a seamless booking
              experience designed for the modern gentleman.
            </p>

            {/* Address */}

            <div
              className="
                flex
                items-center

                flex-wrap

                gap-2

                text-left
              "
            >
              <img
                src={MapPin}
                alt=""
                className="
                  w-4
                  h-4
                "
              />

              <span
                className="
                  text-semibold-caption
                  text-white
                "
              >
                address, lagos, Nigeria
              </span>

              <a
                href="#"
                className="
                  text-bold-sm

                  text-brand

                  underline

                  transition-all
                  duration-300

                  hover:text-(--btn-link-hover)
                "
              >
                Get Directions link
              </a>
            </div>

            {/* WhatsApp Button */}

            <button
              className="
                w-full
                max-w-71

                lg:w-83
                lg:max-w-none

                h-13.5

                rounded-xs

                border-[1.5px]
                border-(--color-brand-300)

                flex
                items-center
                justify-center

                gap-2

                text-brand

                cursor-pointer

                transition-all
                duration-300

                hover:text-(--btn-link-hover)
                hover:border-(--btn-link-hover)
              "
            >
              <FaWhatsapp size={18} />

              <span className="text-med-lg">Book On WhatsApp</span>
            </button>

            {/* Links Section */}

            <div
              className="
                grid

                grid-cols-2

                gap-8

                lg:flex
                lg:flex-col
                lg:gap-8
              "
            >
              {/* Quick Links */}

              <div
                className="
                  flex
                  flex-col

                  gap-4
                "
              >
                <h4
                  className="
                    text-med-md

                    text-(--color-brand-700)
                  "
                >
                  quick links
                </h4>

                <div
                  className="
                    grid

                    gap-3

                    lg:flex
                    lg:flex-wrap

                    lg:items-center

                    lg:gap-x-8
                    lg:gap-y-3
                  "
                >
                  <a
                    href="/"
                    className="
                      text-[11px]
                      font-semibold
                      tracking-wider
                      text-white

                      lg:text-semibold-caption

                      hover:text-brand
                    "
                  >
                    HOME
                  </a>

                  <a
                    href="/"
                    className="
                      text-[11px]
                      font-semibold
                      tracking-wider
                      text-white

                      lg:text-semibold-caption

                      hover:text-brand
                    "
                  >
                    SERVICES
                  </a>

                  <a
                    href="/"
                    className="
                      text-[11px]
                      font-semibold
                      tracking-wider
                      text-white

                      lg:text-semibold-caption

                      hover:text-brand
                    "
                  >
                    GALLERY
                  </a>

                  <a
                    href="/"
                    className="
                      text-[11px]
                      font-semibold
                      tracking-wider
                      text-white

                      lg:text-semibold-caption

                      hover:text-brand
                    "
                  >
                    CONTACT
                  </a>
                </div>
              </div>

              {/* Social Links */}

              <div
                className="
                  flex
                  flex-col

                  gap-4
                "
              >
                <h4
                  className="
                    text-med-md

                    text-(--color-brand-700)
                  "
                >
                  social links
                </h4>

                <div
                  className="
                    grid

                    gap-3

                    lg:flex
                    lg:flex-wrap

                    lg:items-center

                    lg:gap-x-8
                    lg:gap-y-3
                  "
                >
                  <div
                    className="
                      flex
                      items-center

                      gap-2
                    "
                  >
                    <FiInstagram size={14} color="white" />

                    <span
                      className="
                        text-[11px]
                        font-semibold
                        tracking-wider
                        text-white

                        lg:text-semibold-caption
                      "
                    >
                      @USERNAME
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      items-center

                      gap-2
                    "
                  >
                    <FaTiktok size={14} color="white" />

                    <span
                      className="
                        text-[11px]
                        font-semibold
                        tracking-wider
                        text-white

                        lg:text-semibold-caption
                      "
                    >
                      @USERNAME
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      items-center

                      gap-2
                    "
                  >
                    <FaWhatsapp size={14} color="white" />

                    <span
                      className="
                        text-[11px]
                        font-semibold
                        tracking-wider
                        text-white

                        lg:text-semibold-caption
                      "
                    >
                      +234 0123456789
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}

          <div
            className="
              w-full
              h-px

              bg-neutral-700
            "
          />

          {/* Bottom Footer */}

          <div
            className="
              flex
              flex-col-reverse

              lg:flex-row

              items-center
              justify-between

              gap-6
            "
          >
            <p
              className="
                text-med-sm

                text-white
              "
            >
              © 2026 FadeHaus. All Rights Reserved.
            </p>

            <div
              className="
                flex

                items-center

                gap-8
              "
            >
              <a
                href="#"
                className="
                  text-med-sm
                  text-white

                  hover:text-brand
                "
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="
                  text-med-sm
                  text-white

                  hover:text-brand
                "
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
