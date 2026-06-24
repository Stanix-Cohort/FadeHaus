import { Link } from "react-router-dom";

interface ServiceCardProps {
  image: string;
  icon: string;
  title: string;
  description: string;
}

const getServiceLink = (title: string) => {
  switch (title) {
    case "PRECISION HAIRCUTS":
      return "/services?tab=HAIRCUTS";

    case "BEARD TRIM":
      return "/services?tab=BEARD SERVICE";

    case "PREMIUM PACKAGE":
      return "/services?tab=PREMIUM PACKAGE";

    case "HOME SERVICES":
      return "/services?tab=HOME SERVICE";

    default:
      return "/services";
  }
};

export default function ServiceCard({
  image,
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article
      className="
        group

        w-75
        min-w-75

        flex
        flex-col

        min-h-[520px]
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
          mt-3

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
          mt-3

          text-med-md
          text-white

          flex-1
        "
      >
        {description}
      </p>

      {/* MOBILE / TABLET */}

      <div
        className="
          lg:hidden

          mt-6
        "
      >
        <Link to={getServiceLink(title)}>
          <button
            className="
              w-full
              h-11

              bg-(--color-brand-300)

              text-neutral-900

              text-med-md
            "
          >
            BOOK NOW
          </button>
        </Link>

        <div
          className="
            h-px
            w-full

            bg-(--color-brand-300)
          "
        />
      </div>

      {/* DESKTOP */}

      <div
        className="
          hidden
          lg:block

          mt-6

          relative

          h-12

          overflow-hidden
        "
      >
        {/* SINGLE BORDER */}

        <div
          className="
            absolute
            top-0
            left-0

            w-full
            h-px

            bg-(--color-brand-300)
          "
        />

        {/* BUTTON + BORDER UNIT */}

        <div
          className="
            absolute
            top-[-48px]
            left-0

            w-full

            transition-all
            duration-300
            ease-out

            group-hover:top-0
            group-focus-within:top-0
          "
        >
          <Link to={getServiceLink(title)}>
            <button
              className="
                w-full
                h-11

                bg-(--color-brand-300)

                text-neutral-900

                text-med-md

                hover:bg-(--btn-primary-hover)

                transition-colors
                duration-300
              "
            >
              BOOK NOW
            </button>
          </Link>

          <div
            className="
              w-full
              h-px

              bg-(--color-brand-300)
            "
          />
        </div>
      </div>
    </article>
  );
}
