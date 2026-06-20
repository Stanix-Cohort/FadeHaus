import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        border-b
        border-neutral-700

        py-4
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
    w-full

    flex
    items-center
    justify-between

    text-left

    text-(--color-brand-300)

    text-med-sm

    cursor-pointer
  "
      >
        <div
          className="
      flex
      items-center

      gap-3
    "
        >
          <span
            className="
        text-(--color-brand-300)
        font-bold
      "
          >
            -
          </span>

          <span>{question}</span>
        </div>

        <FiChevronDown
          className={`
      transition-transform
      duration-300

      ${open ? "rotate-180" : ""}
    `}
        />
      </button>
      <div
        className={`
          overflow-hidden

          transition-all
          duration-300

          ${open ? "max-h-40 mt-4" : "max-h-0"}
        `}
      >
        <p
          className="
            text-med-sm

            text-white
          "
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
