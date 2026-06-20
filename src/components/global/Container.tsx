import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-360

        px-6
        md:px-8
        lg:px-20

        ${className}
      `}
    >
      {children}
    </div>
  );
}
