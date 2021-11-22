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
  margin: 0 auto;
  padding: 3rem 0;

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
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  border-radius: 15px;
  text-align: left;
  border: ${({ theme }) => `1px solid ${theme.border}`};
  // width: 18rem;
  

  :hover {
    transform: scale(1.1);
    box-shadow: 0 0 1px;
    background: ${({ theme }) => ` ${theme.body}`} ;
  
  @media (max-width: 768px) {
    width: 14rem;
  }

  @media (max-width: 414px) {
    width: 10.5rem;
    
  }
  @media (max-width: 375px) {
    width: 7rem;
  }
`;

const Img = styled.img`
  border-radius: 15px;
  width: 100%;

  // @media (max-width: 768px) {
  //   width: 13rem;
  // }
  // @media (max-width: 414px) {
  //   width: 9.5rem;
  // }
  // @media (max-width: 375px) {
  //   width: 8rem;
  // }
`;

const List = styled(Link)`
  text-decoration: none;
  color: currentColor;
  width: 17rem;

  @media (max-width: 768px) {
    width: 13rem;
  }
  @media (max-width: 414px) {
    width: 9.5rem;
  }
  @media (max-width: 375px) {
    width: 8rem;
  }

  p {
    font-size: 1rem;
    @media (max-width: 414px) {
      font-size: 0.7rem;
    }
  }
`;
