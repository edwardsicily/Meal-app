import React from "react";
import "./mycategoryicon.css";

function MyCategoryIcon({ value }) {
  console.log(value);
  return (
    <div className="category">
      <div className="category-name">{value}</div>
      <img
        src={`img/${value.toLowerCase()}.png`}
        alt="icon"
        className="mc-icon"
      />
    </div>
  );
}

export default MyCategoryIcon;
