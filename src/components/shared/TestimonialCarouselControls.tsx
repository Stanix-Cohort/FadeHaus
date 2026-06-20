import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function TestimonialCarouselControls({
  currentIndex,
  total,
  onPrev,
  onNext,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-center

        w-full
        
        mt-8
        max-w-300
        mx-auto
      "
    >
      {/* Left */}

      <button
        onClick={onPrev}
        className="
          w-7.5
          h-7.5

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
        <FiChevronLeft size={16} />
      </button>

      {/* Indicators */}

      <div
        className="
          flex
          items-center
          justify-center
          flex-1

          gap-2

          mx-6
        "
      >
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={`
              h-0.5
              w-6

              transition-all
              duration-300

              ${
                index === currentIndex
                  ? "bg-(--color-brand-300)"
                  : "bg-neutral-500"
              }
            `}
          />
        ))}
      </div>

      {/* Right */}

      <button
        onClick={onNext}
        className="
          w-7.5
          h-7.5

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
        <FiChevronRight size={16} />
      </button>
    </div>
  );
}
