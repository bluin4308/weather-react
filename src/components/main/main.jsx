import React from "react";
import fetchWrapper from "../../services/fetch-wrapper";

export default class Main extends React.Component {
  state = {
    location: "",
    messageOne: "",
    messageTwo: "",
    loading: false,
  };

  handleInput = (event) => {
    this.setState({ location: event.target.value });
  };

  handleSubmit = async () => {
    const { location } = this.state;
    const response = await fetchWrapper(location);
    if (response.error) {
      this.setState({ messageOne: response.error, messageTwo: null });
    } else {
      this.setState({ loading: true });
      this.setState({
        messageOne: ` | Temperature: ${response.temperature} | Feelslike: ${response.feelslike}`,
        messageTwo: ` | Decription: ${response.description} | Region: ${response.region}`,
        loading: false,
      });
    }
  };

  componentDidMount() {
    this.props.updateTitle("Main");
  }

  render() {
    const { location, messageOne, messageTwo, loading } = this.state;
    return (
      <>
        <p>Main page</p>
        <form>
          <input
            placeholder="Location"
            type="text"
            onChange={this.handleInput}
            value={location}
          />
          <button type="button" onClick={this.handleSubmit}>
            Search
          </button>
        </form>
        {loading ? <p>Loading</p> : null}
        <p id="message-1">{messageOne}</p>
        <p id="message-2">{messageTwo}</p>
      </>
    );
  }
}
