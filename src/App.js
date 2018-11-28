import React, { Component, Fragment } from "react";
import "./App.css";
import Toggle from "./ToggleRPC";
import Portal from "./Portal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              {on && <h1>I love banana</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </Fragment>
          )}
        </Toggle>
        <Portal>hi, I am a portal</Portal>
      </div>
    );
  }
}

export default App;
