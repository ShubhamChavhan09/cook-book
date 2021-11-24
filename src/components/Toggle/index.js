import React from "react";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  const icon =
    theme === "light" ? (
      <p>
        <i className="fas fa-moon"></i>
      </p>
    ) : (
      <p>
        <i className="fas fa-sun"></i>
      </p>
    );

  return <Button onClick={toggleTheme}>{icon}</Button>;
};

export default Toggle;

const Button = styled.div`
  margin-left: 30px;
  padding: 0px 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.border};
  font-size: 0.8rem;

  @media (max-width: 414px) {
    font-size: 0.75rem;
  }
`;
