import React, { Component } from "react";
import { Button } from "reactstrap";
import Modal from "./components/Modal/Modal";
import Add from "./components/Add/Add";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

class Main extends Component {
  state = { items: [] };

  handleChange = (price, desc) => {
    this.setState({
      ...this.state,
      items: [
        this.state.items,
        <Button id="item" onClick={this.showModal} outline color="primary">
          <img className="img" src={require("./images/testpic.png")} />
          <br />
          <span className="price">${price}.00</span>
          <br />
          {desc}
        </Button>
      ]
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Add onSubmit={this.handleChange} />
        {this.state.items.map(child => child)}
        <Login />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
