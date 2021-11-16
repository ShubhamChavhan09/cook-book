import React from "react";

const Toggle = ({ theme, toggleTheme }) => {
  const icon =
    theme === "light" ? (
      <p>
        DARK
        <i className="fas fa-moon"></i>
      </p>
    ) : (
      <p>
        LIGHT
        <i className="fas fa-sun"></i>
      </p>
    );

  return <div onClick={toggleTheme}>{icon}</div>;
};

export default Toggle;
