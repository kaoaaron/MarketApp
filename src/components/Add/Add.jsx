import React from "react";
import { Button } from "reactstrap";
import Modal from "../Modal/Modal";

class Add extends React.Component {
  state = { show: false, users: 0 };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  handleSubmit = e => {
    console.log(this);
    e.preventDefault();
    this.setState({ users: this.state.users + 1 });

    this.showModal();
  };

  addUser = () => {
    console.log(this);
    this.setState(prevState => {
      return {
        users: (prevState.users += 1)
      };
    });
  };

  render() {
    return (
      <div>
        <Button id="item" onClick={this.showModal} variant="secondary">
          +
        </Button>

        <button onClick={this.addUser}>Add User</button>
        {this.state.users}
        <Modal show={this.state.show} onClose={this.showModal}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Price</label>
              <input type="text" />
              <button type="submit">Submit</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Add;
