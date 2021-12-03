import React from "react";
import { useStore } from "../context";
import MealLists from "../components/MealLists";
import styled from "styled-components";

const Favourites = () => {
  const { favourites } = useStore();

  return (
    <Container>
      {favourites.length ? (
        <MealLists meals={favourites} />
      ) : (
        <p style={{ margin: "0 auto" }}>No Favourites</p>
      )}
    </Container>
  );
};

export default Favourites;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
