import React, { Component } from "react";
import { Button } from "reactstrap";
import Modal from "./components/Modal/Modal";
import Add from "./components/Add/Add";

class Main extends Component {
  state = { items: [] };

  handleChange = () => {
    this.setState({
      ...this.state,
      items: [
        this.state.items,
        <Button id="item" onClick={this.showModal} variant="secondary">
          Content Here
        </Button>
      ]
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.items.map(child => child)}
        <Add onSubmit={this.handleChange} />
      </React.Fragment>
    );
  }
}

export default Main;
