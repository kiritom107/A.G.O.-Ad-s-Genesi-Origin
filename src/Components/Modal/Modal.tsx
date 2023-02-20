import "./modal.css";

// const Modal = ({ handleClose, show, children }) => {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";

//   return (
//     <div className={showHideClassName} onClick={() => handleClose()}>
//       <section style={{ zIndex: 1000 }} className="modal-main">
//         {children}
//       </section>
//     </div>
//   );
// };

// export default Modal;

import React, { Component } from "react";
import { Icons } from "../Icons";
import styled from "@emotion/styled";
import { Box } from "../Box";

interface Props {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
  styleExeternal?: React.CSSProperties;
  styleInternal?: React.CSSProperties;
}
export default class Modal extends Component<Props> {
  render() {
    return (
      <div
        className={
          this.props.show ? "modal display-block" : "modal display-none"
        }
        style={this.props.styleExeternal}
        // onClick={() => this.props.handleClose()}
      >
        <section
          style={{
            zIndex: 1000,
            ...this.props.styleInternal,
            position: "relative",
          }}
          className="modal-main"
        >
          <CloseIcon
            center
            id="modal-close"
            onClick={() => this.props.handleClose()}
          >
            <p style={{ fontSize: 24 }}>x</p>
          </CloseIcon>
          {this.props.children}
        </section>
      </div>
    );
  }
}

const CloseIcon = styled(Box)`
  z-index: 9999;
  background-color: lightgrey;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: -46px;
  padding: 12px;
`;
