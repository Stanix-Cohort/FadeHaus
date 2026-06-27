import { Outlet } from "react-router-dom";
import Header from "../components/navbar/Header";
import Footer from "../components/home/Footer";
import FloatingWhatsApp from "../components/global/FloatingWhatsApp";

export default function HomeLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
