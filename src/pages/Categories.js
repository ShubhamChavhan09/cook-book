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
  font-size: 1rem;
  text-align: left;
  text-decoration: none;
  margin: 1rem;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.border}`};
  color: ${({ theme }) => theme.text};
  p {
    margin: 0 0 0 15px;

    @media (max-width: 414px) {
      font-size: 0.9rem;
    }
  }
  :hover {
    // transform: scale(1.1);
    box-shadow: 0 0 4px;
    transition: all 0.3s ease;
  }

  @media (max-width: 414px) {
    margin: 0.4rem;
  }
  @media (max-width: 768px) {
    margin: 0.4rem;
  }
`;
const Container = styled.div`
  // display: grid;
  // grid-template-columns: repeat(5, 1fr);
  // gap: 30px;
  // padding: 4rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 0;
  }
  @media (max-width: 414px) {
    margin: 0;
  }
`;

const Card = styled.div`
  // box-shadow: 0 0 4px;
  border-radius: 8px;
  width: 13rem;
  height: auto;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    width: 16rem;
  }
  @media (max-width: 768px) {
    width: 10rem;
  }
  @media (max-width: 414px) {
    width: 10.5rem;
  }
  @media (max-width: 375px) {
    width: 9rem;
  }
`;
