// ToastProvider.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import toast from "../../../Back-end/utils/toast";

const fade = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const ToastDiv = styled.div`
  width: 30%;
  position: fixed;
  top: 20px;
  right: 34%;
  background-color: ${(props) =>
    props.type === "success" ? "#4caf5030" : "#f4433630"};
  color: #121213;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-top: 2px solid
    ${(props) => (props.type === "success" ? "#4caf50" : "#f44336")};
  border-radius: 6px;
  font-weight: bold;
  animation: ${fade} 2s;
  z-index: 9999;

  @media (max-width: 768px) {
    width: 90%;
    right: 5%;
  }
`;

const ToastHeader = styled.div`
  position: relative;
  top: 0px;
  right: 0px;
  padding: 7px 16px;
  width: 100%;
  color: ${(props) => (props.type === "success" ? "#4caf50" : "#f44336")};
  font-weight: bold;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ToastMessage = styled.div`
  position: relative;
  top: 0px;
  right: 0px;
  padding: 12px 20px;
  width: 100%;
  color: #121213;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default function ToastProvider({ children }) {
  const [toastState, setToastState] = useState(null);

  useEffect(() => {
    // subscribe to toast events
    const unsubscribe = toast.subscribe(({ type, message }) => {
      setToastState({ type, message });
      setTimeout(() => setToastState(null), 2000);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {children}
      {toastState && (
        <ToastDiv type={toastState.type}>
          <ToastHeader type={toastState.type}>{toastState.type}</ToastHeader>
          <ToastMessage>{toastState.message}</ToastMessage>
        </ToastDiv>
      )}
    </>
  );
}
