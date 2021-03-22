import React from "react";
import ReactDOM from "react-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Root } from "./components/Root";
import {User} from "./component/User";
import { Route, Router } from "react-router";

class App extends React.Component {
  render() {
    return (
    <Router>
     <Route path={"user"} component={User} />
     <Route path={"home"} component={Home} />
    </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
