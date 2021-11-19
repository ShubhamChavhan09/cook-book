import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MealLists from "../MealLists";

const MealItems = () => {
  const [meals, setMeals] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    fetchMeal();
    //    eslint-disable-next-line
  }, []);

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
      {meals ? (
        // <Container>
        //   {meals &&
        //     Object.values(meals).map((meal, index) => (
        //       <Card key={index}>
        //         <List to={`${meal.strMeal}/${meal.idMeal}`}>
        //           <img src={meal.strMealThumb} alt={meal.strMeal} />
        //           <h4>{meal.strMeal}</h4>
        //         </List>
        //       </Card>
        //     ))}
        // </Container>

        <MealLists meals={meals} />
      ) : (
        <h2>No results for {params.id}</h2>
      )}
    </>
  );
};

export default MealItems;
