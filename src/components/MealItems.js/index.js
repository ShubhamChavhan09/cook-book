import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MealItems = ({ meals }) => {
  return (
    <Container>
      {meals &&
        Object.values(meals).map((meal, index) => (
          <Card key={index}>
            <List to={`/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h4>{meal.strMeal}</h4>
            </List>
          </Card>
        ))}
    </Container>
  );
};

export default MealItems;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 80px;
  text-align: center;
  padding: 40px 0;
  margin: 0 auto;

  img {
    width: 100%;

    @media (max-width: 500px) {
      width: 100%;
    }
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1104px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #ffffff;
  box-shadow: 0 0 10px #130f40;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const List = styled(Link)`
  text-decoration: none;
  color: #ff9f1a;

  :hover img {
    filter: brightness(0.75);
    transition: all 200ms ease;
  }
  :hover h3 {
    transform: scale(1.3);
    transition: all 200ms linear;
  }
`;

//linear-gradient(to right, red, rgba(0, 0, 0, 0.8))
