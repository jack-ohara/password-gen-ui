import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
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

  marks = [
    { value: 1, label: "1" },
    { value: 2, label: "" },
    { value: 3, label: "" },
    { value: 4, label: "" },
    { value: 5, label: "5" }
  ];

  render() {
    return (
      <div id="number-of-words" className={this.props.className}>
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
              valueLabelDisplay="auto"
              marks={this.marks}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NumberOfWords;
