import { navLinks } from "../../assets/data";

interface NavLinksProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function NavLinks({
  mobile = false,
  onNavigate,
}: NavLinksProps) {
  return (
    <>
      {navLinks.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onNavigate}
          className={`
            ${
              mobile
                ? `
                  block
                  text-med-sm
                  text-white
                  uppercase
                  tracking-wider
                  py-3
                `
                : `
                  relative
                  text-med-sm
                  text-white
                  uppercase
                  tracking-wider
                `
            }

            transition-all
            duration-300

            hover:text-brand
          `}
        >
          {link.label}

          {/* Active Home Indicator */}

          {!mobile && index === 0 && (
            <span
              className="
                absolute
                left-0
                right-0
                -bottom-3
                h-0.5
                bg-white
              "
            />
          )}
        </a>
      ))}
    </>
  );
}
