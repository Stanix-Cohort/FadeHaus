import { FiCheck, FiX } from "react-icons/fi";

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingSuccessModal({
  isOpen,
  onClose,
}: BookingSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}

      <div
        className="
          fixed
          inset-0

          z-100

          bg-black/70
          backdrop-blur-[2px]
        "
        onClick={onClose}
      />

      {/* Modal */}

      <div
        className="
          fixed

          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          z-101

          w-[92%]
          max-w-105

          bg-neutral-900

          border
          border-(--color-brand-300)

          rounded-xs

          px-6
          py-8

          flex
          flex-col

          items-center

          gap-5
        "
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="
            absolute

            top-4
            right-4

            text-white

            transition-colors
            duration-300

            hover:text-(--color-brand-300)
          "
        >
          <FiX size={20} />
        </button>

        {/* Success Icon */}

        <div
          className="
            w-10.5
            h-10.5

            rounded-full

            border-2
            border-(--color-brand-300)

            flex
            items-center
            justify-center
          "
        >
          <FiCheck size={22} color="#A68F64" />
        </div>

        {/* Heading */}

        <h2
          className="
            font-['Bebas_Neue']

            text-[32px]
            lg:text-[40px]

            leading-[120%]

            tracking-[1%]

            text-center

            text-white
          "
        >
          BOOKING REQUEST SENT
        </h2>

        {/* Description */}

        <p
          className="
            text-med-sm

            text-center

            text-white/70

            max-w-70
          "
        >
          Thanks! FadeHaus will be in touch via WhatsApp shortly to confirm your
          appointment details.
        </p>
      </div>
    </>
  );
}
