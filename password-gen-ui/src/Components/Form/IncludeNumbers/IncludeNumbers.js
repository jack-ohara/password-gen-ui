import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./IncludeNumbers.css";

class IncludeNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      includeNumbersChecked: true,
      numberAtStart: false,
      numbersBetweenWords: false,
      numberAtEnd: true,
      numberAtStartBeforeHide: false,
      numbersBetweenWordsBeforeHide: false,
      numberAtEndBeforeHide: false
    };
  }

  handleIncludeNumbersChange = event => {
    const newValue = event.target.checked;

    this.props.onIncludeNumbersChange(newValue);

    this.setState({
      includeNumbersChecked: newValue
    });

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
    let numberOptions;

    if (this.state.includeNumbersChecked) {
      numberOptions = (
        <div className="number-options">
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.numberAtStart}
                onChange={event => this.setNumAtStart(event.target.checked)}
                value="numberAtStart"
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
              />
            }
            label="Number At End"
          />
        </div>
      );
    } else {
      numberOptions = <div />;
    }

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

        {numberOptions}
      </div>
    );
  }
}

export default IncludeNumbers;
