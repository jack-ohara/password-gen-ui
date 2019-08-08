import React, { Component } from "react";
import NumberOfWords from "./NumberOfWords/NumberOfWords";
import MinMaxLength from "./MinMaxLength/MinMaxLength";
import CaseSelect from "./CaseSelect/CaseSelect";
import IncludeNumbers from "./IncludeNumbers/IncludeNumbers";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfWordsVal: 3,
      minLength: 15,
      maxLength: 40,
      selectedCase: "titleCase",
      includeNumbers: true,
      numberAtStart: false,
      numbersBetweenWords: false,
      numberAtEnd: true
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

  setIncludeNumbers = newValue => {
    console.log("setting " + newValue + " in the form");
    this.setState({
      includeNumbers: newValue
    });
    console.log("form set");
  };

  setNumberOptions = (name, newValue) => {
    this.setState({ ...this.state, [name]: newValue });
  };

  setNumAtStart = newValue => {
    this.setState({
      numberAtStart: newValue
    });
  };

  setNumAtEnd = newValue => {
    this.setState({
      numberAtEnd: newValue
    });
  };

  setNumBetweenWords = newValue => {
    this.setState({
      numbersBetweenWords: newValue
    });
  };

  render() {
    return (
      <div id="password-gen-form">
        <Paper className="form-paper">
          <div className="form-header">
            <Typography variant="h5" color="textPrimary">
              Customise
            </Typography>
          </div>

          <div className="form-options">
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

            <IncludeNumbers
              onIncludeNumbersChange={this.setIncludeNumbers}
              onNumAtStartChange={this.setNumAtStart}
              onNumAtEndChange={this.setNumAtEnd}
              onNumBetweenWordsChange={this.setNumBetweenWords}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

export default Form;
