import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: color .15s ease, background-color .15s ease;
        font-family: 'Poppins', sans-serif;
    }
    body {
        overflow-x: hidden;
        font-size: 1.1vw;
        scrollbar-width: none;
        max-width: 2500px;
        margin: 0 auto;
    }

    body::-webkit-scrollbar {
        display: none;
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    .swiper-button-prev, .swiper-button-next {
        visibility: hidden;
    }
`;

export { GlobalStyles };
