import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <header>
        {title ? <h1>{title} page</h1> : null}
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
