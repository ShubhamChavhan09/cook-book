import React from "react";
import { useStore } from "../context";
import MealItems from "../components/MealItems.js";

const Favorites = () => {
  const { favourites } = useStore();
  console.log(favourites);
  return (
    <>
      {favourites.length ? (
        <MealItems meals={favourites} />
      ) : (
        <div>No Favourites</div>
      )}
    </>
  );
};

export default Favorites;
