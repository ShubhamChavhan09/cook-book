import React from "react";
import styled from "styled-components";
import SearchMeal from "../components/SearchMeal";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <Div>
      <Git
        href="https://github.com/ShubhamChavhan09/meal-recipes-react"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </Git>
      <Flex>
        <h2>
          Discover the best food{" "}
          <span
            style={{
              color: "#c23616",
              textShadow: "1px 1px black",
            }}
          >
            recipe
          </span>
          .
        </h2>

        <SearchMeal />

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fillOpacity="1"
            d="M0,64L120,96C240,128,480,192,720,186.7C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg> */}

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(200, 214, 229,0.75)"
            fillOpacity="1"
            d="M0,96L120,122.7C240,149,480,203,720,234.7C960,267,1200,277,1320,282.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <div></div>
      </Flex>
    </Div>
  );
};

export default Home;

const Div = styled.div``;

const Flex = styled.div`
  // background-image: url('https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80') ;
  // background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80') ;
  // background-image: url('https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80') ;
  background-image: url('https://images.unsplash.com/photo-1592417817038-d13fd7342605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80') ;
  // background-image: url('https://images.unsplash.com/photo-1605522469906-3fe226b356bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80') ;
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,0.5);
  background-size: cover; 
  background-blend-mode: multiply;
  background-position: center;
  inset: 0;
  position: absolute;
  z-index: -1;
  display: flex;
  justify-content: center:
  align-items: center;
  flex-direction: column;
  height: 100vh;
   overflow: hidden;
   padding: 1rem;


   


h2{
 
  margin-top: 10rem;
 color: #ffffff;
 font-size: 3rem;
font-weight: 400;

@media (max-width: 414px){
  margin-top: 12rem;
  font-size: 2rem;
}

}

svg{
  position: absolute;
  bottom: -60px;
  right:0;
  
  @media (max-width: 414px){
    bottom: 0;
  }
}



`;

const Git = styled.a`
  font-size: 2.2rem;
  position: fixed;
  color: #0d0d0d;
  left: 2rem;
  bottom: 1rem;

  @media (max-width: 800px) {
    font-size: 1.5rem;
    left: 0.9rem;
    bottom: 0.3rem;
  }
`;
