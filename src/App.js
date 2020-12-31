import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quates: [],
      number: 0
    };
  }
  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then((data) => this.setState({ quates: data.map((x) => x.text) }));
  }
  handleOnclick() {
    let rend = parseInt(Math.random() * this.state.quates.length);
    return this.setState({
      number: rend
    });
  }
  render() {
    const mystyle = {
      height: "100vh"
    };
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={mystyle}
      >
        <div className="App">
          <p> "{this.state.quates[this.state.number]}"</p>
          <br />
          <button onClick={() => this.handleOnclick()} className="btn btn-dark">
            Genrate Quate
          </button>
        </div>
      </div>
    );
  }
}
