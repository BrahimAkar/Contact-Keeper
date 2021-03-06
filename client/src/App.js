import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/layout/NotFound";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alerts from "./components/layout/Alerts";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "../src/utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import AlreadyAuth from "./components/routing/AlreadyAuth";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment className="App">
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <AlreadyAuth exact path="/register" component={Register} />
                  <AlreadyAuth exact path="/login" component={Login} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
