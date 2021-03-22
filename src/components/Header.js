import React from "react";


//  with state component  with class and using state
// export class Header extends React.Component {
//   render() {
//     return (
//         <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">Header</a>
//       </nav>
//     );
//   }
// }


// This is  stetelesss componenet  only with funtion

export const Header = (props) => {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar navbar-header"> 
           <ul className="nav navbar-nav">
             <li><a href="#">{props.homeLink}</a></li>
           </ul>
          </div>
        </div>
      </nav>
    )
};

