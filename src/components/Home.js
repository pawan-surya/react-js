import React from "react";
import ReactDOM from "react-dom";


export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      homeLink: props.homeLink,
      status: 0,
    }
    setTimeout(() => {
      this.setState({status: 1})
    }, 3000);
  }

  onMakeOlder() {
    this.setState({
      age: (this.state.age += 3),
    });
  }

  UNSAFE_componentWillMount() {
    console.log("component will mount.")
  }
   
  UNSAFE_componentDidMount() {
    console.log("component did mount.")
  }

  UNSAFE_componentWillReciveProps(nextProps) {
    console.log("component will recive props",nextProps)
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("should component update",nextProps,nextState)
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps,nextState) {
    console.log("component will update",nextProps,nextState)

  }
  componentDidUpdate(prevProps,prevState) {
    console.log("component did update", prevProps, prevState)
  }


  onChangeName() {
    this.props.changeLink(this.state.homeLink)
  }

  onChangeHandler(event) {
    this.setState({homeLink: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <p>This is Home components.</p>
        <p> My name is {this.props.name} ,my age is {this.state.age}</p>
        <p> Staus: {this.state.status}</p>
         <div>
          <button onClick={() => this.onMakeOlder()} className="btn btn-primary">
           Make me older!
          </button>
          <hr/>
          <button onClick={this.props.greet} className="btn btn-primary" >Greet</button>
          <hr/>
          <input type="text" 
          value={this.state.homeLink} 
          onChange={(event) => {this.onChangeHandler(event)}}/>
          <button onClick={this.onChangeName.bind(this)} className="btn btn-primary">ChangeLink</button>     
        </div>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
Home.propTypes = {}

// Home.PropTypes = {
//   name: React.PropTypes.string,
//   initialAge: React.PropTypes.number,
//   greet: React.PropTypes.func
// }
