import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MealLists from "../components/MealLists";

const CategoriesItems = ({ match }) => {
  const [items, setItems] = useState("");
  const params = useParams();

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  const fetchItems = async () => {
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals);
        setItems(data.meals);
      });
  };

  return (
    <>
      <MealLists meals={items} />
    </>
  );
};

export default CategoriesItems;
