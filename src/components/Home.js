import React from "react";
import ReactDOM from "react-dom";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.age,
      status: 0,
    };
    this.age = props.age;
  }
  onMakeOlder() {
    this.setState({
      age: (this.state.age += 3),
    });
  }

  render() {
    return (
      <div className="container">
        <p>This is Home components.</p>
        <p>
          My name is {this.props.name} ,my age is {this.age}{" "}
        </p>
        <p>Staus: {this.state.status}</p>

        <div>
          <button
            onClick={() => this.onMakeOlder()}
            className="btn btn-primary"
          >
            Make me older!
          </button>
          {/* <h4>And My Hobbies</h4>
                  <ul>
                      {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                  </ul> */}
        </div>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
