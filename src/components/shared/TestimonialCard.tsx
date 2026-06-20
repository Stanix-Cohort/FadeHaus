import { IoStarSharp } from "react-icons/io5";

interface TestimonialCardProps {
  image: string;
  name: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  image,
  name,
  review,
  rating,
}: TestimonialCardProps) {
  return (
    <article
      className="
        min-w-87.5
        w-87.5

        h-73.5

        lg:min-w-112.5
        lg:w-112.5

        lg:h-62.5

        border-2
        border-(--color-brand-300)

        px-10
        py-6

        rounded-xs

        flex
        flex-col

        gap-6
      "
    >
      {/* Profile + Name + Rating */}

      <div
        className="
          flex
          items-start

          gap-4
        "
      >
        {/* Avatar */}

        <img
          src={image}
          alt={name}
          className="
            w-12
            h-12

            rounded-full

            object-cover

            shrink-0
          "
        />

        {/* Name + Rating */}

        <div
          className="
            flex
            flex-col

            gap-2
          "
        >
          <span
            className="
              text-bold-md
              text-(--color-brand-100)
            "
          >
            {name}
          </span>

          <div
            className="
              flex
              gap-1
            "
          >
            {Array.from({
              length: rating,
            }).map((_, index) => (
              <IoStarSharp key={index} size={18} color="#DCC9A1" />
            ))}
          </div>
        </div>
      </div>

      {/* Review */}

      <p
        className="
          text-[18px]
          font-medium

          leading-[120%]

          tracking-wider

          text-white
        "
      >
        {review}
      </p>
    </article>
  );
}
