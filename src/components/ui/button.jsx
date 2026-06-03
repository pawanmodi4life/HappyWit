import React from "react";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-5 py-2.5 font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
