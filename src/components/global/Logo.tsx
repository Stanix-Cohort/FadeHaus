import logo from "../../assets/images/FadeHause_Logo.svg";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <img src={logo} alt="Company logo" className={className || "w-40 h-auto"} />
  );
}
