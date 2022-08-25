import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  // state = {
  //   title: "Test title",
  // };

  // updateTitle = (string) => {
  //   this.setState({ title: string });
  // };
  render() {
    const { title } = this.props;
    return (
      <header>
        {title ? <h1>{title}</h1> : null}
        <div>
          <Link to="/">Weather page</Link>
          <Link to="/about">About page</Link>
          <Link to="/help">Help page</Link>
        </div>
      </header>
    );
  }
}

export default Header;
