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
          <h1>{info.strMeal}</h1>
          <FavouriteButton meals={info} />
          <section>
            <h3>Ingredients :</h3>
            {ingredients?.map((item, index) => (
              <Items key={index}>
                <strong>{item.ingredient} </strong> - <em> {item.quantity}</em>
              </Items>
            ))}
          </section>
          <p>{info.strInstructions}</p>
        </Wrapper>
      </Container>
      <FlexRow>
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
                style={{ fontSize: "1rem", color: "red" }}
                className="fab fa-youtube"
              ></i>
            </a>
          </Click>
        )}
      </FlexRow>
    </>
  );
};

export default MealDetail;

const Container = styled.div`
padding : 40px 0;
display flex;
min-height: 90vh;
justify-content: center;
align-items: center;
font-size: 13px;

h1{
  font-size: 4rem;
  letter-spacing: 1px;
}

@media (max-width: 800px) {
  max-width: 90%
}

img{
  width:80%;
  box-shadow: 0 0 10px 10px;
  aspect-ratio: 1 / 1;

  @media (max-width: 800px) {
    width: 95%
  }
}
p{
  margin: 30px 0;
  line-height:normal;

  @media (max-width: 800px) {
    font-size: 15px;
  }
}

`;

const Items = styled.div`
  display: flex;
  border: 2px solid #ff9f1a;
  border-radius: 10px;
  padding: 3px 10px;
  margin: 5px;
  letter-spacing: 1px;
  font-size: 11px;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  flex: 1.6;
  align-self: center;
  padding-right: 40px;

  @media (max-width: 800px) {
    padding: 0;
  }

  section {
    padding: 12px;
    border: 1px solid black;
    outline: 1px solid black;
    outline-offset: 2px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    h3 {
      margin: 0;
    }
  }
  h1 {
    margin: 0;
    text-align: left;
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
  min-height: 60vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  h1 {
    margin: 0;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
