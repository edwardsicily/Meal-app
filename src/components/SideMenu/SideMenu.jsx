import React from "react";
import { useGlobalContext } from "../../Context";
import { GrFormClose } from "react-icons/gr";
import Navbar from "../Navbar/Navbar";
import "./sidemenu.css";

function SideMenu({ setCompToShow }) {
  const { setSidebarStatus, sidebarStatus } = useGlobalContext();
  return (
    <div className={`sidebar ${!sidebarStatus ? "sidebar-closed" : ""}`}>
      <div className="sidebar-top">
        <button
          onClick={() => {
            setSidebarStatus(false);
          }}
        >
          <GrFormClose />
        </button>
      </div>

      <Navbar setCompToShow={setCompToShow} className="vertical-ul" />
    </div>
  );
}

export default SideMenu;
