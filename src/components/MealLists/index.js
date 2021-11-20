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

// const Container = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-gap: 80px;
//   padding: 40px 0;
//   img {
//     width: 100%;

//     @media (max-width: 500px) {
//       width: 100%;
//     }
//   }
//   @media (max-width: 1300px) {
//     grid-template-columns: repeat(5, 1fr);
//   }

//   @media (max-width: 1104px) {
//     grid-template-columns: repeat(4, 1fr);
//   }
//   @media (max-width: 900px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   @media (max-width: 500px) {
//     width: 90%;
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const Card = styled.div`
//   width: 150px;
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   background: #ffffff;
//   box-shadow: 0 0 10px #130f40;
//   @media (max-width: 500px) {
//     width: 100%;
//   }
// `;

// const List = styled(Link)`
//   text-decoration: none;
//   color: #ff9f1a;

//   :hover img {
//     filter: brightness(0.75);
//     transition: all 200ms ease;
//   }
//   :hover h3 {
//     transform: scale(1.3);
//     transition: all 200ms linear;
//   }
// `;

const Container = styled.div`
  // border: 2px solid green;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 3rem 0;
`;

const Card = styled.div`
  // border: 1px solid yellow;
  padding: 15px;
  transition: all 0.3s ease-in-out;
  border-radius: 15px;
  text-align: left;

  :hover {
    box-shadow: 0 0 1px;
    transform: scale(1.1);
  }
`;

const List = styled(Link)`
  text-decoration: none;
  color: currentColor;
`;

const Img = styled.img`
  width: 17rem;
  border-radius: 15px;
`;
