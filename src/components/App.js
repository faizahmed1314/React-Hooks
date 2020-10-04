import React, { Component } from "react";
import BasicNav from "./BasicNav";
import "./App.css";
import MyHooks from "./MyHooks";
import Showcase from "./Showcase";
import Context from "./UserContext";

class App extends Component {
  state = {
    user: {
      name: "faiz",
      email: "Faiz@gmail.com",
      language: ["C#", "Jave", "Javascript", "Dart", "kotlin"],
    },
    isAuthenticated: true,
  };
  login = () => {
    this.setState({ isAuthenticated: true });
  };
  logout = () => {
    this.setState({ isAuthenticated: false });
  };
  addToShowCase = (item) => {
    const user = { ...this.state.user };
    user.language.push(item);
    this.setState({ user });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          addToShowCase: this.addToShowCase,
          login: this.login,
          logout: this.logout,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-2">
              <h1>Context API Crash Course</h1>
              <hr />
              <BasicNav />
              {this.state.isAuthenticated && <Showcase />}
            </div>
          </div>
        </div>
      </Context.Provider>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <div className="row">
//         <div className="col-sm-6 offset-sm-3">
//           <h1 className="mt-3">React Hooks - Crash Course</h1>
//           <hr />
//           <MyHooks />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
