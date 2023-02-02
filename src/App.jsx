import React, { useState } from "react";
import "./App.css";
import { GrMenu } from "react-icons/gr";
import { useGlobalContext } from "./Context";
import Favourites from "./components/Favourites/Favourites";
import Meals from "./components/Meals";
import Modal from "./components/Modal/Modal";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import SideMenu from "./components/SideMenu/SideMenu";

const dynamicMap = {
  meals: Meals,
  favourites: Favourites,
};

function App() {
  const { showModal, setSidebarStatus, compToShow } = useGlobalContext();

  const DynamicComponent = dynamicMap[compToShow];

  return (
    <main>
      <SideMenu />
      <header>
        <Navbar className="mobile-hidden" />
        <Search />
        <i
          className="hamburger-icon desktop-hidden"
          onClick={() => setSidebarStatus(true)}
        >
          <GrMenu />
        </i>
      </header>

      {<DynamicComponent />}
      {showModal && <Modal />}
    </main>
  );
}

export default App;
