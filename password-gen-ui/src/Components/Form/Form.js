import React, { Component } from "react";
import NumberOfWords from "./NumberOfWords/NumberOfWords";
import MinMaxLength from "./MinMaxLength/MinMaxLength";
import CaseSelect from "./CaseSelect/CaseSelect";
import Paper from "@material-ui/core/Paper";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfWordsVal: 3,
      minLength: 15,
      maxLength: 40,
      selectedCase: "titleCase"
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

  setCase = newValue => {
    this.setState({
      selectedCase: newValue
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

          <CaseSelect onChange={this.setCase} defaultValue={"titleCase"} />
        </Paper>
      </div>
    );
  }
}

export default Form;
