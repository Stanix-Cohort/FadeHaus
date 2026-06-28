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

        lg:w-full
        lg:min-w-0

        flex
        flex-col

        h-130

        overflow-hidden
      "
    >
      {/* IMAGE */}

      <img
        src={image}
        alt={title}
        className="
          w-full
          h-80

          object-cover

          rounded-xs
          cursor-pointer
        "
      />

      {/* TITLE */}

      <div
        className="
          mt-4

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

      {/* DESCRIPTION */}

      <div
        className="
          mt-3

          h-9

          lg:h-20
        "
      >
        <p
          className="
            text-med-md

            text-white
          "
        >
          {description}
        </p>
      </div>

      {/* MOBILE / TABLET */}

      

      <div
        className="
    lg:hidden

    flex
    flex-col

    pt-2
    mt-2
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

        {/* card border */}

        <div
          className="
      mt-2

      w-full
      h-px

      bg-(--color-brand-300)
    "
        />
      </div>

      {/* DESKTOP */}

      <div
        className="
    hidden
    lg:block

    mt-0

    relative

    h-18

    overflow-hidden
  "
      >
        {/* CARD BORDER */}

        <div
          className="
      absolute

      top-0
      left-0

      w-full
      h-px

      bg-(--color-brand-300)

      transition-transform
      duration-300
      ease-out

      group-hover:translate-y-12.5
      group-focus-within:translate-y-12.5
    "
        />

        {/* BUTTON */}

        <div
          className="
      absolute

      top-0
      left-0

      w-full

      -translate-y-12

      transition-transform
      duration-300
      ease-out

      group-hover:translate-y-0
      group-focus-within:translate-y-0
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

          cursor-pointer

          transition-colors
          duration-300

          hover:bg-(--btn-primary-hover)
        "
            >
              BOOK NOW
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
