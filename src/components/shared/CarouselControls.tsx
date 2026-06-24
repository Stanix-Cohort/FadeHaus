import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

export default function CarouselControls({
  onPrev,
  onNext,
  currentIndex,
  total,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        w-full
      "
    >
      {/* LEFT ARROW */}

      <button
        onClick={onPrev}
        aria-label="Previous Slide"
        className="
          w-8
          h-8

          border
          border-(--color-brand-300)

          flex
          items-center
          justify-center

          text-(--color-brand-300)

          transition-all
          duration-300

          hover:border-(--btn-link-hover)
          hover:text-(--btn-link-hover)
        "
      >
        <FiChevronLeft size={18} />
      </button>

      {/* MOBILE INDICATORS */}

      <div
        className="
          flex
          lg:hidden

          items-center
          justify-center

          flex-1

          gap-2

          mx-4
        "
      >
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={`
              h-0.5

              transition-all
              duration-300

              ${
                index === currentIndex
                  ? "w-10 bg-(--color-brand-300)"
                  : "w-4 bg-neutral-500"
              }
            `}
          />
        ))}
      </div>

      <div className="hidden lg:block flex-1" />

      <button
        onClick={onNext}
        aria-label="Next Slide"
        className="
          w-8
          h-8

          border
          border-(--color-brand-300)

          flex
          items-center
          justify-center

          text-(--color-brand-300)

          transition-all
          duration-300

          hover:border-(--btn-link-hover)
          hover:text-(--btn-link-hover)
        "
      >
        <FiChevronRight size={18} />
      </button>
    </div>
  );
}
