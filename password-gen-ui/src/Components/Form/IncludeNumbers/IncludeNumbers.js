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
    console.log("Entered");
    const newValue = event.target.checked;
    console.log("event.target.checked = " + event.target.checked);
    console.log("newValue = " + newValue);

    this.props.onIncludeNumbersChange(newValue);

    console.log("setting inner state");

    this.setState({
      includeNumbersChecked: newValue
    });

    if (newValue) {
      console.log("Setting number options back");
      // this.changeNumberOption(
      //   "numberAtStart",
      //   this.state.numberAtStartBeforeHide
      // );
      // this.changeNumberOption(
      //   "numbersBetweenWords",
      //   this.state.numbersBetweenWordsBeforeHide
      // );
      // this.changeNumberOption("numberAtEnd", this.state.numberAtEndBeforeHide);
    } else {
      console.log("Settings number options to false");
      // this.setState({
      //   numberAtStartBeforeHide: this.state.numberAtStart,
      //   numbersBetweenWordsBeforeHide: this.state.numbersBetweenWords,
      //   numberAtEndBeforeHide: this.state.numberAtEnd
      // });

      // this.changeNumberOption("numberAtStart", false);
      // this.changeNumberOption("numbersBetweenWords", false);
      // this.changeNumberOption("numberAtEnd", false);
    }
  };

  handleChange = name => event => {
    this.changeNumberOption(name, event.target.checked);
  };

  changeNumberOption = (name, newValue) => {
    console.log("Setting " + name + " to " + newValue);
    this.props.onNumberOptionsChange(name, newValue);

    this.setState({ ...this.state, [name]: newValue });
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
                onChange={this.handleChange("numberAtStart")}
                value="numberAtStart"
              />
            }
            label="Number At Start"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.numbersBetweenWords}
                onChange={this.handleChange("numbersBetweenWords")}
                value="numbersBetweenWords"
              />
            }
            label="Numbers Between Words"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.numberAtEnd}
                onChange={this.handleChange("numberAtEnd")}
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
