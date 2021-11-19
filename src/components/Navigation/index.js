import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Toggle from "../Toggle";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Navigation = ({ theme, toggleTheme }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Nav>
      <SideBar>
        <div>
          <FaBars onClick={showSidebar} />
        </div>

        {/* styling in GlobalStyle */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showSidebar}>
            <AiOutlineClose
              style={{ position: "absolute", top: "20px", right: "20px" }}
            />

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
              <ListItem to="/random">Random</ListItem>
            </li>
          </ul>
        </nav>
      </SideBar>

      <Right>
        <MenuLink exact to="/">
          HOME
        </MenuLink>

        <MenuLink to="/categories">CATEGORIES</MenuLink>

        <MenuLink to="/favorites">FAVORITES</MenuLink>

        <MenuLink to="/randomMeal">RANDOM</MenuLink>
      </Right>
      <Left>
        Cook Book
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Left>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #1e272e, #ecf0f1);
`;

const MenuLink = styled(NavLink)`
  margin: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  position: relative;
  text-shadow: 3px 3px 20px #ecf0f1, -2px 1px 30px #ffffff;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: currentColor;
    height: 2px;
    transform: scale(0);
    transform-origin: left;
    transition: transform 0.5s ease-in;
  }
  &:hover::after {
    transform: scale(1);
    transform-origin: left;
  }
  &.active {
    font-weight: bold;
  }
`;

const Left = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

const ListItem = styled(NavLink)`
  margin: 0 40px;
  text-decoration: none;
  color: currentColor;
`;

const SideBar = styled.div`
  z-index: 1;
  display: none;
  li {
    list-style-type: none;
    font-size: 2rem;
    margin: 50px 0;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;
