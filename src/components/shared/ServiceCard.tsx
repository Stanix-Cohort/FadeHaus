import ClipperIcon from "../../assets/icons/clipper_icon.svg";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article
      className="
        min-w-75
        w-75

        flex
        flex-col

        gap-2

        pb-2

        border-b
        border-(--color-brand-300)
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-80

          object-cover

          rounded-xs
        "
      />

      <div
        className="
          flex
          items-center

          gap-2
        "
      >
        <img
          src={ClipperIcon}
          alt=""
          className="
            w-7.5
            h-7.5
          "
        />

        <h3
          className="
            heading-4
            text-brand
          "
        >
          {title}
        </h3>
      </div>

      <p
        className="
          text-med-md
          text-white
        "
      >
        {description}
      </p>

      <button
        className="
          mt-2

          w-full
          h-10.75

          rounded-xs

          bg-(--color-brand-300)

          text-neutral-900

          text-med-md
        "
      >
        BOOK NOW
      </button>
    </article>
  );
}
