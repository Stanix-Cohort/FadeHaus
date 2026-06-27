// import { BrowserRouter, Routes, Route } from "react-router-dom";
// <<<<<<< HEAD

// import MainLayout from "./layouts/MainLayout";

// =======
// >>>>>>> 01866e5 (feat: add Gallery page with filter tabs, image grid, CTA and FAQs)
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import Gallery from "./pages/Gallery";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />

//           <Route path="/services" element={<Services />} />

// <<<<<<< HEAD
//           <Route path="/gallery" element={<Gallery />} />

//           <Route path="/contact" element={<Contact />} />
//         </Route>
// =======
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
// >>>>>>> 01866e5 (feat: add Gallery page with filter tabs, image grid, CTA and FAQs)
//       </Routes>
//     </BrowserRouter>
//   );
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
