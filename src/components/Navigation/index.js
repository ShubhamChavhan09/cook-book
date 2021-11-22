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
          <FaBars style={{ color: "#888" }} onClick={showSidebar} />
        </div>

        {/* styling in GlobalStyle */}
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

      <Right>
        <MenuLink exact to="/">
          HOME
        </MenuLink>

        <MenuLink to="/categories">CATEGORIES</MenuLink>

        <MenuLink to="/favourites">FAVOURITES</MenuLink>

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
  // background: linear-gradient(to right, #1e272e, #ecf0f1);
`;

const MenuLink = styled(NavLink)`
  margin: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  // color: #e15f41;
  color: #55efc4;
  font-size: 0.9rem;
  position: relative;
  // text-shadow: 3px 3px 20px #ecf0f1, -2px 1px 30px #ffffff;

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
  ul {
    width: 100%;
    padding: 0;
  }
  li {
    list-style-type: none;
    font-size: 1.1rem;
    margin: 40px 0;
    text-align: center;

    @media (max-width: 414px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;
