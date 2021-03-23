import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <h1>
          <span>Welcome to the Home!</span>
        </h1>
        <Footer />
      </div>
    );
  }
}
