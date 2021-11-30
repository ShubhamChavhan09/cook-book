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
          placeholder="Search for a dish..."
          type="text"
          value={search}
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
  width: 100%;
  margin: 2rem 0;
  @media (max-width: 414px) {
    margin: 1rem 0;
  }
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
  height: 3rem;
  padding: 0 4rem;
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 8px;
  letter-spacing: 2px;

  &:hover {
    box-shadow: 0 0 8px #c23616;
    outline: none;
    outline: 1px solid #c23616;
  }

  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
    padding: 0 4rem;
    height: 2.5rem;
  }
`;

const Icon = styled.i`
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 20px;
  color: #333;

  @media (max-width: 768px) {
    top: 14px;
    font-size: 15px;
  }
`;
