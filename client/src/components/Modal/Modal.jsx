import React from "react";
import { Button } from "reactstrap";
import { bindExpression } from "@babel/types";

const backdropStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  padding: 50
};

const modalStyle = {
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

const closeboxStyle = {
  position: "absolute",
  bottom: 230,
  left: 430
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: "", item: "" };
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.price, this.state.item);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Price: </label>
              <input
                name="price"
                type="text"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Item: </label>
              <input
                name="item"
                type="text"
                value={this.state.item}
                onChange={this.handleChange}
              />
            </div>

            <div style={footerStyle}>
              <div style={closeboxStyle}>
                <div
                  className="closebox"
                  onClick={e => {
                    this.onClose(e);
                  }}
                >
                  <span>
                    <i className="fas fa-times"></i>
                  </span>
                </div>
              </div>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
