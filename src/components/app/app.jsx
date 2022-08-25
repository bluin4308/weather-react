import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/header";
import "./app.css";
import Footer from "./../footer/footer";
import Main from "./../main/main";
import About from "./../about/about";
import Help from "./../help/help";

export default class App extends React.Component {
  state = {
    title: "app title",
  };
  updateTitle = (string) => {
    this.setState({ title: string });
  };

  render() {
    const { title } = this.state;
    const { updateTitle } = this;
    return (
      <BrowserRouter>
        <div className="main-content">
          <Header title={title} />
          <Routes>
            <Route path="/" element={<Main updateTitle={updateTitle} />} />
            <Route path="about" element={<About updateTitle={updateTitle} />} />
            <Route path="help" element={<Help updateTitle={updateTitle} />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}
