interface ServiceCardProps {
  image: string;
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  image,
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article
      className="
        w-75
        min-w-75
        shrink-0

        flex
        flex-col

        border-b
        border-(--color-brand-300)

        pb-2
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
          mt-2

          flex
          items-center

          gap-2

          min-h-12
        "
      >
        <img
          src={icon}
          alt=""
          className="
            w-7.5
            h-7.5

            shrink-0
          "
        />

        <h3
          className="
            heading-4

            text-brand

            leading-tight
          "
        >
          {title}
        </h3>
      </div>

      <p
        className="
          mt-2

          text-med-md
          text-white

          grow
        "
      >
        {description}
      </p>

      <button
        className="
          mt-4

          w-full
          h-10.75

          rounded-xs

          bg-(--color-brand-300)

          text-neutral-900

          text-med-md

          transition-all
          duration-300

          hover:bg-(--btn-primary-hover)
        "
      >
        BOOK NOW
      </button>
    </article>
  );
}
