import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Toggle from "../Toggle";

const Navigation = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo exact to="/">
        <span style={{ color: "#ff9f1a" }}> C</span>
        ook
        <span style={{ color: "#ff9f1a" }}> B</span>
        ook
      </Logo>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </Hamburger>

      <Menu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <MenuLink exact to="/">
          HOME
        </MenuLink>

        <MenuLink to="/categories">CATEGORIES</MenuLink>

        <MenuLink to="/favorites">FAVORITES</MenuLink>

        <MenuLink to="/randomMeal">RANDOM</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  flex-wrap: wrap;
  z-index: 10;
  background: linear-gradient(to right, #1e272e, #ecf0f1, #1e272e);
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

const Logo = styled(NavLink)`
  padding: 1rem 0;
  transition: all 0.3s ease-in;
  color: #7f8c8d;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;
