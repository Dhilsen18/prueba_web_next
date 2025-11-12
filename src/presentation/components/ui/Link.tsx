import { AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "accent";
}

export const Link = ({ children, variant = "default", className = "", ...props }: LinkProps) => {
  const variantStyles = {
    default: "text-[#1e3a8a] hover:text-[#1e3a8a] hover:underline",
    accent: "text-[#ff6b35] hover:text-[#e55a2b] hover:underline font-bold",
  };

  return (
    <a
      className={`transition-colors duration-200 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

