import React from "react";
import { Button } from "reactstrap";
import Modal from "../Modal/Modal";

class Add extends React.Component {
  state = { show: false, items: [] };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  handleChangeRedirect = () => {
    this.showModal();
    this.props.onSubmit();
  };

  render() {
    return (
      <React.Fragment>
        {this.state.users}
        <Button id="item" onClick={this.showModal} variant="secondary">
          +
        </Button>
        <Modal
          show={this.state.show}
          onClose={this.showModal}
          onSubmit={this.handleChangeRedirect}
        />

        {this.state.items.map(child => child)}
      </React.Fragment>
    );
  }
}

export default Add;
