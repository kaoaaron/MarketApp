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

  handleSubmit = e => {
    e.preventDefault();
    this.showModal();
  };

  handleChange = () => {
    this.setState({
      ...this.state,
      items: [
        this.state.items,
        <Button id="item" onClick={this.showModal} variant="secondary">
          +
        </Button>
      ]
    });
  };

  render() {
    return (
      <div>
        <Button id="item" onClick={this.showModal} variant="secondary">
          +
        </Button>
        {this.state.users}
        <Modal show={this.state.show} onClose={this.showModal}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Price</label>
              <input type="text" />
              <button type="submit" onClick={this.handleChange}>
                Submit
              </button>
            </div>
          </form>
        </Modal>

        {this.state.items.map(child => child)}
      </div>
    );
  }
}

export default Add;
