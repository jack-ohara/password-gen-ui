import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";

class IncludeNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      includeNumbersChecked: true
    };
  }

  handleChange = name => event => {
    console.log(name);

    //props.onIncludeNumbersChange(event.target.checked);

    console.log("here1");

    this.setState({ ...this.state, [name]: event.target.checked });

    console.log("here2");
  };

  render() {
    return (
      <div id="include-numbers">
        <Switch
          checked={this.state.includeNumbersChecked}
          onChange={this.handleChange("includeNumbersChecked")}
          value="includeNumbersChecked"
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </div>
    );
  }
}

export default IncludeNumbers;
