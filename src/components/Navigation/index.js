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
              <ListItem exact to="/">
                Home
              </ListItem>
            </li>
            <li>
              <ListItem exact to="/categories">
                Categories
              </ListItem>
            </li>
            <li>
              <ListItem exact to="/favourites">
                Favourites
              </ListItem>
            </li>
            <li>
              <ListItem exact to="/randomMeal">
                Random
              </ListItem>
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
        <h1>Cook Book</h1>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Left>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const MenuLink = styled(NavLink)`
  margin: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  // color: #e15f41;
  color: ${({ theme }) => theme.nav};
  font-size: 0.92rem;

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
    border-bottom: 1px solid;
  }
`;

const Left = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ruthie", cursive;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    // color: #ff7675;
    color: ${({ theme }) => theme.nav};
    border-bottom: 4px double;

    @media (max-width: 414px) {
      font-size: 1.9rem;
    }
  }
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
    text-align: left;
  }
  li {
    list-style-type: none;
    font-size: 1.1rem;
    margin: 40px 0;
    text-align: center;

    .active {
      border-bottom: 1px solid;
    }

    @media (max-width: 414px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;
