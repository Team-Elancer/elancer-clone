import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // style-reset 패키지

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: 'KoPubWorldDotum', sans-serif;
        font-size: 10px;                        
        color: black;        
    }    
`;

export default GlobalStyles;
