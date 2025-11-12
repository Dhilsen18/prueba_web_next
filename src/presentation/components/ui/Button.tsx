import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className = "", ...props }, ref) => {
    const baseStyles = "w-full rounded-3xl px-4 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantStyles = {
      primary: "bg-[#ff6b35] text-white hover:bg-[#e55a2b] focus:ring-[#ff6b35] disabled:opacity-50 disabled:cursor-not-allowed",
      secondary: "bg-transparent text-[#1e3a8a] border border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white focus:ring-[#1e3a8a]",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

