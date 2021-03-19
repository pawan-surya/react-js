import React from "react";
import ReactDOM from "react-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";

class App extends React.Component {
  render() {
    //   Using component another page by props
    var user = {
        hobbies: ["playing-cricket","palying-football","running-in-the-morning","reading","coocking","learing-new-tecnologies"]
    }
    return (
      <div className="container">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"pawan"} age={25} user={user} >
             <p>This is pragraph</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
