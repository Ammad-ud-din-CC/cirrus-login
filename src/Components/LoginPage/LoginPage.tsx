/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import "./LoginStyles.ts";
import {
  EuiButton,
  EuiFieldPassword,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiImage,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  CirrusLogoImage,
  errorBoxStyles,
  formRowStyles,
  loginContainer,
  loginFormTitle,
  loginItemLeft,
  loginItemRight,
  loginSubmitButton,
  overlayRectangle,
  sharedInputStyles,
} from "./LoginStyles";

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
      css={loginContainer}
      justifyContent="spaceBetween"
      gutterSize="none"
    >
      {/* ------------------------------------------------------------ LEFT ITEM WITH GRADIENT */}
      <EuiFlexItem css={loginItemLeft} grow={6}>
        <EuiPanel css={overlayRectangle} paddingSize="none" />
      </EuiFlexItem>

      {/* ------------------------------------------------------------ RIGHT ITEM WITH FORM */}
      <EuiFlexItem css={loginItemRight} grow={4}>
        <EuiImage
          css={CirrusLogoImage}
          src={"/LoginPage/CirrusAILogo.png"}
          alt="Cirrus AI Logo"
          width={300}
          height={100}
        />
        <EuiFlexGroup
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <EuiPanel
            grow={false}
            hasBorder={false}
            hasShadow={true}
            paddingSize="l"
            css={css`
              width: 50%;
              border-radius: 12px;
            `}
          >
            {/* ------------------------------------------------------------ Error message */}
            {error && (
              <EuiFlexGroup
                alignItems="center"
                justifyContent="flexStart"
                css={errorBoxStyles}
              >
                <AiOutlineClose
                  css={css`
                    &:hover {
                      cursor: pointer;
                    }
                  `}
                  onClick={() => setError("")}
                />{" "}
                {error}
              </EuiFlexGroup>
            )}

            {/* ------------------------------------------------------------ FORM CONTAINER */}
            <EuiForm component="form" onSubmit={handleSubmit}>
              <EuiFlexGroup
                justifyContent="center"
                direction="column"
                gutterSize="none"
              >
                {/* TITLE */}
                <EuiTitle size="l" css={loginFormTitle}>
                  <h1>Login</h1>
                </EuiTitle>

                <EuiSpacer size="s" />

                {/* EMAIL */}
                <EuiFormRow css={formRowStyles} label="Email">
                  <EuiFieldText
                    css={sharedInputStyles}
                    placeholder="Enter your Email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    aria-label="Email input"
                  />
                </EuiFormRow>

                {/* PASSWORD */}
                <EuiFormRow css={formRowStyles} label="Password">
                  <EuiFieldPassword
                    css={sharedInputStyles}
                    placeholder="Enter your Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    aria-label="Password input"
                    style={{ paddingLeft: "40px" }}
                  />
                </EuiFormRow>

                {/* LOGIN BUTTON */}

                <EuiButton css={loginSubmitButton} type="submit">
                  Login
                </EuiButton>
              </EuiFlexGroup>
            </EuiForm>
          </EuiPanel>
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Login;
