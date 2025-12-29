import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  { id, label, type = "text", required = false, className = "", ...props },
  ref
) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        ref={ref}
        id={id}
        type={type}
        placeholder=" "
        required={required}
        className={`block w-full px-3 py-3 text-sm text-heading bg-transparent
          border border-gray-300 rounded-md appearance-none
          focus:outline-none focus:ring-3 focus:ring-indigo-500/30 focus:border-indigo-600
          peer transition-colors duration-200 ${className}`}
        {...props}
      />

      {label && (
        <label
          htmlFor={id}
          className={`absolute left-3 top-3 text-sm text-second bg-white px-1
            duration-300 transform origin-left pointer-events-none
            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
            peer-focus:-translate-y-6 peer-focus:scale-90
            peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-90
            peer-focus:text-indigo-600`}
        >
          {label}
        </label>
      )}
    </div>
  );
});

export default Input;
