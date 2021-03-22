import React from "react";
import ReactDOM from "react-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      homeLink: "Home"
    }
  }

  
  onChangeLinkName(newName) {
   this.setState({homeLink: newName})
  }

  onGreet() {
   alert('from child to parent component cummunication.')
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header homeLink={this.state.homeLink}/>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home 
            name={"pawan"}
            initialAge={25}
            greet={this.onGreet}
            changeLink={this.onChangeLinkName.bind(this)}
            homeLink={this.state.homeLink}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
