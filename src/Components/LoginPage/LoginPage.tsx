/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import "./LoginPage.css";
import {
  EuiButton,
  EuiFieldPassword,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiImage,
} from "@elastic/eui";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Login = () => {
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
    <EuiFlexGroup
      id="loginContainer"
      alignItems="flexEnd"
      justifyContent="spaceBetween"
    >
      {/* ------------------------------------------------------------- LEFT ITEM WITH GRADIENT */}
      <EuiFlexItem id="loginItemLeft" grow={true}>
        <div id="overlayRectangle" />
      </EuiFlexItem>

      {/* ------------------------------------------------------------ RIGHT ITEM WITH FORM */}
      <EuiFlexItem id="loginItemRight">
        <EuiImage
          id="CirrusLogoImage"
          src={"/LoginPage/CirrusAILogo.png"}
          alt="Cirrus AI Logo"
          width={300}
          height={100}
        />

        <div style={{ width: "50%" }}>
          {/* --------------------------------------------------------- Error message */}
          {error && (
            <div id="errorBoxStyles">
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

          {/* -------------------------------------------------------- FORM CONTAINER */}
          <form onSubmit={handleSubmit} id="loginFormContainer">
            {/* TITLE */}
            <h1 className="metropolis">Login</h1>

            {/* EMAIL */}
            <EuiFormRow id="formRowStyles" label="Email" className="metropolis">
              <EuiFieldText
                id="sharedInputStyles"
                placeholder="Enter your Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                aria-label="Email input"
              />
            </EuiFormRow>

            {/* PASSWORD */}
            <EuiFormRow
              id="formRowStyles"
              label="Password"
              className="metropolis"
            >
              <EuiFieldPassword
                id="sharedInputStyles"
                placeholder="Enter your Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                aria-label="Password input"
                style={{ paddingLeft: "40px" }}
              />
            </EuiFormRow>

            {/* LOGIN BUTTON */}

            <EuiButton id="loginSubmitButton" type="submit">
              Login
            </EuiButton>
          </form>
        </div>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Login;
