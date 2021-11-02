import React from "react";

const Toggle = ({ theme, toggleTheme }) => {
  const icon =
    theme === "light" ? (
      <i className="fas fa-moon"></i>
    ) : (
      <i className="fas fa-sun"></i>
    );

  return <div onClick={toggleTheme}>{icon}</div>;
};

export default Toggle;
