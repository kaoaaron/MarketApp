import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="my-5 pt-5  text-muted text-center text-small text-uppercase">
        <p className="mb-1">&copy; 2019 Market App</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
