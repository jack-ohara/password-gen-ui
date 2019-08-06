import React, { Component } from "react";
import NumberOfWords from "./NumberOfWords/NumberOfWords";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfWordsVal: 3
    };
  }

  setNumberOfWords = newValue => {
    this.setState({
      numberOfWordsVal: newValue
    });
  };

  render() {
    return (
      <div id="password-gen-form">
        <NumberOfWords defaultValue={3} onChange={this.setNumberOfWords} />
      </div>
    );
  }
}

export default Form;
