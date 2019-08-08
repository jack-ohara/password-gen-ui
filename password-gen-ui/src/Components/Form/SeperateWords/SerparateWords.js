import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import "./SeparateWords.css";

export default class SeparateWords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      separateWords: true,
      separators: "_",
      oldSeparators: ""
    };
  }

  separatorCharactersChanged = newValue => {
    this.props.onSeparatorsChange(newValue);

    this.setState({
      separators: newValue
    });
  };

  switchFlipped = event => {
    const newValue = event.target.checked;

    if (newValue) {
      this.separatorCharactersChanged(this.state.oldSeparators);
    } else {
      this.setState({
        oldSeparators: this.state.separators
      });

      this.props.onSeparatorsChange("");

      this.setState({
        separators: " "
      });
    }

    this.setState({
      separateWords: newValue
    });
  };

  render() {
    return (
      <div id="separate-words">
        <FormControlLabel
          control={
            <Switch
              checked={this.state.separateWords}
              onChange={this.switchFlipped}
              value="separateWords"
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          }
          label="Separate Words"
          labelPlacement="start"
          className="separate-words-label"
        />

        <div id="separator-characters-area">
          <TextField
            id="separator-characters"
            label="Separator Characters"
            value={this.state.separators}
            onChange={event =>
              this.separatorCharactersChanged(event.target.value)
            }
            margin="normal"
            className="separator-characters"
            fullWidth
            disabled={!this.state.separateWords}
          />
        </div>
      </div>
    );
  }
}
