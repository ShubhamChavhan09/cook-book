import React from "react";
import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Random from "../pages/Random";
import Favorites from "../pages/Favorites";
import MealDetail from "../pages/MealDetail";
import CategoriesItems from "../pages/CategoriesItems";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={Categories} />
      <Route path="/categories/:id" exact component={CategoriesItems} />
      <Route path="/categories/:id/:id" exact component={MealDetail} />
      <Route path="/favorites" exact component={Favorites} />
      <Route path="/randomMeal" exact component={Random} />
      <Route exact path="/:id" component={MealDetail} />
    </Switch>
  );
};

export default Routes;
