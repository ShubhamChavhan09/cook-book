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
              <h3>{meal.strMeal}</h3>
            </List>
          </Card>
        ))}
    </Container>
  );
};

export default MealItems;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  text-align: center;
  padding: 40px 50px;

  img {
    width: 220px;
    aspect-ratio: 1 / 1;

    @media (max-width: 500px) {
      width: 250px;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;

  @media (max-width: 500px) {
    width: 250px;
  }
  h3 {
    background: white;
    position: absolute;
    bottom: -10px;
    right: 0;
    margin: 0;
    border: 1px solid #ff9f1a;
  }
  h3: hover {
    transform: scale(0.99);
  }
`;

const List = styled(Link)`
  text-decoration: none;
  color: #ff9f1a;

  :hover img {
    filter: brightness(0.8);
    transition: all 200ms ease;
  }
`;
