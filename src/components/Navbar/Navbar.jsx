import React from "react";
import "./Navbar.css";
import { useGlobalContext } from "../../Context";

function Navbar({ className = "" }) {
  const { setSidebarStatus, setCompToShow, compToShow } = useGlobalContext();
  const handleAction = (data) => {
    setCompToShow(data);
    setSidebarStatus(false);
  };
  return (
    <ul className={`nav-ul ${className}`}>
      <li className="nav-li" onClick={() => handleAction("meals")}>
        Recipes
      </li>
      <li className="nav-li" onClick={() => handleAction("favourites")}>
        Favourites
      </li>
    </ul>
  );
}

export default Navbar;
