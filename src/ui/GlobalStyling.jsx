import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyling = createGlobalStyle`
  :root {
    --Main-color-black: #121213;
    --Main-color-white: #fefefe;
    --Main-color-gray: #787c7e;
    --Main-color-green: #6aaa64;
    --Main-color-yellow: #c9b458;

    --Secondary-color-black: #787c7e;
    --Secondary-color-gray: #35353a;
    --Secondary-color-green: #6aaa64;
    --Secondary-color-yellow: #c9b458;

    --Thirtary-color-gray: #D3D3D3;
    --Thirtary-color-black: #0e0e0e;

    --Main-border-block: 2px solid;

    --Main-font: "Poppins", sans-serif;
    --Secondary-font: "BBH Hegarty", sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    background: var(--Main-color-white);
    color: var(--Main-color-black);
    font-family: var(--Main-font);
  }
`;
