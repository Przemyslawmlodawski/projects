import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
const Home = () => {
  return <h1>Home Page</h1>;
};

const News = () => {
  return <h1>Akutalnosci</h1>;
};
const Contact = () => {
  return <h1>Daj nam znac !</h1>;
};
const ErrorPage = () => {
  return <h1>Strona nie istnieje</h1>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    exact={true}
                    activeClassName="home_selected"
                    activeStyle={{
                      backgroundColor: "gray",
                      letterSpacing: "2px",
                    }}>
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" activeClassName="news">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="contact">
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/" exact={true} component={Home} />
              <Route path="/news" component={News} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
