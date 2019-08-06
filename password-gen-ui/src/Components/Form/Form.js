import React, { Component } from "react";
import NumberOfWords from "./NumberOfWords/NumberOfWords";
import MinMaxLength from "./MinMaxLength/MinMaxLength";
import Paper from "@material-ui/core/Paper";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfWordsVal: 3,
      minLength: 15,
      maxLength: 40
    };
  }

  setNumberOfWords = newValue => {
    this.setState({
      numberOfWordsVal: newValue
    });
  };

  setMinMaxLengths = newValues => {
    this.setState({
      minLength: newValues[0],
      maxLength: newValues[1]
    });
  };

  render() {
    return (
      <div id="password-gen-form">
        <Paper className="form-paper">
          <NumberOfWords
            defaultValue={3}
            onChange={this.setNumberOfWords}
            className="form-element"
          />

          <MinMaxLength
            className="form-element"
            min={0}
            max={40}
            defaultValues={[15, 40]}
            onChange={this.setMinMaxLengths}
          />
        </Paper>
      </div>
    );
  }
}

export default Form;
