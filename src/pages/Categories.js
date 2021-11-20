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
    <Container>
      {Object.values(types).map((type) => (
        <LinkItem key={type.idCategory} to={`/categories/${type.strCategory}`}>
          <Card>
            <img src={type.strCategoryThumb} alt={type.strCategory} />
          </Card>
          <p>{type.strCategory}</p>
        </LinkItem>
      ))}
    </Container>
  );
};

export default Categories;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 50px;
//   text-align: center;
//   font-size: 12px;
//   padding: 40px;

//   h2 {
//     margin: 0;
//   }
//   img {
//     width: 150px;
//     aspect-ratio: 1/1;
//     border-radius: 50%;
//     outline: 1px solid;
//     outline-offset: 6px;
//     transition: all 0.1s linear;

//     :hover {
//       outline: 1px dashed;
//       transform: scale(1.03);
//     }

//     @media (max-width: 500px) {
//     }
//   }

//   @media (max-width: 980px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   @media (max-width: 700px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (max-width: 450px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

const LinkItem = styled(Link)`
  font-size: 1.2rem;
  text-align: left;
  text-decoration: none;
  margin: 0 auto;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  p {
    margin: 0 0 0 15px;
  }
  :hover > div {
    // transform: scale(1.1);
    box-shadow: 0 0 4px;

    transition: all 0.3s ease;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  border: ${({ theme }) => `1px solid ${theme.border}`};
  // box-shadow: 0 0 4px;
  border-radius: 20px;
  width: 296px;
  height: 185px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
