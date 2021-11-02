import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SearchMeal from "../components/SearchMeal";
import styled from "styled-components";

const Home = () => {
  const [meals, setMeals] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef("");

  useEffect(() => {
    fetchMeal(setMeals);
    //    eslint-disable-next-line
  }, [setMeals]);

  const fetchMeal = async () => {
    setIsLoading(true);
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setMeals(data.meals);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (isLoading) return <h1>Loading...</h1>;

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMeal();
  };

  return (
    <Wrapper>
      <SearchMeal
        handleSearch={handleSearch}
        meals={meals}
        setMeals={setMeals}
        inputRef={inputRef}
      />
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
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  text-align: center;
  padding: 40px 0;

  img {
    width: 280px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media (max-width: 500px) {
      width: 250px;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 250px;
  }
  h3 {
    margin: 0;
    border: 1px solid #ff9f1a;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
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
    transition: all 200ms linear;
  }
`;
