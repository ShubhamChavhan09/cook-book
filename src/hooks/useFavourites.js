import { useStore, useDispatch } from "../context";

export const useFavourites = () => {
  const dispatch = useDispatch();
  const { favourites } = useStore();

  const getFavourites = () => {
    let tempFavourites =
      JSON.parse(localStorage.getItem("meal_favourites")) || [];

    dispatch({ type: "FAVOURITES", payload: tempFavourites });
  };

  const setFavourites = (meal) => {
    let tempFavourites = favourites;

    if (!tempFavourites.some((fav) => fav.idMeal === meal.idMeal)) {
      tempFavourites.push(meal);
      localStorage.setItem("meal_favourites", JSON.stringify(tempFavourites));
      dispatch({ type: "FAVOURITES", payload: tempFavourites });
    } else {
      const filteredFavs = tempFavourites.filter(
        (fav) => fav.idMeal !== meal.idMeal
      );

      dispatch({ type: "FAVOURITES", payload: filteredFavs });
      localStorage.setItem("meal_favourites", JSON.stringify(filteredFavs));
    }
  };

  return { getFavourites, setFavourites };
};
