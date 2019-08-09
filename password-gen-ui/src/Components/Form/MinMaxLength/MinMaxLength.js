import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

class MinMaxLength extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minValue: this.props.defaultValues[0],
      maxValue: this.props.defaultValues[1]
    };
  }

  handleChange = (event, newValues) => {
    this.setMinMaxValues(newValues);
  };

  setMinMaxValues = newValues => {
    this.props.onChange(newValues);

    this.setState({
      minValue: newValues[0],
      maxValue: newValues[1]
    });
  };

  render() {
    return (
      <div className={this.props.className} id="min-max-length">
        <Typography gutterBottom>Length Range</Typography>
        <Slider
          defaultValue={[
            this.props.defaultValues[0],
            this.props.defaultValues[1]
          ]}
          onChange={this.handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="min-max-length-range"
          min={this.props.min}
          max={this.props.max}
          value={[this.state.minValue, this.state.maxValue]}
        />
      </div>
    );
  }
}

export default MinMaxLength;
