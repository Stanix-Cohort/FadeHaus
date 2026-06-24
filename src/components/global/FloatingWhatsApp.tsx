import WhatsAppIcon from "../../assets/icons/whatsapp-icon.svg";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with FadeHaus on WhatsApp"
      className="
        fixed

        bottom-16
        right-5

        md:bottom-20
        md:right-6

        lg:bottom-8
        lg:right-8

        z-999

        transition-transform
        duration-300

        hover:scale-105

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-(--color-brand-300)
      "
    >
      <img
        src={WhatsAppIcon}
        alt="WhatsApp"
        className="
          w-16
          h-16

          md:w-18
          md:h-18

          lg:w-22
          lg:h-22
        "
      />
    </a>
  );
}
