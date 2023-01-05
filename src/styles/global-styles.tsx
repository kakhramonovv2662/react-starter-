import { createGlobalStyle } from "styled-components";

// // IMPORT FONTS

import Poppins from "@/assets/fonts/poppins-v20-latin-regular.woff";
import PoppinsSecond from "@/assets/fonts/poppins-v20-latin-regular.woff2";
import PoppinsMedium from "@/assets/fonts/poppins-v20-latin-500.woff";
import PoppinsMediumSecond from "@/assets/fonts/poppins-v20-latin-500.woff2";
import PoppinsDemiBold from "@/assets/fonts/poppins-v20-latin-600.woff";
import PoppinsDemiBoldSecond from "@/assets/fonts/poppins-v20-latin-600.woff2";
import PoppinsBlack from "@/assets/fonts/poppins-v20-latin-800.woff";
import PoppinsBlackSecond from "@/assets/fonts/poppins-v20-latin-800.woff2";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('woff'),
         url(${PoppinsSecond}) format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Poppins';
    src: 
      url(${PoppinsMedium}) format('woff'),
      url(${PoppinsMediumSecond}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Poppins';
    src: 
      url(${PoppinsDemiBold}) format('woff'),
      url(${PoppinsDemiBoldSecond}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBlack}) format('woff'),
         url(${PoppinsBlackSecond}) format('woff2');
    font-weight: 800;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    padding: 0;
    background-color: #fff;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    display: block;
    text-decoration: none;
  }

  .container {
    max-width: 1280px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;
