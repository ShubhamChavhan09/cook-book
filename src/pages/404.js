import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Grid>
      <h3>404 error: Page not found</h3>
      <p>We are sorry but the page you are looking for does not exist.</p>
    </Grid>
  );
};

export default NotFound;

const Grid = styled.div`
  display: grid;
  place-items: center;
  padding: 80px 0 80px 0;
  text-align: center;
`;
