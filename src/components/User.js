import React from "react";
import { useHistory } from "react-router-dom";
import { UserList } from "../components/UserList";
import { Footer } from "../components/Footer";
// export class User extends React.Component {

//   onNavigateHome() {
//     useHistory().push("/home");
//   }

//   render() {
//     return (
//       <div className="container">
//         <h1>User Page</h1>
//         <button
//           onClick={this.onNavigateHome}
//           className="btn btn-primary"
//         >Back-Me-Home</button>
//       </div>
//     );
//   }
// }

export const User = (props) => {
  const history = useHistory();
  const onNavigateHome = () => {
    history.push("/home");
  };
  return (
    <div>
        <h1>Users</h1>
      <div>
        <UserList />
      </div>
      <div>
        <button onClick={onNavigateHome.bind()} className="btn btn-primary">
          Back-Me-Home
        </button>
      </div>
      <Footer />
    </div>
  );
};
