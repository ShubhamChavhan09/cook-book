import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Random from "../pages/Random";
import Favourites from "../pages/Favourites";
import MealDetail from "../pages/MealDetail";
import CategoriesItems from "../pages/CategoriesItems";
import NotFound from "../pages/404";
import { useFavourites } from "../hooks/useFavourites";
import styled from "styled-components";
import MealItems from "../components/MealItems.js";

const Routes = () => {
  const { getFavourites } = useFavourites();

  useEffect(() => {
    getFavourites();
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/categories/:id" exact component={CategoriesItems} />
        <Route path="/categories/:id/:id" exact component={MealDetail} />
        <Route path="/:id/:id" exact component={MealDetail} />
        <Route path="/favourites" exact component={Favourites} />
        <Route path="/randomMeal" exact component={Random} />
        <Route exact path="/:id" component={MealItems} />
        <Route component={NotFound} />
      </Switch>
    </Box>
  );
};

export default Routes;

const Box = styled.div`
  padding: 20px;
  text-align: center;
`;
