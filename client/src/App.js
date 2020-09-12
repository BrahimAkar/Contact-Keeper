import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/layout/NotFound";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/authState";
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
