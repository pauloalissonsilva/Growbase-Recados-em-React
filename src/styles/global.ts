import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #000;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto slab ,sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }
`;
