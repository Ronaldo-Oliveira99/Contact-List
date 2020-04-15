import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ListContacts from "../pages/ListContacts/index";
import CreateContacts from "../pages/Create/index";
import NotFound from "../pages/NotFound/index";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ListContacts}></Route>
      <Route exact path="/create" component={CreateContacts}></Route>
      <Route exact path="/:contato_id/edit" component={CreateContacts}></Route>
      <Route exact path="/404" component={NotFound}></Route>
      <Route exact path="*" component={() => <Redirect to="/404" />}></Route>
    </Switch>
  </Router>
);

export default Routes;
//
