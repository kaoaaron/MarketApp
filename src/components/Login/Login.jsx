import React, { Component } from "react";

const backdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  padding: 50,
  bottom: 0
};

const loginStlye = {
  backgroundColor: "#fff",
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: "0 auto",
  padding: 30,
  position: "relative"
};

const footerStyle = {
  position: "absolute",
  bottom: 20
};

const closeStyle = {
  position: "absolute",
  bottom: 410,
  left: 410
};

class Login extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div style={backdropStyle}>
        <div style={loginStlye}>
          {this.props.children}
          <div style={footerStyle}>
            <div style={closeStyle}>
              <div
                className="close"
                onClick={e => {
                  this.onClose(e);
                }}
              >
                <span>
                  <i className="fas fa-times"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
