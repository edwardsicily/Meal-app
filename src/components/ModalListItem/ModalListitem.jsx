import React from "react";
import "./listitem.css";

function ModalListitem({ obj }) {
  return (
    <li>
      <div className="ingredient">
        <p>{obj.ingredient}</p>
        <p>{obj.amount}</p>
      </div>
    </li>
  );
}

export default ModalListitem;
