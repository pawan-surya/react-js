import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const About = (props) => {
  return (
    <div>
      <Header /><br/><br/>
      <p>
      Today’s connected customer expects content, solutions, 
      and services that are fine-tuned to their specific needs.
       How can you effectively capitalise on this opportunity? 
       Find out in our new e-book.
      </p> <br/><br/>
      <h3>Keep Safe</h3>
      <br />
      <h4>Don't Go out if is not nessasary</h4>
      <Footer />
    </div>
  );
};
