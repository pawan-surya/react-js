import React from "react";

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
    <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">User</a>
  </li>
</ul>
  );
};
