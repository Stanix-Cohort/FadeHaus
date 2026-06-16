import Logo from "../global/Logo";
import Container from "../global/Container";
import Button from "../global/Button";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        left-0
        right-0
        top-9
        z-50
        bg-neutral-900
      "
    >
      <Container>
        <div
          className="
            flex
            items-center
            justify-between
            py-6
          "
        >
          <Logo />

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-14
            "
          >
            <NavLinks />
          </div>

          <Button size="md" className="rounded">Book Now</Button>
        </div>
      </Container>
    </nav>
  );
}
