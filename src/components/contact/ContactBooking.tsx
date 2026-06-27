import { useState } from "react";

import Container from "../global/Container";

import { FaWhatsapp } from "react-icons/fa";

import ServiceDropdown from "./ServiceDropdown";
import BookingSuccessModal from "./BookingSuccessModal";

import { serviceTypes, appointmentTimes } from "../../assets/data";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

export default function ContactBooking() {
  const [service, setService] = useState("");

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setShowSuccess(true);
  };

  return (
    <>
      <section
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

              gap-20
            "
          >
            {/* QUICK BOOKING */}

            <div
              className="
                flex
                flex-col

                items-center

                gap-4
              "
            >
              <h2
                className="
                heading-3

                text-white

                text-center
            "
              >
                NEED A QUICK BOOKING?
              </h2>

              <p
                className="
                  text-med-sm

                  text-center

                  text-white/80

                  max-w-120
                "
              >
                Start a conversation with FadeHaus on WhatsApp and get your
                appointment confirmed in minutes.
              </p>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}`,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="
                  group
                  whatsapp-fill

                  relative

                  w-full
                  max-w-155

                  border
                  border-[#1D7A43]

                  rounded-xs

                  px-6
                  py-4

                  cursor-pointer
                "
              >
                <div
                  className="
                    relative
                    z-10

                    flex
                    items-center

                    gap-4
                  "
                >
                  <FaWhatsapp
                    size={22}
                    className="
                      text-[#1D7A43]

                      transition-colors
                      duration-300

                      group-hover:text-white
                    "
                  />

                  <div
                    className="
                      flex
                      flex-col

                      items-start

                      gap-1
                    "
                  >
                    <p
                      className="
                        text-bold-md

                        text-white
                      "
                    >
                      WhatsApp
                    </p>

                    <p
                      className="
                        text-med-sm

                        text-white/70

                        group-hover:text-white

                        transition-colors
                      "
                    >
                      Send us a DM, we respond 24/7...
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* FORM */}

            <div
              className="
                w-full
                max-w-155

                flex
                flex-col

                gap-10
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
                <h2
                  className="
                    heading-3

                    text-white

                    text-center
                "
                >
                  OR COMPLETE THE FORM
                </h2>

                <p
                  className="
                    text-med-sm

                    text-white/80
                  "
                >
                  Tell Us About Your Appointment
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="
                  flex
                  flex-col

                  gap-6
                "
              >
                {/* FULL NAME */}

                <div>
                  <label
                    className="
                      text-med-lg

                      text-white
                    "
                  >
                    Full Name:
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your Full name"
                    className="
                      mt-2

                      w-full
                      h-12

                      rounded-xs

                      border
                      border-(--color-brand-300)

                      px-6

                      bg-transparent

                      text-white

                      placeholder:text-white/30
                    "
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label
                    className="
                      text-med-lg

                      text-white
                    "
                  >
                    Phone Number:
                  </label>

                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={17}
                    value={phone}
                    onChange={(e) => {
                      let value = e.target.value;

                      // Allow only digits, spaces, and +
                      value = value.replace(/[^\d+\s]/g, "");

                      // Only allow + at the beginning
                      if (value.includes("+")) {
                        value = "+" + value.slice(1).replace(/\+/g, "");
                      }

                      // Limit to Nigerian international length
                      if (value.length <= 17) {
                        setPhone(value);
                      }
                    }}
                    placeholder="Enter your Phone number"
                    className="
                    mt-2

                    w-full
                    h-12

                    rounded-xs

                    border
                    border-(--color-brand-300)

                    px-6

                    bg-transparent

                    text-white

                    placeholder:text-white/30
                "
                  />
                </div>

                {/* SERVICE */}

                <div>
                  <label
                    className="
                      text-med-lg

                      text-white
                    "
                  >
                    Service Type
                  </label>

                  <div className="mt-2">
                    <ServiceDropdown
                      value={service}
                      placeholder="Choose"
                      onChange={setService}
                      options={serviceTypes}
                    />
                  </div>
                </div>

                {/* DATE + TIME */}

                <div
                  className="
                    grid

                    grid-cols-2

                    gap-4
                  "
                >
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{ colorScheme: "dark" }}
                    className={`
                    h-12

                    border
                    border-(--color-brand-300)

                    px-6

                    bg-transparent

                    rounded-xs

                    scheme-dark

                    ${date ? "text-white" : "text-white/30"}
                `}
                  />

                  <ServiceDropdown
                    value={time}
                    placeholder="12:00 PM"
                    onChange={setTime}
                    options={appointmentTimes}
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    className="
                      text-med-lg

                      text-white
                    "
                  >
                    Your message (Optional):
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Enter text..."
                    className="
                      mt-2

                      w-full

                      rounded-xs

                      border
                      border-(--color-brand-300)

                      p-6

                      bg-transparent

                      text-white

                      placeholder:text-white/30
                    "
                  />
                </div>

                {/* SEND */}

                <button
                  type="submit"
                  className="
                    self-end

                    w-28
                    h-14

                    rounded-xs

                    bg-(--color-brand-300)

                    text-neutral-900

                    text-med-lg

                    cursor-pointer

                    transition-all
                    duration-300

                    hover:bg-(--btn-primary-hover)
                  "
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <BookingSuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
