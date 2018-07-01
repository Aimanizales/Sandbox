import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const listItems = numbers.map((number, index) => {
    if (number === 3) return null;
    return <li key={index}>{number}</li>;
  });
  return (
    <div className="App">
      <h3>Hello CodeSandbox</h3>
      <p>Start editing to see some magic happen!</p>
      <ul>{listItems}</ul>
    </div>
  );
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isGoing: false,
      numberOfGuests: 2
    };
    this.handleSubmit = this.handleSubmit.bind(this); // why???

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    if (name === "name") {
      value = target.value.toUpperCase();
    }

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert("A name was submited: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <p>this.state={this.state.name}</p>
        <p>this.isGoing={this.state.isGoing.toString()}</p>
        <p>this.numberOfGuests={this.state.numberOfGuests}</p>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Write your Name"
            //value={this.state.value}  // only once?
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Is Going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    );
  }
}

const rootElement = document.getElementById("root");
const formElement = document.getElementById("form");
const mountNode = document.getElementById("mountNode");

ReactDOM.render(<App />, rootElement);
ReactDOM.render(<MyForm />, formElement);

ReactDOM.render(<input type="text" value="hi" />, mountNode);
setTimeout(function() {
  ReactDOM.render(<input type="text" value={null} />, mountNode);
}, 1000);
