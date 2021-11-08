import React, { useEffect, useState } from "react";
import MealItems from "../components/MealItems.js";

const CategoriesItems = ({ match }) => {
  const [items, setItems] = useState("");
  console.log(match);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  const fetchItems = async () => {
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${match.params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItems(data.meals);
      });
  };

  return (
    <>
      <MealItems meals={items} />
    </>

    // <Container>
    //   {Object.values(items).map((item) => (
    //     <Card key={item.idMeal}>
    //       <List to={`/categories/${match.params.id}/${item.idMeal}`}>
    //         <img src={item.strMealThumb} alt={item.strMeal} />
    //         <h3>{item.strMeal}</h3>
    //       </List>
    //     </Card>
    //   ))}
    // </Container>
  );
};

export default CategoriesItems;
