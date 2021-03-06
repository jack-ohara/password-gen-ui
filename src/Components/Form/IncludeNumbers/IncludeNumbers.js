import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./IncludeNumbers.css";

class IncludeNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      includeNumbersChecked: this.props.includeNumbersDefault,
      numberAtStart: this.props.numberAtStartDefault,
      numbersBetweenWords: this.props.numbersBetweenWordsDefault,
      numberAtEnd: this.props.numberAtEndDefault,
      numberAtStartBeforeHide: false,
      numbersBetweenWordsBeforeHide: false,
      numberAtEndBeforeHide: false
    };
  }

  handleIncludeNumbersChange = event => {
    const newValue = event.target.checked;

    this.setIncludeNumbers(newValue);

    if (newValue) {
      this.setNumAtEnd(this.state.numberAtEndBeforeHide);
      this.setNumAtStart(this.state.numberAtStartBeforeHide);
      this.setNumBetweenWords(this.state.numbersBetweenWordsBeforeHide);
    } else {
      this.setState({
        numberAtEndBeforeHide: this.state.numberAtEnd,
        numberAtStartBeforeHide: this.state.numberAtStart,
        numbersBetweenWordsBeforeHide: this.state.numbersBetweenWords
      });

      this.setNumAtEnd(false);
      this.setNumAtStart(false);
      this.setNumBetweenWords(false);
    }
  };

  setIncludeNumbers = newValue => {
    this.setState({
      includeNumbersChecked: newValue
    });
  };

  setNumAtStart = newValue => {
    this.props.onNumAtStartChange(newValue);

    this.setState({
      numberAtStart: newValue
    });
  };

  setNumAtEnd = newValue => {
    this.props.onNumAtEndChange(newValue);

    this.setState({
      numberAtEnd: newValue
    });
  };

  setNumBetweenWords = newValue => {
    this.props.onNumBetweenWordsChange(newValue);

    this.setState({
      numbersBetweenWords: newValue
    });
  };

  render() {
    return (
      <div id="include-numbers">
        <FormControlLabel
          control={
            <Switch
              checked={this.state.includeNumbersChecked}
              onChange={this.handleIncludeNumbersChange}
              value="includeNumbersChecked"
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          }
          label="Include Numbers"
          labelPlacement="start"
          className="include-numbers-label"
        />

        <div className="number-options">
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.numberAtStart}
                onChange={event => this.setNumAtStart(event.target.checked)}
                value="numberAtStart"
                disabled={!this.state.includeNumbersChecked}
              />
            }
            label="Number At Start"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.numbersBetweenWords}
                onChange={event =>
                  this.setNumBetweenWords(event.target.checked)
                }
                value="numbersBetweenWords"
                disabled={!this.state.includeNumbersChecked}
              />
            }
            label="Numbers Between Words"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.numberAtEnd}
                onChange={event => this.setNumAtEnd(event.target.checked)}
                value="numberAtEnd"
                disabled={!this.state.includeNumbersChecked}
              />
            }
            label="Number At End"
          />
        </div>
      </div>
    );
  }
}

export default IncludeNumbers;
