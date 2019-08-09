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
      caseType: this.defaults.selectedCase,
      numberAtStart: this.defaults.numberAtStart,
      numbersBetweenWords: this.defaults.numbersBetweenWords,
      numberAtEnd: this.defaults.numberAtEnd,
      separatorCharacters: this.defaults.separatorCharacters
    };

    this.numberOfWordsRef = React.createRef();
    this.minMaxLengthRef = React.createRef();
    this.caseSelectRef = React.createRef();
    this.includeNumbersRef = React.createRef();
    this.separateWordsRef = React.createRef();
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
      caseType: newValue
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

  resetAllOptionsToDefaults = () => {
    this.numberOfWordsRef.current.setValue(this.defaults.numberOfWords);
    this.minMaxLengthRef.current.setMinMaxValues([
      this.defaults.minLength,
      this.defaults.maxLength
    ]);
    this.caseSelectRef.current.setNewValue(this.defaults.selectedCase);
    this.includeNumbersRef.current.setNumAtStart(this.defaults.numberAtStart);
    this.includeNumbersRef.current.setNumAtEnd(this.defaults.numberAtEnd);
    this.includeNumbersRef.current.setNumBetweenWords(
      this.defaults.numbersBetweenWords
    );
    this.includeNumbersRef.current.setIncludeNumbers(
      this.defaults.includeNumbers
    );
    this.separateWordsRef.current.separatorCharactersChanged(
      this.defaults.separatorCharacters
    );
    this.separateWordsRef.current.setSeparateWords(this.defaults.separateWords);
  };

  submitFormAndGeneratePassword = () => {
    const formJson = JSON.stringify(this.state);

    fetch(
      "https://passwordgenazurefunc20190705072629.azurewebsites.net/api/generatePassword",
      {
        mode: "cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: formJson
      }
    )
      .then(response => response.json())
      .then(data => console.log(data));

    console.log(formJson);
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
              ref={this.numberOfWordsRef}
            />

            <MinMaxLength
              className="form-element"
              min={0}
              max={40}
              defaultValues={[this.defaults.minLength, this.defaults.maxLength]}
              onChange={this.setMinMaxLengths}
              ref={this.minMaxLengthRef}
            />

            <CaseSelect
              onChange={this.setCase}
              defaultValue={this.defaults.selectedCase}
              ref={this.caseSelectRef}
            />

            <IncludeNumbers
              onNumAtStartChange={this.setNumAtStart}
              onNumAtEndChange={this.setNumAtEnd}
              onNumBetweenWordsChange={this.setNumBetweenWords}
              includeNumbersDefault={this.defaults.includeNumbers}
              numberAtStartDefault={this.defaults.numberAtStart}
              numberAtEndDefault={this.defaults.numberAtEnd}
              numbersBetweenWordsDefault={this.defaults.numbersBetweenWords}
              ref={this.includeNumbersRef}
            />

            <SeparateWords
              onSeparatorsChange={this.setSeparatorCharacters}
              separateWordsDefault={this.defaults.separateWords}
              separatorCharactersDefault={this.defaults.separatorCharacters}
              ref={this.separateWordsRef}
            />
          </div>

          <div className="form-buttons">
            <Button
              variant="contained"
              color="secondary"
              onClick={this.resetAllOptionsToDefaults}>
              Reset Options
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.submitFormAndGeneratePassword}>
              Generate
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Form;
