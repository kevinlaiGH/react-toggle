import React, { Component } from "react";

import "./App.css";
import Toggle from "./ToggleRPC";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h1>I love banana</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
