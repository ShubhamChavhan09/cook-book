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

  @media (max-width: 414px) {
    gap: 1rem;
    padding: 1.5rem 0;
  }
`;

const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 12rem;
  height: auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 auto;
  text-align: left;

  :hover {
    // transform: scale(1.1);
    transition: all 0.3s ease;
    box-shadow: 0 0 10px #ffffff;
  }

  @media (max-width: 414px) {
    width: 10rem;
  }

  @media (max-width: 360px) {
    width: 9.5rem;
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

  @media (max-width: 414px) {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 360px) {
    width: 9.5rem;
    height: 9.5rem;
  }
`;

const List = styled.div`
  color: currentColor;
  width: 17rem;
  outline: 0.5px solid ${({ theme }) => ` ${theme.text}`};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
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

    @media (max-width: 414px) {
      font-size: 0.8rem;
      margin: 0.3rem 0;
    }
  }

  em {
    @media (max-width: 414px) {
      font-size: 0.9rem;
    }
  }
`;
