import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchType();
    // eslint-disable-next-line
  }, []);

  const fetchType = async () => {
    await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.categories);
        setTypes(data.categories);
      });
  };

  return (
    <Container>
      {Object.values(types).map((type) => (
        <div key={type.idCategory}>
          <LinkItem to={`/categories/${type.strCategory}`}>
            <img src={type.strCategoryThumb} alt={type.strCategory} />
            <h2>{type.strCategory}</h2>
          </LinkItem>
          {/* <p>{type.strCategoryDescription}</p> */}
        </div>
      ))}
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  text-align: center;
  font-size: 12px;
  padding: 40px;

  h2 {
    margin: 0;
  }
  img {
    width: 200px;
    @media (max-width: 500px) {
      width: 180px;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;

  color: ${({ theme }) => theme.text};
`;
