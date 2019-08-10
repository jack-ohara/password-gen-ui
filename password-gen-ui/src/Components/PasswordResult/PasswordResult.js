import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { isNull } from "util";
import "./PasswordResult.css";

export default function PasswordResult(props) {
  const clearPassword = () => {
    props.setPassword(null);
  };

  const passwordAreaRef = React.createRef();

  const copyPassword = () => {
    console.log(passwordAreaRef.current);
    passwordAreaRef.current.select();
    document.execCommand("copy");
  };

  return (
    <Zoom in={!isNull(props.password)}>
      <Paper className="result-paper">
        <Typography variant="h6" className="password" ref={passwordAreaRef}>
          {props.password}
        </Typography>
        <ButtonGroup fullWidth className="result-buttons">
          <Button className="clear-button" onClick={clearPassword}>
            Clear
          </Button>
          <CopyToClipboard text={props.password}>
            <Button className="copy-button">Copy To Clipboard</Button>
          </CopyToClipboard>
        </ButtonGroup>
      </Paper>
    </Zoom>
  );
}
