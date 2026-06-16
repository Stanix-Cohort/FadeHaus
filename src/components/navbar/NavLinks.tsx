import { navLinks } from "../../assets/data";

export default function NavLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="
            text-med-sm
            text-white
            uppercase
            tracking-wide
            transition-all
            duration-200
            hover:text-brand
          "
        >
          {link.label}
        </a>
      ))}
    </>
  );
}
