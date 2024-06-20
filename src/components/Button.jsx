import React from "react";

const Button = ({ style, text }) => {
  return (
    <button
      type="button"
      className={`${
        style == "fill"
          ? " bg-blue-500 text-white hover:bg-blue-600 transition-all"
          : "bg-zinc-400 text-zinc-800 hover:bg-zinc-300 transition-all"
      } text-white px-4 py-2 rounded capitalize font-medium`}
    >
      {text}
    </button>
  );
};

export default Button;
