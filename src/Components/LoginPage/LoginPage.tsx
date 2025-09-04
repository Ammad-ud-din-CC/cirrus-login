/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
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
import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Login = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mail || !pass) {
      setError("An error occurred: Email and Password are required.");
    } else {
      setError("");
    }
  };

  // ------------------------------------------------------------- CONTAINER

  const loginContainer = css`
    height: 100vh;
    background: url("/LoginPage/LoginBg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: end;
  `;

  // ------------------------------------------------------------- LEFT ITEMS

  const loginItemLeft = css`
    @media (max-width: 767px) {
      display: none;
    }
  `;

  // ------------------------------------------------------------- RIGHT ITEMS

  const loginItemRight = css`
    position: relative;
    background: rgba(255, 255, 255, 0.57);
  `;

  const CirrusLogoImage = css`
    position: absolute;
    top: 48px;
    left: calc(50% - 100px);
  `;

  // --------------------------- FORM STYLES

  // FORM TITLE

  const loginFormTitle = css`
    font-family: "Metropolis";
    text-align: center;
    color: #414141ff;
    font-weight: 300;
  `;

  // FORM INPUT FIELDS STYLES

  const sharedInputStyles = css`
    font-size: 12px;
    background: transparent;
    outline: none;
    padding: 8px;
    border: 1px solid #d2d9e1;
    border-radius: 6px;
    color: #000000;
    ::placeholder {
      color: rgba(0, 0, 0, 0.7);
    }

    &:focus {
      outline: none;
      background: rgba(223, 226, 232, 0.4);
      box-shadow: 0px 2px 0px 0px rgba(32, 86, 126, 1);
    }
  `;

  // FORM ROW

  const formRowStyles = css`
    font-family: "Metropolis";
    font-size: 12px !important;
  `;

  // SUBMIT BUTTON

  const loginSubmitButton = css`
    background: #20567e;
    border-radius: 6px;
    font-size: 12px;
    width: 50%;
    padding: 8px;
    color: white;
    margin: 0 auto;
    border: none;
    &:hover {
      filter: brightness(1.25);
      background: #20567e;
    }
  `;

  // ERROR BOX

  const errorBoxStyles = css`
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff4d4f;
    padding: 10px 16px;
    border-radius: 6px;
    font-size: 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  `;

  return (
    <EuiFlexGroup
      wrap
      responsive
      css={loginContainer}
      justifyContent="spaceBetween"
      gutterSize="none"
    >
      {/* ------------------------------------------------------------ LEFT ITEM WITH GRADIENT */}
      <EuiFlexItem css={loginItemLeft} grow={6}></EuiFlexItem>

      {/* ------------------------------------------------------------ RIGHT ITEM WITH FORM */}
      <EuiFlexItem css={loginItemRight} grow={4}>
        <EuiImage
          css={CirrusLogoImage}
          src={"/LoginPage/CirrusAILogo.png"}
          alt="Cirrus AI Logo"
          width={200}
          height={60}
        />
        <EuiFlexGroup
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {/* ------------------------------------------------------------ Error message */}
          {error && (
            <EuiFlexGroup
              alignItems="center"
              justifyContent="flexStart"
              css={errorBoxStyles}
              color="subdued"
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

          <EuiPanel
            color="subdued"
            grow={false}
            hasBorder={false}
            hasShadow={true}
            paddingSize="l"
            css={css`
              width: 376px;
              @media (max-width: 950px) {
                width: 270px;
              }
              border-radius: 12px;
              background-opacity: 0.8;
            `}
          >
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
                    fullWidth
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
                    fullWidth
                    css={sharedInputStyles}
                    style={{ paddingLeft: "40px" }}
                    placeholder="Enter your Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    aria-label="Password input"
                    inputRef={passwordRef}
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
