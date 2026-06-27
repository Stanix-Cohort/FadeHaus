import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  options: string[];
}

export default function ServiceDropdown({
  value,
  placeholder = "Choose",
  onChange,
  options,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        relative

        w-full
      "
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full
          h-12

          px-6

          border
          border-(--color-brand-300)

          rounded-xs

          bg-transparent

          flex
          items-center
          justify-between

          text-left
        "
      >
        <span
          className={`
            text-med-sm
            ${value ? "text-white" : "text-white/30"}
          `}
        >
          {value || placeholder}
        </span>

        <FiChevronDown
          size={18}
          className={`
            text-(--color-brand-300)

            transition-transform
            duration-300

            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <div
          className="
            absolute

            top-[calc(100%+8px)]

            right-0
            left-auto

            w-1/4
            min-w-48

            rounded-xs

            border
            border-(--color-brand-300)

            bg-(--color-brand-300)

            overflow-hidden

            z-50
          "
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="
                w-full

                px-4
                py-3

                text-left

                text-med-sm

                text-neutral-900

                hover:bg-black/10
              "
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
