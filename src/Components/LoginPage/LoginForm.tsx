/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { AiOutlineClose } from "react-icons/ai";
import {
  EuiFieldText,
  EuiFieldPassword,
  EuiFormRow,
  EuiButton,
} from "@elastic/eui";

const sharedInputStyles = css`
  font-size: 12px;
  background: transparent;
  outline: none;
  padding: 8px;
  border: 1px solid #d2d9e1;
  border-radius: 6px;
  width: 100%;
  color: #000000;
  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }

  &:focus {
    outline: none;
    background: rgba(223, 226, 232, 0.4);
    box-shadow: 0 0 0 2px rgba(32, 86, 126, 0.4);
  }
`;

const formRowStyles = css`
  label.euiFormLabel {
    font-size: 12px;
    font-weight: 500;
  }
`;

const errorBoxStyles = css`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  top: 10px;
  right: 10px;
  background: #ff4d4f;
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export default function LoginForm() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mail || !pass) {
      setError("An error occurred: Email and Password are required.");
    } else {
      setError("");
    }
  };

  return (
    <div style={{ width: "50%" }}>
      {error && (
        <div css={errorBoxStyles}>
          <AiOutlineClose
            css={css`
              &:hover {
                cursor: pointer;
              }
            `}
            onClick={() => setError("")}
          />{" "}
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          fontSize: "12px",

          display: "flex",
          flexDirection: "column",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          backgroundColor: "white",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            textAlign: "center",
            color: "#414141ff",
            paddingBottom: "10px",
            fontWeight: 300,
          }}
          className="metropolis"
        >
          Login
        </h1>

        <EuiFormRow label="Email" className="metropolis" css={formRowStyles}>
          <EuiFieldText
            placeholder="Enter your Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            aria-label="Email input"
            css={sharedInputStyles}
          />
        </EuiFormRow>

        <EuiFormRow label="Password" className="metropolis" css={formRowStyles}>
          <EuiFieldPassword
            placeholder="Enter your Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            aria-label="Password input"
            css={sharedInputStyles}
            style={{ paddingLeft: "40px" }}
          />
        </EuiFormRow>

        <EuiButton
          css={css`
            background: #20567e;
            font-size: 12px;
            width: 50%;
            padding: 8px;
            color: white;
            transform: translateX(50%);
            border: none;
            &:hover {
              filter: brightness(1.25);
              background: #20567e;
            }
          `}
          type="submit"
        >
          Login
        </EuiButton>
      </form>
    </div>
  );
}
