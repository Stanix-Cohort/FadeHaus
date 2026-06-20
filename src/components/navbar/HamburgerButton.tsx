import HamburgerIcon from "../../assets/icons/cil_hamburger-menu.svg";

interface HamburgerButtonProps {
  onClick: () => void;
}

export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Open Menu"
      className="
        flex
        items-center
        justify-center

        w-10
        h-10

        md:w-12
        md:h-12
      "
    >
      <img
        src={HamburgerIcon}
        alt="Menu"
        className="
          w-full
          h-full
          object-contain
        "
      />
    </button>
  );
}
