import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Random from "../pages/Random";
import Favorites from "../pages/Favorites";
import MealDetail from "../pages/MealDetail";
import CategoriesItems from "../pages/CategoriesItems";
import NotFound from "../pages/404";
import { useFavourites } from "../hooks/useFavourites";

const Routes = () => {
  const { getFavourites } = useFavourites();

  useEffect(() => {
    getFavourites();
    // eslint-disable-next-line
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={Categories} />
      <Route path="/categories/:id" exact component={CategoriesItems} />
      <Route path="/categories/:id/:id" exact component={MealDetail} />
      <Route path="/favorites" exact component={Favorites} />
      <Route path="/randomMeal" exact component={Random} />
      <Route exact path="/:id" component={MealDetail} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
