import React, { Component, Fragment } from "react";
import "./App.css";
import Toggle from "./ToggleRPC";
import Portal from "./Portal";
import Modal from "./Modal";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>still in Modal</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
        <Portal>hi, I am a portal</Portal>
      </div>
    );
  }
}

export default App;
