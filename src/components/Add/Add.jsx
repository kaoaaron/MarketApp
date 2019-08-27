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

  handleChangeRedirect = (price, desc) => {
    this.showModal();
    this.props.onSubmit(price, desc);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.users}
        <Button id="item" onClick={this.showModal} outline color="secondary">
          <span className="plus">+</span>
        </Button>
        <Modal
          show={this.state.show}
          onClose={this.showModal}
          onSubmit={this.handleChangeRedirect}
          formData={this.getFormData}
        />

        {this.state.items.map(child => child)}
      </React.Fragment>
    );
  }
}

export default Add;
