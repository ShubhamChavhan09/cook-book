import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MealLists from "../MealLists";
import SearchMeal from "../SearchMeal";

const MealItems = () => {
  const [meals, setMeals] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    fetchMeal();
    // eslint-disable-next-line
  }, [params.id]);

  const fetchMeal = async () => {
    setIsLoading(true);
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals);
        setMeals(data.meals);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <SearchMeal />
      {meals ? (
        <MealLists meals={meals} />
      ) : (
        <p style={{ fontSize: "1.5rem" }}>No results for '{params.id}'</p>
      )}
    </>
  );
};

export default MealItems;
