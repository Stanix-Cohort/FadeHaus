import Navbar from "./Navbar";
import TopBanner from "./TopBanner";

export default function Header() {
  return (
    <header>
      <TopBanner />
      <Navbar />
    </header>
  );
}





// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/services">Services</Link>
//       <Link to="/gallery">Gallery</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// }

// export default Header;
