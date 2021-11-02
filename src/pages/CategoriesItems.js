import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    <Container>
      {Object.values(items).map((item) => (
        <Card key={item.idMeal}>
          <List to={`/categories/${match.params.id}/${item.idMeal}`}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3>{item.strMeal}</h3>
          </List>
        </Card>
      ))}
    </Container>
  );
};

export default CategoriesItems;

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
  }
`;

const Card = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
    opacity: 0.7;
    transition: all 200ms ease;
  }
`;
