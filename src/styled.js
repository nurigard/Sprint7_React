import { createGlobalStyle } from 'styled-components';
import CortinaTeatre from './assets/img/CortinaTeatre.jpg';


export const GlobalStyle = createGlobalStyle` 

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
       display:flex;
       flex-direction:column;
       justify-content:center;
       margin:0;
       padding:0;
       height: 100vh;
       background-image: url(${CortinaTeatre});
       
    }

`
