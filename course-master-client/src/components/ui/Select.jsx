import React, { forwardRef } from "react";
import { LuChevronDown } from "react-icons/lu";

const Select = forwardRef(function Select(
  { id, label, required = false, className = "", children, ...props },
  ref
) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <select
        ref={ref}
        id={id}
        required={required}
        className={`block w-full px-3 py-3 text-sm text-heading bg-transparent
          border border-gray-300 rounded-md appearance-none
          focus:outline-none focus:ring-3 focus:ring-indigo-500/30 focus:border-indigo-600
          peer transition-colors duration-200 ${className}`}
        {...props}
        defaultValue=""
      >
        {children}
      </select>

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

      {/* Optional dropdown arrow */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <LuChevronDown/>
      </div>
    </div>
  );
});

export default Select;
