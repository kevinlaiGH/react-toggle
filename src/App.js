import React, { Component } from "react";

import "./App.css";
import Toggle from "./ToggleRenderProps";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle
          render={({ on, toggle }) => (
            <div>
              {on && <h1>I love banana</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </div>
          )}
        />
        <Toggle
          render={({ on, toggle }) => (
            <div>
              {on && <nav>nav item</nav>}
              <button onClick={toggle}>Show/Hide</button>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
