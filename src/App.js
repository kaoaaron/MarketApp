import React from "react";
import Add from "./components/Add/Add";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./components/Modal/Modal";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Add />
      <Login />
      <Modal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
