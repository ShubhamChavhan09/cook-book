import React from "react";
import { useStore } from "../context";
import MealLists from "../components/MealLists";

const Favourites = () => {
  const { favourites } = useStore();

  return (
    <>
      {favourites.length ? (
        <MealLists meals={favourites} />
      ) : (
        <p>No Favourites</p>
      )}
    </>
  );
};

export default Favourites;
