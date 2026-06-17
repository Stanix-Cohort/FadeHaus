// import { navLinks } from "../../assets/data";

// export default function NavLinks() {
//   return (
//     <>
//       {navLinks.map((link) => (
//         <a
//           key={link.label}
//           href={link.href}
//           className="
//             text-med-sm
//             text-white
//             uppercase
//             tracking-wide
//             transition-all
//             duration-200
//             hover:text-brand
//           "
//         >
//           {link.label}
//         </a>
//       ))}
//     </>
//   );
// }



import { Link } from "react-router-dom";
import { navLinks } from "../../assets/data";

export default function NavLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          to={link.href}
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
        </Link>
      ))}
    </>
  );
}