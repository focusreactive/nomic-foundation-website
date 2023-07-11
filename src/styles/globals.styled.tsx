import {media} from "../themes";
import {css} from "@linaria/core";

export const globals = css`
  :global() {
    :root {
      --top-banner-height: 55px;
      --header-height: 112px; 

      ${media.brp1024} {
        --top-banner-height: 46px;
        --header-height: 80px;
      }
    }

    html,
    body {
      padding: 0;
      margin: 0;
      font-family: 'EncodeSans';
      scroll-behavior: smooth;
    }

    body.LIGHT {
      background-color: #F7F7FA;
    }

    body.DARK {
      background-color: #13141A;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    /* @font-face {
      font-family: 'EncodeSans';
      src: url('../assets/EncodeSans/EncodeSans-Medium.ttf');
      font-weight: 400;
      font-style: normal;
    } */

    @font-face {
      font-family: 'EncodeSans';
      src: url('/fonts/EncodeSans.woff2') format('woff2'),
      url('/fonts/EncodeSans.woff') format('woff'),
      url('/fonts/EncodeSans.ttf') format('ttf');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }

    a {
      width: fit-content;
    }
  }
`
