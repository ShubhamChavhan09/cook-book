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
                <em>
                  {meal.strArea && meal.strCategory ? `${meal.strArea}` : null}
                </em>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // padding: 3rem 0;

  @media (max-width: 414px) {
    padding: 0;
  }
`;

const Card = styled.div`
  margin: 1rem;
  // padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  border-radius: 15px;
  text-align: left;
  border: ${({ theme }) => `1px solid ${theme.border}`};
  width: 11rem;

  :hover {
    transform: scale(1.02);
    box-shadow: 0 0 1px;
    // background: ${({ theme }) => ` ${theme.body}`};
  }

  @media (max-width: 768px) {
    width: 8rem;
  }
  @media (max-width: 414px) {
    width: 10.9rem;
    margin: 0.5rem;
  }
  @media (max-width: 411px) {
    width: 10.5rem;
    margin: 0.5rem;
  }
  @media (max-width: 375px) {
    width: 9rem;
  }
`;

const Img = styled.img`
  border-radius: 15px;
  width: 100%;
`;

const List = styled(Link)`
  text-decoration: none;
  color: currentColor;
  width: 17rem;

  p,
  em {
    font-size: 0.9rem;

    @media (max-width: 414px) {
      font-size: 0.8rem;
    }
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;
