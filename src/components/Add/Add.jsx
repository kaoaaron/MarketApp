import React from "react";
import { Button } from "reactstrap";
import Modal from "../Modal/Modal";

class Add extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <Button id="item" onClick={this.showModal} variant="secondary">
          +
        </Button>

        <Modal show={this.state.show} onClose={this.showModal}>
          Works!
        </Modal>
      </div>
    );
  }
}

export default Add;
