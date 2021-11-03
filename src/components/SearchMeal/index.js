import React from "react";
import styled from "styled-components";

const SearchMeal = ({ handleChange, handleSubmit, search }) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          value={search}
          placeholder="Search for food receipe..."
          type="text"
          onChange={handleChange}
        />
        <Icon className="fas fa-search"></Icon>
        <Click>Search</Click>
      </Form>
    </Container>
  );
};

export default SearchMeal;

const Container = styled.div`
  text-align: center;
`;
const Form = styled.form`
  width: 450px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 800px) {
    width: 300px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 40px;
  outline: none;
  font-size: 1rem;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 0 5px #ff9f1a;
    outline: none;
    border: 1px solid #ff9f1a;
  }

  &:focus {
    box-shadow: 0 0 15px #ff9f1a;
    outline: none;
    border: 1px solid #ff9f1a;
  }
  @media (max-width: 800px) {
    width: 100%;
    font-size: 14px;
    padding: 0 30px;
  }
`;

const Icon = styled.i`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  color: #333;

  @media (max-width: 800px) {
    top: 13px;
    font-size: 15px;
  }
`;

const Click = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 30px;
  width: 100px;
  font-size: 0.85rem;
  cursor: pointer;
  background: #ff9f1a;
  border: none;
  outline: none;
  color: #333;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 8px;

  @media (max-width: 800px) {
    font-size: 0.75rem;
    width: 80px;
  }
`;
