import React from "react";
import "./PasswordGenerator.css";

export default function PasswordGenerator() {
  return (
    <div className="password-generator">
      <header>
        <h1>PasswordGenerator</h1>
      </header>
      <div className="layout-container">
        <div className="form-area">Your options...</div>
        <div className="result-area">Your password...</div>
      </div>
    </div>
  );
}
