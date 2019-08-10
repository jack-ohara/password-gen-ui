import React from "react";
import Form from "../Form/Form";
import PasswordResult from "../PasswordResult/PasswordResult";
import "./PasswordGenerator.css";

export default function PasswordGenerator() {
  const [result, setResult] = React.useState(null);

  return (
    <div className="password-generator">
      <header>
        <h1>PasswordGenerator</h1>
      </header>
      <div className="layout-container">
        <div className="form-area">
          <Form setPasswordResult={setResult} />
        </div>
        <div className="result-area">
          <PasswordResult password={result} setPassword={setResult} />
        </div>
      </div>
    </div>
  );
}
