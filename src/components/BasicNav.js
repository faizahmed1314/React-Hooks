import React from "react";
import Context from "./UserContext";

const LogInNav = () => {
  return (
    <Context.Consumer>
      {({ user, logout }) => (
        <div>
          <p>
            Hello , {user.name}, You are logged in with {user.email}
          </p>
          <ul>
            <li>Dashboard</li>
            <li onClick={logout}>Logout</li>
          </ul>
        </div>
      )}
    </Context.Consumer>
  );
};
const LogoutNav = () => {
  return (
    <Context.Consumer>
      {({ login }) => (
        <div>
          <p>Please click the login button bellow</p>
          <ul>
            <li>
              <button onClick={login}>Login</button>
            </li>
            <li>Register</li>
          </ul>
        </div>
      )}
    </Context.Consumer>
  );
};

//Main Component

const BasicNav = () => {
  return (
    <Context.Consumer>
      {({ isAuthenticated }) =>
        isAuthenticated ? <LogInNav /> : <LogoutNav />
      }
    </Context.Consumer>
  );
  // if (isAuthenticated) {
  //   return <LogInNav logout={logout} />;
  // }
  // return <LogoutNav login={login} />;
};
export default BasicNav;
