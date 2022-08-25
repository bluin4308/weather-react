import React from "react";
import photo from "../../assets/6nMLIKd.png";
export default class About extends React.Component {
  componentDidMount() {
    this.props.updateTitle("About");
  }
  render() {
    return <img className="portrait" src={photo} alt="Oleg" />;
  }
}
