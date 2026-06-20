import Header from "../components/navbar/Header";
import FloatingWhatsApp from "../components/global/FloatingWhatsApp";

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <FloatingWhatsApp />
    </>
  );
}
