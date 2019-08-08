import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./CaseSelect.css";

class CaseSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCase: this.props.defaultValue
    };
  }

  handleChange = event => {
    this.props.onChange(event.target.value);

    this.setState({
      selectedCase: event.target.value
    });
  };

  render() {
    return (
      <div id="case-select">
        <Typography gutterBottom>Password Case</Typography>
        <Select
          value={this.state.selectedCase}
          onChange={this.handleChange}
          className="case-select-input"
          inputProps={{
            name: "case",
            id: "case-select"
          }}>
          <MenuItem value={"titleCase"}>Title Case</MenuItem>
          <MenuItem value={"lowerCase"}>lower case</MenuItem>
          <MenuItem value={"upperCase"}>UPPER CASE</MenuItem>
          <MenuItem value={"randomCase"}>RAndOm cAsE</MenuItem>
        </Select>
      </div>
    );
  }
}

export default CaseSelect;
