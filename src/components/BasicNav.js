import React from "react";
import { UserConsumer } from "./UserContext";

const LogInNav = () => {
  return (
    <UserConsumer>
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
    </UserConsumer>
  );
};
const LogoutNav = () => {
  return (
    <UserConsumer>
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
    </UserConsumer>
  );
};

//Main Component

const BasicNav = () => {
  return (
    <UserConsumer>
      {({ isAuthenticated }) =>
        isAuthenticated ? <LogInNav /> : <LogoutNav />
      }
    </UserConsumer>
  );
  // if (isAuthenticated) {
  //   return <LogInNav logout={logout} />;
  // }
  // return <LogoutNav login={login} />;
};
export default BasicNav;
