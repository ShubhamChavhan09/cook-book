import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tippy";
import styled from "styled-components";
import FavouriteButton from "../components/FavouriteButton";

const Random = () => {
  const [info, setInfo] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRandom();
    // eslint-disable-next-line
  }, [setInfo]);

  useEffect(() => {
    createIngredientsArray(info);
    // eslint-disable-next-line
  }, [info]);

  const fetchRandom = async () => {
    setIsLoading(true);
    await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals[0]);
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
      <Click onClick={() => fetchRandom()}>
        Random Recipe
        <i style={{ margin: " 0 10px" }} className="fas fa-random"></i>
      </Click>
      <Container>
        <Main>
          <Up>
            <h1>
              {info.strMeal} <FavouriteButton meals={info} />
            </h1>
          </Up>
          <Flex>
            <Right>
              <img src={info.strMealThumb} alt={info.strMeal} />
            </Right>
            <Box>
              <Bottom>
                <h3>Ingredients : </h3>
                {ingredients?.map((item, index) => (
                  <Items key={index}>
                    <strong> {item.ingredient}</strong> -
                    <em>{item.quantity}</em>
                  </Items>
                ))}
              </Bottom>
            </Box>
          </Flex>
          <Left>
            <Inst>
              <h3>Instructions :</h3>
              <p>{info.strInstructions}</p>
            </Inst>
            <Button>
              {info.strYoutube === "" ? null : (
                <Tooltip title="Youtube" position="bottom-end" animation="fade">
                  <Click>
                    {" "}
                    <a href={info.strYoutube} target="_blank" rel="noreferrer">
                      <i
                        style={{ fontSize: "2rem", color: "#d63031" }}
                        className="fab fa-youtube"
                      ></i>
                    </a>
                  </Click>
                </Tooltip>
              )}
            </Button>
          </Left>
        </Main>

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

export default Random;

const Container = styled.div`
  height: auto;
  margin: 0 auto;
  padding: 0 1.5rem 0 1.5rem;
  // margin-bottom: 3rem;

  @media (max-width: 414px) {
    padding: 0 1rem;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;

  @media (max-width: 414px) {
    padding: 0rem;
    flex-direction: column;
  }
`;

const Left = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin: 1.5rem 0;

  @media (max-width: 414px) {
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;

  @media (max-width: 414px) {
    padding: 0;
    margin-bottom: 1rem;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;

    @media (max-width: 414px) {
      flex-basis: 100%;
      width: 100%;
      height: 100%;
      // border-radius: 10px;
    }
  }
`;

const Bottom = styled.div`
  // flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-wrap: wrap;

  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Items = styled.div`
  height: auto;
  // width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  font-size: 0.8rem;
  margin: 0 0.15rem 0.5rem 0.15rem;
  // padding: 5px 10px;

  strong,
  em {
    margin: 0;
    padding: 5px 8px;
  }

  @media (max-width: 414px) {
    font-size: 0.8rem;
  }
`;

const Box = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  padding: 2rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.border};

  @media (max-width: 1024px) {
    // width: 420px;
    // height: 420px;
  }
  @media (max-width: 414px) {
    padding: 1rem;
    width: 100%;
    height: auto;
  }
`;

const Inst = styled.div`
  flex: 1;
  // height: auto;
  width: 75%;
  margin: 0 auto;
  text-align: left;
  font-weight: 300;
  // line-height: 1.75;
  padding: 2rem 1rem;
  border-radius: 10px;
  text-align: left;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.border};

  p {
    font-size: 1.2rem;
    @media (max-width: 414px) {
      font-size: 1rem;
    }
  }

  ul {
    font-size: 1.2rem;

    line-height: 1;
    margin: 0 0 1.8rem 0;
  }

  h3 {
    margin: 0 0 1.8rem 0;
    font-size: 1.2rem;
    font-weight: 500;
    @media (max-width: 414px) {
      margin: 0;
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem;
    width: 55rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 414px) {
    line-height: normal;
  }
`;

const Up = styled.div`
  max-width: 60rem;.
  line-height: 1.31;
  
  h1{
    font-size: 2.5rem;
    margin: 0;

    @media (max-width: 414px) {
    margin: 1rem;
    font-size: 1.5rem;

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
  font-size: 1rem;
  cursor: pointer;
  background: ${({ theme }) => theme.border};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  outline: none;
  font-weight: 600;
  padding: 5px 10px;
  margin: 10px 0;

  a {
    text-decoration: none;
    color: #333;
  }
`;

const Flex = styled.div`
  width: 65%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 414px) {
    width: 100%;

    gap: 0;
    padding: 0;
  }
`;
