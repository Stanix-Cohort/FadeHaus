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

        h-[520px]
      "
    >
      {/* ── IMAGE ─────────────────────────────────────────────────────────── */}

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

      {/* ── TITLE ─────────────────────────────────────────────────────────── */}

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

      {/* ── DESCRIPTION ───────────────────────────────────────────────────── */}

      <div
        className="
          mt-3

          h-20

          lg:h-24
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

      {/* ── MOBILE / TABLET ─────────────────────────────────────────────────
          BOOK NOW button always visible, sitting directly above the gold
          border line. No animation on touch devices. mt-auto pushes the
          whole block to the bottom of the fixed-height card.
      ──────────────────────────────────────────────────────────────────── */}

      <div
        className="
          lg:hidden

          mt-auto

          flex
          flex-col
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

        {/* Gold border sits directly beneath the button */}
        <div className="w-full h-px bg-(--color-brand-300)" />
      </div>

      {/* ── DESKTOP ANIMATION ───────────────────────────────────────────────

          GEOMETRY — two independently animated elements, one container
          ───────────────────────────────────────────────────────────────
          Container: h-[45px], overflow-hidden, relative
            → reserves exactly enough space for button(44px) + border(1px)
            → clips anything above y=0 and below y=45

          Element A — Border (absolute, top-0, h-px)
            REST : translateY(0)   → sits at y=0..1   → VISIBLE at top ✓
            HOVER: translateY(44px) → travels to y=44..45 → VISIBLE at bottom ✓
            Travel: 44px downward — clearly visible movement ✓

          Element B — Button (absolute, top-0, h-11 = 44px)
            REST : translateY(-44px) → sits at y=-44..0  → HIDDEN above clip ✓
            HOVER: translateY(0px)   → sits at y=0..44   → VISIBLE, fills zone ✓
            Travel: 44px downward — drops in from above ✓

          What the eye sees:
            REST : only the gold border line visible below the description ✓
            HOVER: border travels DOWN 44px (clearly moving),
                   button drops in from above simultaneously,
                   they arrive as one connected unit —
                   button on top (y=0..44), border beneath (y=44..45) ✓

          Both use identical transition-transform duration-300 ease-out
          so they are perfectly synchronised. Zero layout shift.
          Card height h-[520px] never changes.

      ──────────────────────────────────────────────────────────────────── */}

      <div
        className="
          hidden
          lg:flex
          lg:flex-col

          mt-4
        "
      >
        {/* Animation container — clips both elements */}
        <div className="relative h-11.25 overflow-hidden">
          {/* Element A — Border
              Starts at top of container (y=0, visible).
              On hover travels DOWN to y=44 (bottom of container, still visible).
              This is the border the user sees "leaving its position" on hover. */}
          <div
            className="
              absolute
              top-0
              left-0

              w-full
              h-px

              bg-(--color-brand-300)

              translate-y-0

              transition-transform
              duration-300
              ease-out

              group-hover:translate-y-11
              group-focus-within:translate-y-11
            "
          />

          {/* Element B — Button
              Starts ABOVE container (y=-44, hidden by overflow-hidden clip).
              On hover drops DOWN to y=0, filling the container.
              Lands directly above the border, arriving as one unit. */}
          <div
            className="
              absolute
              top-0
              left-0

              w-full

              -translate-y-11

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

        <div className="flex-1" />
      </div>
    </article>
  );
}
