import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="bg-brand py-2 px-4 text-white rounded-sm hover:brightness-110"
    >
      {text}
    </button>
  );
}
