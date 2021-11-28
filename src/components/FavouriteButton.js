import React from "react";
import { useStore } from "../context";
import styled from "styled-components";
import { useFavourites } from "../hooks/useFavourites";
import { Tooltip } from "react-tippy";

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
        <Tooltip title="Remove favorite" position="top-end" animation="fade">
          <i className="fas fa-heart" style={{ color: "#ff7675" }}></i>
        </Tooltip>
      ) : (
        <Tooltip title="Set as favorite" position="top-end" animation="fade">
          <i className="far fa-heart" style={{ color: "#ff7675" }}></i>
        </Tooltip>
      )}
    </AddFavourite>
  );
};

export default FavouriteButton;

const AddFavourite = styled.button`
  cursor: pointer;
  // width: 60px;
  // height: 60px;
  text-align: center;
  background: none;
  outline: none;
  border: none;
  border-radius: 50%;
  font-size: 1.6rem;
`;
