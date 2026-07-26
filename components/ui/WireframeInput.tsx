import React from "react";

interface WireframeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export default function WireframeInput({
  label,
  helperText,
  icon,
  className = "",
  ...props
}: WireframeInputProps) {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        <input
          className={`w-full bg-slate-50 border border-slate-200 rounded-full text-slate-800 text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] focus:border-transparent transition-all placeholder:text-slate-400 ${
            icon ? "pl-11" : ""
          } ${className}`}
          {...props}
        />
      </div>
      {helperText && (
        <p className="text-xs text-slate-400 pl-2">{helperText}</p>
      )}
    </div>
  );
}
