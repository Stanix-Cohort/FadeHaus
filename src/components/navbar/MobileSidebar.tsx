import XIcon from "../../assets/icons/x_icon.svg";

import NavLinks from "./NavLinks";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed
          inset-0

          bg-black/60

          z-998

          transition-opacity
          duration-300

          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Sidebar */}

      <aside
        className={`
          fixed

          top-0
          right-0

          h-screen
          w-45

         bg-neutral-800

          z-999

          transition-transform
          duration-300

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div
          className="
            h-full

            flex
            flex-col
          "
        >
          {/* Close Button */}

          <div
            className="
              flex
              justify-end

              px-6
              pt-6
            "
          >
            <button
              onClick={onClose}
              aria-label="Close Menu"
              className="
                flex
                items-center
                justify-center
                w-6
                h-6
              "
            >
              <img
                src={XIcon}
                alt="Close"
                className="
                  w-6
                  h-6
                  object-contain
                "
              />
            </button>
          </div>

          {/* Links */}

          <div
            className="
              mt-6

              px-6
            "
          >
            <NavLinks mobile onNavigate={onClose} />
          </div>
        </div>
      </aside>
    </>
  );
}
