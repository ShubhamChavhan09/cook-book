import React from "react";
import styled from "styled-components";

const Button = ({ text, onSubmit, onClick }) => {
  return (
    <div>
      <Click onSubmit={onSubmit} onClick={onClick}>
        {text}
      </Click>
    </div>
  );
};

export default Button;

// const Click = styled.button`
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   min-height: 30px;
//   min-width: 100px;
//   font-size: 0.85rem;
//   cursor: pointer;
//   background: #ff9f1a;
//   border: none;
//   outline: none;
//   color: #f9f9f9;
//   letter-spacing: 2px;
//   font-weight: 600;
//   border-radius: 8px;
// `;

const Click = styled.button`
  min-height: 30px;
  min-width: 100px;
  font-size: 0.85rem;
  cursor: pointer;
  background: #ff9f1a;
  border: none;
  outline: none;
  color: #f9f9f9;
  letter-spacing: 2px;
  font-weight: 600;
  border-radius: 8px;
  padding: 5px 10px;
`;
