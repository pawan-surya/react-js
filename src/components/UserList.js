import React from "react";
import {Link} from "react-router-dom";

export const UserList = (props) => {
  return (
    <div className="user-list">
      <ul>
        <li>
          <span>
            <Link to="active_users">Active User</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="pending_users">Pending User</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="deactive_users">Deactive User</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="block_users">Block User</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="suspended_users">Suspended User</Link>
          </span>
        </li>
      </ul>
    </div>
  );
};
