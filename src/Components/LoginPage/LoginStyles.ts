import { css } from "@emotion/react";

// ------------------------------------------------------------- CONTAINER

export const loginContainer = css`
  height: 100vh;
  background: url("/LoginPage/LoginBg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

// ------------------------------------------------------------- LEFT ITEMS

export const loginItemLeft = css`
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(10, 50, 87, 0),
    rgba(10, 50, 87, 0.2),
    rgba(10, 50, 87, 1)
  );
`;

export const overlayRectangle = css`
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(10, 50, 87, 1);
  opacity: 0.7;
  width: 400px;
  height: 350px;
  filter: blur(100px);
`;

// ------------------------------------------------------------- RIGHT ITEMS

export const loginItemRight = css`
  position: relative;
  background: rgba(255, 255, 255, 0.7);
`;

export const CirrusLogoImage = css`
  position: absolute;
  top: 20px;
  left: calc(50% - 150px);
`;

// --------------------------- FORM STYLES

// FORM TITLE

export const loginFormTitle = css`
  font-family: "Metropolis";
  text-align: center;
  color: #414141ff;
  font-weight: 300;
`;

// FORM INPUT FIELDS STYLES

export const sharedInputStyles = css`
  font-size: 12px;
  background: transparent;
  outline: none;
  padding: 8px;
  border: 1px solid #d2d9e1;
  border-radius: 6px;
  width: 100%;
  color: #000000;
  ::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }

  &:focus {
    outline: none;
    background: rgba(223, 226, 232, 0.4);
    box-shadow: 0 0 0 2px rgba(32, 86, 126, 0.4);
  }
`;

// FORM ROW

export const formRowStyles = css`
  font-family: "Metropolis";
  font-size: 12px !important;
`;

// SUBMIT BUTTON

export const loginSubmitButton = css`
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
`;

// ERROR BOX

export const errorBoxStyles = css`
  position: absolute;
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
