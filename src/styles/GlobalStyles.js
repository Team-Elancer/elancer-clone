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

    .swiper-button-prev{
        left: 0;
    }
    
    .swiper-button-next{
        right: 0;
    }

    .swiper-button-prev,
    .swiper-button-next {        
        border-radius: 50%;
        width: 48px;
        height: 48px;                  
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {            
        font-size: 11px;
        color: grey;
        background: #ededed;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;    
    }
`;

export default GlobalStyles;
