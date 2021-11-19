import React from "react";
import { useStore } from "../context";
import MealLists from "../components/MealLists";

const Favourites = () => {
  const { favourites } = useStore();

  return (
    <>
      {favourites.length ? (
        // <Container>
        //   {favourites &&
        //     Object.values(favourites).map((meal, index) => (
        //       <Card key={index}>
        //         <List to={`${meal.strMeal}/${meal.idMeal}`}>
        //           <img src={meal.strMealThumb} alt={meal.strMeal} />
        //           <h4>{meal.strMeal}</h4>
        //         </List>
        //       </Card>
        //     ))}
        // </Container>

        <MealLists meals={favourites} />
      ) : (
        <div>No Favourites </div>
      )}
    </>
  );
};

export default Favourites;
