import React from "react";

const Button = ({ style, text }) => {
  return (
    <button
      type="button"
      className={`${
        style == "fill"
          ? " bg-blue-500 text-white"
          : "bg-gray-200 text-zinc-800"
      } text-white px-4 py-2 rounded capitalize font-medium`}
    >
      {text}
    </button>
  );
};

export default Button;
