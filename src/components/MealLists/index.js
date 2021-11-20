import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MealLists = ({ meals }) => {
  console.log(meals);
  return (
    <>
      <Container>
        {meals &&
          Object.values(meals).map((meal, index) => (
            <Card key={index}>
              <List to={`/${meal.strMeal}/${meal.idMeal}`}>
                <Img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strMeal}</p>
                <p>
                  {meal.strArea && meal.strCategory ? `${meal.strArea}` : null}
                </p>
              </List>
            </Card>
          ))}
      </Container>
    </>
  );
};

export default MealLists;

const Container = styled.div`
  // border: 2px solid green;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 3rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  margin: 0 auto;
  padding: 15px;
  transition: all 0.3s ease-in-out;
  border-radius: 15px;
  text-align: left;

  :hover {
    box-shadow: 0 0 1px;
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 14rem;
  }

  @media (max-width: 414px) {
    width: 11rem;
  }
  @media (max-width: 375px) {
    width: 10rem;
  }
`;

const List = styled(Link)`
  text-decoration: none;
  color: currentColor;

  p {
    font-size: 1rem;
    @media (max-width: 414px) {
      font-size: 0.8rem;
    }
  }
`;

const Img = styled.img`
  width: 17rem;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 12rem;
  }
  @media (max-width: 414px) {
    width: 9rem;
  }
  @media (max-width: 375px) {
    width: 8rem;
  }
`;
