import React, { useState } from "react";
import styled from "styled-components";
import SearchMeal from "../components/SearchMeal";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Div>
      <SideBar>
        <div>
          <FaBars style={{ color: "currentColor" }} onClick={showSidebar} />
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showSidebar}>
            <AiOutlineClose />
            <li>
              <ListItem to="/">Home</ListItem>
            </li>
            <li>
              <ListItem to="/categories">Categories</ListItem>
            </li>
            <li>
              <ListItem to="/favourites">Favourites</ListItem>
            </li>
            <li>
              <ListItem to="/randomMeal">Random</ListItem>
            </li>
          </ul>
        </nav>
      </SideBar>

      <Flex>
        <h2 style={{ fontSize: "3rem", fontWeight: "400" }}>
          Discover the best food recipe.
        </h2>
        <SearchMeal />
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            // fill="rgba(214, 48, 49,1.0)"
            fill="#610C04"
            fillOpacity="1"
            d="M0,128L120,154.7C240,181,480,235,720,261.3C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg> */}

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="CurrentColor"
            fillOpacity="1"
            d="M0,64L120,96C240,128,480,192,720,186.7C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </Flex>
    </Div>
  );
};

export default Home;

const Div = styled.div``;

const Flex = styled.div`
  background-image: url('https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80') ;
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,0.7);
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

h2{
  margin-top: 150px;
color: #ffffff;

@media (max-width: 414px){
  margin-top: 100px;
}

}

svg{
  position: absolute;
  bottom: -110px;
  @media (max-width: 414px){
    bottom: 0;
  }
}

  `;

//

const SideBar = styled.div`
  z-index: 1;
  display: none;
  width: 250px;
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    font-size: 1.1rem;
    margin: 40px 0;
  }

  // @media (max-width: 800px) {
  //   display: flex;
  // }
`;

const ListItem = styled(NavLink)`
  margin: 0 40px;
  text-decoration: none;
  color: currentColor;
`;
