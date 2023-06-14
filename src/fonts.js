import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        src: url('../fonts/poppins.woff2') format('woff2'),
             url('../fonts/poppins.woff') format('woff');
      }

    `}
  />
);
