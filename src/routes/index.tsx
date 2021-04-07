import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detalhes from '../pages/detalhes';
import Home from '../pages';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detalhes" component={Detalhes} />
    </Switch>
  </BrowserRouter>
);

export default Router;
