import React, { Component } from "react";
import Login from "../Login/Login";

class NavBar extends Component {
  state = {
    show: false
  };

  showLogin = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand text-white text-uppercase" href="#">
          MarketApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white text-uppercase ml-3" href="#">
                Product<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="button"
              onClick={this.showLogin}
              value="Show Login"
            >
              Login
            </button>
          </form>
        </div>

        <Login onClose={this.showLogin} show={this.state.show}></Login>
      </nav>
    );
  }
}

export default NavBar;
