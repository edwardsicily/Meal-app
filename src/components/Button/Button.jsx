import React from "react";
import "./button.css";

function Button({ content, action, style }) {
  return (
    <button className={`btn ${style}`} onClick={action}>
      {content}
    </button>
  );
}

export default Button;
