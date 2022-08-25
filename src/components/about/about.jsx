import React from "react";

export default class About extends React.Component {
  componentDidMount() {
    this.props.updateTitle("About");
  }
  render() {
    return (
      <img className="portrait" src="/src/assets/6nMLIKd.png" alt="Oleg" w />
    );
  }
}

// export default About;
