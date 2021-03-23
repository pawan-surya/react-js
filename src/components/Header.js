import React from "react";
import { Link } from "react-router-dom";

//  with state component  with class and using state
// export class Header extends React.Component {
//   render() {
//     return (
//       <ul className="nav">
//         <li className="nav-item">
//           <a className="nav-link active" href="#">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             User
//           </a>
//         </li>
//       </ul>
//     );
//   }
// }

// This is  stetelesss componenet  only with funtion

export const Header = (props) => {
  return (
<div className="header">
  <a href="#default" className="logo">Logo</a>
  <div className="header-right">
    <Link className="active" to="home">Home</Link>
    <Link style={{color: "red"}} to={"user"}>User</Link>
    <Link to="contact">Contact</Link>
    <Link to="about">About</Link>
  </div>
</div>
  );
};
