import Container from "../global/Container";
import { MdLocationOn } from "react-icons/md";

export default function TopBanner() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-neutral-900)",
      }}
    >
      <Container>
        <div
          className="
            flex
            items-center
            justify-center
            gap-4
            py-2
          "
        >
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-neutral-400" size={16} />

            <span
              className="
                text-med-caption
                text-neutral-400
              "
            >
              Lagos, Nigeria
            </span>
          </div>

          <a
            href="#"
            className="
              text-neutral-400
              underline
            "
          >
            Get Directions
          </a>
        </div>
      </Container>
    </div>
  );
}
