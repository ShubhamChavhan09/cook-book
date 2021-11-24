import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FavouriteButton from "../components/FavouriteButton";
import { useParams } from "react-router";

const MealDetail = () => {
  const params = useParams();

  const [info, setInfo] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchInfo();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    createIngredientsArray(info);
  }, [info]);

  const fetchInfo = async () => {
    setIsLoading(true);
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals[0]);
        setInfo(data.meals[0]);
        setIsLoading(false);
      });
  };

  if (isLoading) return <h1>Loading...</h1>;

  function createIngredientsArray(meal) {
    const ingredientsData = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredientsData.push({
          ingredient: `${meal[`strIngredient${i}`]} `,
          quantity: `${meal[`strMeasure${i}`]}`,
        });
      } else {
        break;
      }
    }
    // console.log(ingredientsData);
    setIngredients(ingredientsData);
  }

  return (
    <>
      <Container>
        <Up>
          <p>
            {info.strMeal} <FavouriteButton meals={info} />
          </p>
        </Up>
        <Main>
          <Left>
            <img src={info.strMealThumb} alt={info.strMeal} />
          </Left>
          <Right>
            <Bottom>
              <p>
                <strong
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  Recipe:
                </strong>
                {info.strInstructions}
              </p>
            </Bottom>
          </Right>
        </Main>
        <Top>
          <p>Ingredients : </p>
          {ingredients?.map((item, index) => (
            <Items key={index}>
              <strong>{item.ingredient} </strong> -<em> {item.quantity}</em>
            </Items>
          ))}
          <Button>
            {info.strYoutube === "" ? null : (
              <Click>
                <a href={info.strYoutube} target="_blank" rel="noreferrer">
                  <i
                    style={{ fontSize: "1.5rem", color: "#d63031" }}
                    className="fab fa-youtube"
                  ></i>
                </a>
              </Click>
            )}
          </Button>
        </Top>
        {/* {info.strSource === "" ? null : (
            <Click>
            <a href={info.strSource} target="_blank" rel="noreferrer">
            Source Page
            </a>
            </Click>
          )} */}
      </Container>
    </>
  );
};

export default MealDetail;

const Container = styled.div`
  height: auto;
  margin: 0 auto;
`;

const Main = styled.div`
  // border: 2px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 68vh;
  // margin-top: 1.5rem;

  @media (max-width: 414px) {
    padding: 0rem;
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin: 1.5rem 0;

  img {
    max-width: 15rem;
    height: auto;
    border-radius: 10px;
    outline: 2px solid ${({ theme }) => theme.text};
    outline-offset: -10px;

    @media (max-width: 414px) {
      width: 13rem;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  min-height: 100%;
  // background: #dcdde1;
  padding: 1rem 0 2rem 3rem;

  @media (max-width: 414px) {
    padding: 0;
  }

  // p {
  //   font-size: 1rem;
  // }

  //
`;

const Bottom = styled.div`
  p {
    font-size: 0.98rem;
    line-height: 1.4;
    padding: 2rem;
    border-radius: 10px;
    text-align: left;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.border};
    // background: #2f4858;

    @media (max-width: 414px) {
      font-size: 0.9rem;
      line-height: normal;
      padding: 1.5rem;
    }
  }
`;

const Up = styled.div`
  // background: #fab1a0;
  background: ${({ theme }) => theme.border};
  // background: #f3eed9;
  border-radius: 10px;
  padding: 1rem 0;
  min-height: 5rem;
  margin: 0 auto;
  p {
    margin: 0;
    font-size: 1.8rem;

    @media (max-width: 414px) {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 414px) {
    padding: 0.8rem 0;
    `;
const Top = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  p {
    font-size: 0.9rem;
    margin: 0;
  }
`;

const Items = styled.div`
  display: flex;
  // border: 1px solid #ff9f1a;
  border: 1px solid ${({ theme }) => theme.nav};
  border-radius: 10px;
  padding: 3px 10px;
  margin: 5px;
  // letter-spacing: 1px;
  font-size: 0.7rem;

  em,
  strong {
    font-size: 0.8rem;
    margin: 0;

    @media (max-width: 414px) {
      font-size: 0.7rem;
    }
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Click = styled.button`
  min-height: 30px;
  min-width: 30px;
  font-size: 0.85rem;
  cursor: pointer;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  outline: 1px solid ${({ theme }) => theme.text};
  outline-offset: 2px;
  font-weight: 600;
  border-radius: 8px;
  padding: 5px 10px;
  margin: 10px 0;

  a {
    text-decoration: none;
    color: #333;
  }
`;
