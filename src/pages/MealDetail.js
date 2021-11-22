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
      <Container>
        <Left>
          <img src={info.strMealThumb} alt={info.strMeal} />
        </Left>

        <Wrapper>
          <Up>
            <h3>
              {info.strMeal} <FavouriteButton meals={info} />
            </h3>
            <p>{info.strInstructions}</p>
          </Up>
          <FlexRow>
            {/* <section> */}
            <h4>INGREDIENTS : {ingredients.length}</h4>
            {ingredients?.map((item, index) => (
              <Items key={index}>
                <strong>{item.ingredient} </strong> -<em> {item.quantity}</em>
              </Items>
            ))}
            {/* </section> */}
          </FlexRow>
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
      </Container>
    </>
  );
};

export default MealDetail;

const Container = styled.div`
  padding: 20px 0;
  min-height: 80vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  
  position: relative;
 

  h3 {
    // font-size: 2.2rem;
    // letter-spacing: 1px;

  }
  }
`;

const Wrapper = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  z-index: 1;
  background: ${({ theme }) => theme.body};
  width: 60%;
  min-height: 80vh;
  padding: 0 2rem;
  h3 {
    margin: 0;
  }
  p {
    font-style: italic;
    color: #636e72;
    margin: 30px 0;
    font-size: 0.9rem;
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
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    // box-shadow: 0 0 10px 5px;
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Items = styled.div`
  display: flex;
  border: 1px solid #ff9f1a;
  border-radius: 10px;
  padding: 3px 10px;
  margin: 5px;
  letter-spacing: 1px;
  font-size: 11px;
`;
const FlexRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  h4 {
    margin: 0;
  }
`;

const Up = styled.div``;
