import React from "react";
import ReactDOM from "react-dom";
import { Root } from "../components/Root";
import { Home } from "../components/Home";
import { User } from "../components/User";
import {ActiveUser} from "../components/ActiveUser";
import {PendingUser} from "../components/PendingUser";
import { BrowserRouter as Router,Route } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ width: 1000, margin: "0 auto" }}>
          <Route exact path="/" component={Root}></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/user"><User /></Route>
          <Route path="/active_users"><ActiveUser/></Route>
          <Route path="/pending_users"><PendingUser/></Route>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
