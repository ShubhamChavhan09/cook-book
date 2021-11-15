import React from "react";
import { useStore } from "../context";
import styled from "styled-components";
import { useFavourites } from "../hooks/useFavourites";

const FavouriteButton = ({ meals }) => {
  const { setFavourites } = useFavourites();
  const { favourites } = useStore();

  const isFavourite = favourites.some((fav) => fav.idMeal === meals.idMeal);

  return (
    <AddFavourite
      onClick={() => setFavourites(meals)}
      isFavourite={isFavourite}
    >
      {isFavourite ? (
        <i className="fas fa-heart" style={{ color: "#ff7675" }}></i>
      ) : (
        <i className="far fa-heart" style={{ color: "#ff7675" }}></i>
      )}
    </AddFavourite>
  );
};

export default FavouriteButton;

const AddFavourite = styled.button`
  cursor: pointer;
  width: 60px;
  height: 60px;
  text-align: center;
  background: none;
  outline: none;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  :hover {
    background: #dcdde1;
    transition: all 0.5s ease-in-out;
  }
`;
