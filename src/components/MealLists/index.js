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
            <Card to={`/${meal.strMeal}/${meal.idMeal}`} key={index}>
              <List>
                <Img>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </Img>
                <Content>
                  <h3>{meal.strMeal}</h3>
                  <em>
                    {meal.strArea && meal.strCategory
                      ? `${meal.strArea}`
                      : null}
                  </em>
                </Content>
              </List>
            </Card>
          ))}
      </Container>
    </>
  );
};

export default MealLists;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
  padding: 3rem;
`;

const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 12rem;
  height: auto;
  border-radius: 15px;

  margin: 0 auto;
  text-align: left;

  :hover {
    outline: ${({ theme }) => `1px solid ${theme.nav}`};
    // transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

const Img = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 12rem;
  height: 12rem;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`;

const List = styled.div`
  color: currentColor;
  width: 17rem;
`;

const Content = styled.div`
  h3,
  em {
    padding: 0 1rem;
    color: ${({ theme }) => ` ${theme.text}`};
  }
  h3 {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;
