/** @jsxImportSource @emotion/react */
"use client";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import React from "react";
import LoginForm from "./LoginForm";
import Image from "next/image";

const Login = () => {
  return (
    <EuiFlexGroup
      alignItems="flexEnd"
      justifyContent="spaceBetween"
      css={{
        background: `url("/LoginPage/LoginBg.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        overflow: "clip",
        width: "100%",
        gap: 7,
      }}
    >
      {/* LEFT ITEM WITH GRADIENT */}
      <EuiFlexItem
        grow={true}
        css={{
          width: "100%",
          maxWidth: "60%",
          height: "100vh",
          position: "relative",
          background:
            "linear-gradient(180deg, rgba(10,50,87,0), rgba(10,50,87,0.2), rgba(10,50,87,1))",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            background: "rgba(10,50,87,1)",
            opacity: 0.7,
            width: "400px",
            height: "350px",
            filter: "blur(100px)",
          }}
        />
      </EuiFlexItem>

      {/* RIGHT ITEM WITH FORM */}
      <EuiFlexItem
        css={{
          position: "relative",
          maxWidth: "40%",
          height: "100vh",
          background: "rgba(255, 255, 255, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={"/LoginPage/CirrusAILogo.png"}
          alt="Cirrus AI Logo"
          width={300}
          height={100}
          css={{ position: "absolute", top: 20, left: "calc(50% - 150px)" }}
        />
        <LoginForm />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Login;
