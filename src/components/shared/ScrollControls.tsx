import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ScrollControlsProps {
  showLeft: boolean;
  showRight: boolean;
  onLeft: () => void;
  onRight: () => void;
}

export default function ScrollControls({
  showLeft,
  showRight,
  onLeft,
  onRight,
}: ScrollControlsProps) {
  return (
    <>
      {showLeft && (
        <button
          onClick={onLeft}
          className="
            lg:hidden

            absolute
            left-2
            top-1/2

            -translate-y-1/2

            z-10

            w-10
            h-10

            rounded-full

            bg-black/70

            flex
            items-center
            justify-center
          "
        >
          <FiChevronLeft size={24} color="#DCC9A1" />
        </button>
      )}

      {showRight && (
        <button
          onClick={onRight}
          className="
            lg:hidden

            absolute
            right-2
            top-1/2

            -translate-y-1/2

            z-10

            w-10
            h-10

            rounded-full

            bg-black/70

            flex
            items-center
            justify-center
          "
        >
          <FiChevronRight size={24} color="#DCC9A1" />
        </button>
      )}
    </>
  );
}
