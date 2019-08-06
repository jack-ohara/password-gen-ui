import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

class NumberOfWords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfWordsVal: this.props.defaultValue
    };
  }

  handleSliderChange = (event, newValue) => {
    this.setValue(newValue);
  };

  setValue(newValue) {
    this.props.onChange(newValue);

    this.setState({
      numberOfWordsVal: newValue
    });
  }

  handleInputChange = event => {
    this.setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  handleBlur = () => {
    if (this.state.numberOfWordsVal < 0) {
      this.setValue(0);
    } else if (this.state.numberOfWordsVal > 100) {
      this.setValue(100);
    }
  };

  render() {
    return (
      <div id="password-gen-form">
        <Paper>
          <div className="number-of-words">
            <Typography gutterBottom>Number Of Words</Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Slider
                  value={
                    typeof this.state.numberOfWordsVal === "number"
                      ? this.state.numberOfWordsVal
                      : 0
                  }
                  onChange={this.handleSliderChange}
                  aria-labelledby="input-slider"
                  min={1}
                  max={5}
                  defaultValue={this.props.defaultValue}
                />
              </Grid>
              <Grid item>
                <Input
                  value={this.state.numberOfWordsVal}
                  margin="dense"
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur}
                  inputProps={{
                    step: 1,
                    min: 1,
                    max: 5,
                    type: "number",
                    "aria-labelledby": "input-slider"
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }
}

export default NumberOfWords;
