import React, { Component } from "react";
import NumberOfWords from "./NumberOfWords/NumberOfWords";
import MinMaxLength from "./MinMaxLength/MinMaxLength";
import CaseSelect from "./CaseSelect/CaseSelect";
import IncludeNumbers from "./IncludeNumbers/IncludeNumbers";
import SeparateWords from "./SeperateWords/SerparateWords";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.defaults = {
      numberOfWords: 3,
      minLength: 15,
      maxLength: 40,
      selectedCase: "titleCase",
      includeNumbers: true,
      get numberAtStart() {
        return false && this.includeNumbers;
      },
      get numbersBetweenWords() {
        return false && this.includeNumber;
      },
      get numberAtEnd() {
        return true && this.includeNumbers;
      },
      separateWords: true,
      get separatorCharacters() {
        return this.separateWords ? "_" : "";
      }
    };

    this.state = {
      numberOfWords: this.defaults.numberOfWords,
      minLength: this.defaults.minLength,
      maxLength: this.defaults.maxLength,
      selectedCase: this.defaults.selectedCase,
      numberAtStart: this.defaults.numberAtStart,
      numbersBetweenWords: this.defaults.numbersBetweenWords,
      numberAtEnd: this.defaults.numberAtEnd,
      separatorCharacters: this.defaults.separatorCharacters
    };
  }

  setNumberOfWords = newValue => {
    this.setState({
      numberOfWords: newValue
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

  setSeparatorCharacters = newValue => {
    this.setState({
      separatorCharacters: newValue
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
              defaultValue={this.defaults.numberOfWords}
              onChange={this.setNumberOfWords}
              className="form-element"
            />

            <MinMaxLength
              className="form-element"
              min={0}
              max={40}
              defaultValues={[this.defaults.minLength, this.defaults.maxLength]}
              onChange={this.setMinMaxLengths}
            />

            <CaseSelect
              onChange={this.setCase}
              defaultValue={this.defaults.selectedCase}
            />

            <IncludeNumbers
              onNumAtStartChange={this.setNumAtStart}
              onNumAtEndChange={this.setNumAtEnd}
              onNumBetweenWordsChange={this.setNumBetweenWords}
              includeNumbersDefault={this.defaults.includeNumbers}
              numberAtStartDefault={this.defaults.numberAtStart}
              numberAtEndDefault={this.defaults.numberAtEnd}
              numbersBetweenWordsDefault={this.defaults.numbersBetweenWords}
            />

            <SeparateWords
              onSeparatorsChange={this.setSeparatorCharacters}
              separateWordsDefault={this.defaults.separateWords}
              separatorCharactersDefault={this.defaults.separatorCharacters}
            />
          </div>

          <div className="form-buttons">
            <Button variant="contained" color="secondary">
              Reset Options
            </Button>
            <Button variant="contained" color="primary">
              Generate
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Form;
