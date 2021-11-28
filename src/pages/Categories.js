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
        // console.log(data.categories);
        setTypes(data.categories);
      });
  };

  return (
    <>
      <Container>
        {Object.values(types).map((type) => (
          <LinkItem
            key={type.idCategory}
            to={`/categories/${type.strCategory}`}
          >
            <Card>
              <img src={type.strCategoryThumb} alt={type.strCategory} />
            </Card>
            <h3>{type.strCategory}</h3>
          </LinkItem>
        ))}
      </Container>
    </>
  );
};

export default Categories;

const LinkItem = styled(Link)`
  width: 13rem;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  :hover {
    // transform: scale(1.1);
    box-shadow: 0 0 4px;
    transition: all 0.3s ease;
  }
  @media (max-width: 768px) {
    width: 12rem;
  }
  @media (max-width: 414px) {
    width: 10rem;
    padding: 0;
  }
  @media (max-width: 375px) {
    width: 9rem;
  }
`;
const Container = styled.div`
  gap: 2rem;
  // border: 2px solid green;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
  @media (max-width: 414px) {
    padding: 1rem 0.5rem;
    gap: 0.7rem;
  }
  @media (max-width: 375px) {
    padding: 1.5rem 0;
    gap: 0.8rem;
  }
`;

const Card = styled.div`
  // border-radius: 8px;
  // height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;
