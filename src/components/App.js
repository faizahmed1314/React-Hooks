import React, { Component } from "react";
import BasicNav from "./BasicNav";
import "./App.css";
import MyHooks from "./MyHooks";
import Showcase from "./Showcase";
import { UserProvider, UserConsumer } from "./UserContext";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="container">
          <div className="row">
            <UserConsumer>
              {({ isAuthenticated }) => (
                <div className="col-sm-6 offset-sm-2">
                  <h1>Context API Crash Course</h1>
                  <hr />
                  <BasicNav />
                  {isAuthenticated && <Showcase />}
                </div>
              )}
            </UserConsumer>
          </div>
        </div>
      </UserProvider>
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
