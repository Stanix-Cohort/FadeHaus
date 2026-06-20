import { NavLink } from "react-router-dom";

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
      {navLinks.map((link) => (
        <NavLink
          key={link.label}
          to={link.href}
          onClick={onNavigate}
          className={({ }) => `
            ${
              mobile
                ? `
                  block
                  text-med-sm
                  uppercase
                  tracking-wider
                  py-3
                `
                : `
                  relative
                  text-med-sm
                  uppercase
                  tracking-wider
                `
            }

            text-white

            transition-all
            duration-300

            hover:text-brand
          `}
        >
          {({ isActive }) => (
            <>
              {link.label}

              {!mobile && isActive && (
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
            </>
          )}
        </NavLink>
      ))}
    </>
  );
}
