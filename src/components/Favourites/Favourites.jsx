import React from "react";
import { useGlobalContext } from "../../Context";
import FavouriteItem from "./FavouriteItem/FavouriteItem";
import "./favourites.css";

function Favourites() {
  const { favourites } = useGlobalContext();
  if (!favourites) return <div>Loading...</div>;
  return (
    <section className="Favourites">
      <div className="favourites-content">
        <h2> Favourites</h2>
        <div className="favourites-wrapper">
          {favourites.length === 0 ? (
            <div className="empty-fav">
              <h3>Your favourites list is empty! </h3>
              <h5>Try add some!</h5>
            </div>
          ) : (
            favourites.map((item) => {
              return <FavouriteItem item={item} />;
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Favourites;
