import WhatsAppIcon from "../../assets/icons/whatsapp-icon.svg";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2348001234567"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed

        bottom-6
        right-6

        z-999

        transition-transform
        duration-300

        hover:scale-105
      "
    >
      <img
        src={WhatsAppIcon}
        alt="WhatsApp"
        className="
          w-18
          h-18

          lg:w-26
          lg:h-26
        "
      />
    </a>
  );
}
