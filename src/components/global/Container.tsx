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
        px-4
        md:px-8
        lg:px-12
        xl:px-16
        ${className}
      `}
    >
      {children}
    </div>
  );
}
