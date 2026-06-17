
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navbar/Header";
import Services from "./pages/Services";



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/services" element={<Services />} />
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
