import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const SearchMeal = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${search}`);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search for a dish"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Icon className="fas fa-search"></Icon>
      </Form>
    </Container>
  );
};

export default SearchMeal;

const Container = styled.div`
  text-align: center;
`;
const Form = styled.form`
  width: 55%;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768) {
    width: 80%;
  }

  @media (max-width: 414px) {
    width: 90%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 4rem;
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
    font-size: 1rem;
    padding: 0 4rem;
  }
`;

const Icon = styled.i`
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 20px;
  color: #333;

  @media (max-width: 800px) {
    top: 18px;
    font-size: 15px;
  }
`;
