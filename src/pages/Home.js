import React, { useState, useEffect } from "react";
import SearchMeal from "../components/SearchMeal";
import styled from "styled-components";
import MealItems from "../components/MealItems.js";

const Home = () => {
  const [meals, setMeals] = useState("");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMeal(setMeals);
    //    eslint-disable-next-line
  }, [query]);

  const fetchMeal = async () => {
    setIsLoading(true);
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Wrapper>
      <SearchMeal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
      />
      {meals ? (
        <div>
          {query ? ` Results for '${query}'` : ""}
          <MealItems meals={meals} />
        </div>
      ) : (
        <div>No results for "{query}"</div>
      )}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;
