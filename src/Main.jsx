import React, { Component } from "react";
import { Button } from "reactstrap";
import Modal from "./components/Modal/Modal";
import Add from "./components/Add/Add";

class Main extends Component {
  state = { items: [] };

  handleChange = (price, desc) => {
    this.setState({
      ...this.state,
      items: [
        this.state.items,
        <Button id="item" onClick={this.showModal} variant="secondary">
          Price: {price}
          <br />
          Description: {desc}
        </Button>
      ]
    });
  };

  render() {
    return (
      <React.Fragment>
        <Add onSubmit={this.handleChange} />
        {this.state.items.map(child => child)}
      </React.Fragment>
    );
  }
}

export default Main;
