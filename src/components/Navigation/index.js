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
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h1 {
    margin-right: auto;
  }

  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    list-style-type: none;
    position: relative;
    margin-right: 20px;
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
`;

const ListItem = styled(NavLink)`
  text-decoration: none;
  color: #ff9f1a;

  
  &.active {
    color: #e84118;
    border-bottom: 1px solid currentColor;
    
`;
