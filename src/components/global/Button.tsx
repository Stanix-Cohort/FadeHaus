import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        btn
        btn-primary
        btn-${size}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
