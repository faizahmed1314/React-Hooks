import React from "react";

import "./App.css";
import MyHooks from "./MyHooks";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <h1 className="mt-3">React Hooks - Crash Course</h1>
          <hr />
          <MyHooks />
        </div>
      </div>
    </div>
  );
}

export default App;
