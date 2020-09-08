import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MiniDrawer from "./shared/component/navigation";
import HomePage from "./shared/pages/HomePage";
import Interface_01 from "./example_01/pages/Interface_01";
import Interface_02 from "./example_01/pages/Interface_02";
import regeneratorRuntime from "regenerator-runtime";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          http-equiv="Content-Security-Policy"
          content="script-src 'self';"
        />
      </Helmet>
      <Router>
        <div>
          <MiniDrawer>
            <Switch>
              <Route path="/" exact>
                <HomePage></HomePage>
              </Route>
              <Route path="/interface-01" exact>
                <Interface_01></Interface_01>
              </Route>
              <Route path="/interface-02" exact>
                <Interface_02></Interface_02>
              </Route>
              <Redirect to="/"></Redirect>
            </Switch>
          </MiniDrawer>
        </div>
      </Router>
    </React.Fragment>
  );
}
