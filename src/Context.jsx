import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { updateLs, getLS } from "./utils";

const AppContext = React.createContext();
const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const RANDOM_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchString, setSearchString] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favourites, setFavourites] = useState(getLS());
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [compToShow, setCompToShow] = useState("meals");

  const selectMeal = (idMeal) => {
    console.log("selezionato nuovo pasto");
    let meal;
    meal = meals.find((item) => idMeal == item.idMeal);
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const addToFavourites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFav = favourites.find((meal) => meal.idMeal === idMeal);
    if (alreadyFav || !meal) return;
    setFavourites([...favourites, meal]);
  };

  const removeFromFavourites = (idMeal) => {
    const updatedFav = favourites.filter((meal) => meal.idMeal !== idMeal);
    setFavourites(updatedFav);
  };

  const closeModal = () => {
    console.log("closing modal");
    setShowModal(false);
  };

  const fetchRandomMeal = () => {
    fetchMeals(RANDOM_URL);
  };
  const fetchMeals = async (url) => {
    try {
      const { data } = await axios.get(url);
      data.meals ? setMeals(data.meals) : setMeals([]);
    } catch (error) {
      console.log(error.res);
    }
    setLoading(false);
  };
  //SET FAVOURITES TO LOCAL STORAGE
  useEffect(() => {
    console.log("favourites changed");

    updateLs(favourites);
  }, [favourites]);

  useEffect(() => {
    console.log("fetch on load");
    fetchMeals(`${SEARCH_URL}`);
  }, []);

  useEffect(() => {
    if (!searchString) return;
    console.log("fetch on rerender");
    fetchMeals(`${SEARCH_URL}${searchString}`);
  }, [searchString]);

  return (
    <AppContext.Provider
      value={{
        meals,
        loading,
        setLoading,
        searchString,
        setSearchString,
        fetchRandomMeal,
        showModal,
        selectedMeal,
        selectMeal,
        closeModal,
        favourites,
        addToFavourites,
        removeFromFavourites,
        setSidebarStatus,
        sidebarStatus,
        compToShow,
        setCompToShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { useGlobalContext, AppProvider };
