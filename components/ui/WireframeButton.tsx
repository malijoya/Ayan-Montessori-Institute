import React from "react";

interface WireframeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function WireframeButton({
  label,
  variant = "primary",
  size = "md",
  icon,
  fullWidth = false,
  className = "",
  ...props
}: WireframeButtonProps) {
  const variantClasses = {
    primary: "bg-[#87CEEB] text-[#2C5F8A] hover:bg-[#70BDDF] shadow-sm hover:shadow-md font-semibold",
    secondary: "bg-[#2C5F8A] text-white hover:bg-[#224B6E] shadow-sm hover:shadow-md font-semibold",
    accent: "bg-[#FFD166] text-[#2C5F8A] hover:bg-[#F8C346] shadow-sm hover:shadow-md font-bold",
    outline: "border-2 border-[#2C5F8A] text-[#2C5F8A] hover:bg-[#2C5F8A] hover:text-white font-semibold",
    ghost: "text-slate-600 hover:bg-slate-100 font-medium",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-full",
    md: "px-6 py-2.5 text-sm rounded-full",
    lg: "px-8 py-3.5 text-base rounded-full",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      <span>{label}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
