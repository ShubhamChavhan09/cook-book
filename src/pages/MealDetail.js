import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FavouriteButton from "../components/FavouriteButton";

const MealDetail = ({ match }) => {
  const [info, setInfo] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchInfo();
    // eslint-disable-next-line
  }, [setInfo]);

  useEffect(() => {
    createIngredientsArray(info);
  }, [info]);

  const fetchInfo = async () => {
    setIsLoading(true);
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
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
    console.log(ingredientsData);
    setIngredients(ingredientsData);
  }

  return (
    <>
      <Container>
        <Left>
          <img src={info.strMealThumb} alt={info.strMeal} />
        </Left>
        <Wrapper>
          <h3>
            {info.strMeal} <FavouriteButton meals={info} />
          </h3>
          <p>{info.strInstructions}</p>
          <Button>
            {info.strSource === "" ? null : (
              <Click>
                <a href={info.strSource} target="_blank" rel="noreferrer">
                  Source Page
                </a>
              </Click>
            )}
            {info.strYoutube === "" ? null : (
              <Click>
                <a href={info.strYoutube} target="_blank" rel="noreferrer">
                  Watch on
                  <i
                    style={{ fontSize: "1rem", color: "#d63031" }}
                    className="fab fa-youtube"
                  ></i>
                </a>
              </Click>
            )}
          </Button>
        </Wrapper>

        <FlexRow>
          <section>
            <h4>INGREDIENTS : {ingredients.length}</h4>
            {ingredients?.map((item, index) => (
              <Items key={index}>
                <strong>{item.ingredient} </strong> - <em> {item.quantity}</em>
              </Items>
            ))}
          </section>
        </FlexRow>
      </Container>
    </>
  );
};

export default MealDetail;

const Container = styled.div`
  padding: 40px 0;
  min-height: 90vh;
  display: grid;
  font-size: 13px;
  grid-template-columns: 2fr 3fr 1fr;

  h3 {
    font-size: 2.2rem;
    letter-spacing: 1px;

    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  
  }

  img {
    width: 80%;
    box-shadow: 0 0 10px 5px;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
  
  }
`;

const Items = styled.div`
  display: flex;
  border: 1px solid #ff9f1a;
  border-radius: 10px;
  padding: 3px 10px;
  margin: 5px;
  letter-spacing: 1px;
  font-size: 11px;

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    padding: 0;
  }

  h2 {
    margin: 0;
    font-weight: 530;
  }
  p {
    font-style: italic;
    color: #636e72;
    margin: 30px 0;
    font-size: 0.9rem;

    @media (max-width: 500px) {
      font-size: 11px;
      margin: 10px 0;
    }

`;
const Click = styled.button`
  min-height: 30px;
  min-width: 100px;
  font-size: 0.85rem;
  cursor: pointer;
  background: #ff9f1a;
  border: none;
  outline: none;
  font-weight: 600;
  border-radius: 8px;
  padding: 5px 10px;
  margin: 10px 0;

  a {
    text-decoration: none;
    color: #333;
  }
`;

const Left = styled.div`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
