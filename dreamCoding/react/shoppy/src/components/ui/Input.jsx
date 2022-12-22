import React from "react";

export default function Input({ name, type, placeholder, onChange }) {
  return (
    <input
      className="border border-gray-300 p-4"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}
