import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <input
          ref={ref}
          placeholder={placeholder || label}
          className={`
            w-full rounded-3xl border-2 border-[#1e3a8a] bg-[#1e3a8a] px-4 py-3
            text-white placeholder:text-white text-left
            focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-opacity-50
            transition-all duration-200
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500 text-center">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

