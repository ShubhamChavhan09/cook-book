import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Toggle from "../Toggle";

const Navigation = ({ theme, toggleTheme }) => {
  return (
    <Nav>
      <h1>
        <span style={{ color: "#ff9f1a" }}> M</span>
        eal
        <span style={{ color: "#ff9f1a" }}> S</span>
        earch
      </h1>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <ul>
        <li>
          <ListItem exact to="/">
            Home
          </ListItem>
        </li>
        <li>
          <ListItem to="/categories">Categories</ListItem>
        </li>
        <li>
          <ListItem to="/favorites">Favorites</ListItem>
        </li>
        <li>
          <ListItem to="/randomMeal">Random</ListItem>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h1 {
    margin-right: auto;
  }

  ul {
    display: flex;
    list-style-type: none;

    @media (max-width: 500px) {
      padding: 0;
    }
  }
  li {
    list-style-type: none;
    position: relative;
    margin-right: 10px;
    margin-left: 10px;
    @media (max-width: 500px) {
      text-align: center;
    }
  }
  li::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: currentColor;
    height: 1px;
    transform: scale(0);
    transform-origin: right;
    transition: transform 0.5s ease-in;
  }
  li:hover::after {
    transform: scale(1);
    transform-origin: left;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    & > h1 {
      margin: 15px auto;
    }
  }
`;

const ListItem = styled(NavLink)`
  text-decoration: none;
  color: #ff9f1a;

  &.active {
    color: #e84118;
    border-bottom: 1px solid currentColor;
  }
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;
