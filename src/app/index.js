import React from "react";
import ReactDOM from "react-dom";
import { Root } from "../components/Root";
import { Home } from "../components/Home";
import { User } from "../components/User";
import { BrowserRouter as Router,Route,Link,IndexRoute } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ width: 1000, margin: "0 auto" }}>
  
          <Route exact path="/" component={Root}></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/user"><User /></Route>
          <Route path="/todo-list"><Home/></Route>

          <hr />
          <ul>
            <li>
              <span>
                <Link to="home">Active User</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="#">Pending User</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="#">Deactive User</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="#">Block User</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="#">Suspended User</Link>
              </span>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
