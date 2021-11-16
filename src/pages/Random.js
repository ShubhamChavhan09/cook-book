import React, { useState, useEffect } from "react";
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
      <Click onClick={() => fetchRandom()}>
        Random Recipe
        <i style={{ margin: " 0 10px" }} className="fas fa-random"></i>
      </Click>
      <Container>
        <Left>
          <img src={info.strMealThumb} alt={info.strMeal} />
        </Left>
        <Wrapper>
          <h1>
            {info.strMeal} <FavouriteButton meals={info} />
          </h1>
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
            <h3>INGREDIENTS : {ingredients.length}</h3>
            {ingredients?.map((item, index) => (
              <Items key={index}>
                <strong>{item.ingredient} </strong> - <em> {item.quantity}</em>
              </Items>
            ))}
          </section>
        </FlexRow>
        {/* <div>
        <Left>
          <img src={info.strMealThumb} alt={info.strMeal} />
        </Left>
        <Right>
          <h1>{info.strMeal}</h1>
          <FavouriteButton meals={info} />
          <Wrapper>
            {ingredients?.map((item, index) => (
              <Items key={index}>
                <strong>{item.ingredient} </strong> - <em> {item.quantity}</em>
              </Items>
            ))}
          </Wrapper>
        </Right>
      </div>
      <p>{info.strInstructions}</p>
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
            Watch video on Youtube
          </a>
        </Click>
      )} */}
      </Container>
    </>
  );
};

export default Random;

// const Container = styled.div`
// display flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// font-size: 15px;
// max-width: 80%;
// margin: 0 auto;
// padding : 40px 0;
// @media (max-width: 800px) {
//   max-width: 90%;
// }

// img{
//   width:400px;
//   border-radius: 10px;

//   @media (max-width: 800px) {
//     width: 95%
//   }
// }
// p{
//   margin: 30px 0;

//   @media (max-width: 800px) {
//     font-size: 15px;
//   }
// }

// &> div {
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 800px) {
//     flex-direction: column;
//   }

// }
// `;

// const Items = styled.div`
//   display: flex;
//   border: 1px solid #ff9f1a;
//   border-radius: 10px;
//   padding: 3px 10px;
//   margin: 5px;
//   letter-spacing: 1px;
//   font-size: 14px;

//   @media (max-width: 800px) {
//     font-size: 12px;
//   }
// `;

// const Click = styled.button`
//   background: #ff9f1a;
//   min-height: 30px;
//   min-width: 100px;
//   font-size: 0.85rem;
//   cursor: pointer;
//   border: none;
//   outline: none;
//   font-weight: 600;
//   border-radius: 8px;
//   padding: 5px 10px;
//   margin: 10px 0;

//   a {
//     text-decoration: none;
//     color: #333;
//   }

//   &: hover {
//     transform: scale(0.99);
//   }
// `;

// const Wrapper = styled.div`
//   max-width: 800px;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Left = styled.div``;

// const Right = styled.div`
//   padding: 0 20px;

//   @media (max-width: 800px) {
//     padding: 0;
//   }
// `;

const Container = styled.div`
  padding: 40px 0;
  min-height: 90vh;
  display: grid;
  font-size: 13px;
  grid-template-columns: 2fr 3fr 1fr;

  h1 {
    font-size: 4rem;
    letter-spacing: 1px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    font-size: 11px;
  }

  img {
    width: 80%;
    box-shadow: 0 0 10px 5px;

    @media (max-width: 800px) {
      width: 100%;
    }
  }
  p {
    margin: 30px 0;
    @media (max-width: 800px) {
      font-size: 12px;
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
    font-size: 12px;
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

  h1 {
    margin: 0;
    font-weight: 530;
  }
  p {
    font-style: italic;
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
  justify-content: center;
  align-items: center;
  padding: 20px;

  h1 {
    margin: 0;
  }
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
