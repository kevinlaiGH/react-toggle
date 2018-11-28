import React, { Component } from "react";
import styled from "styled-components";
import Portal from "./Portal";

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModelWrapper>
            <button onClick={toggle}>close</button>
            <div>{children}</div>
          </ModelWrapper>
        )}
      </Portal>
    );
  }
}

const ModelWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: teal;
`;
