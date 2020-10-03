import React from "react";

const LogInNav = ({ logout, user }) => {
  return (
    <div>
      <p>
        Hello , {user.name}, You are logged in with {user.email}
      </p>
      <ul>
        <li>Dashboard</li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};
const LogoutNav = ({ login }) => {
  return (
    <div>
      <p>Please click the login button bellow</p>
      <ul>
        <li>
          <button onClick={login}>Login</button>
        </li>
        <li>Register</li>
      </ul>
    </div>
  );
};

//Main Component

const BasicNav = ({ login, logout, isAuthenticated, user }) => {
  if (isAuthenticated) {
    return <LogInNav logout={logout} user={user} />;
  }
  return <LogoutNav login={login} />;
};
export default BasicNav;
