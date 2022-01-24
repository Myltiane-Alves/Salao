import styled from 'styled-components';

export const Container = styled.div`
    flex-direction: column;
    nav {
       ul {
           flex-direction: column;
           margin: 0;
           padding: 0;
           width: 100%;
           li{
               list-style: none;
               a {
                   text-decoration: none;
                   color: gray;
                   font-size: 1.5rem;
               }
           }
       } 
       .footer {
           flex-direction: column;
           align-items: center;
           width: 100%;
           background-color: red;
           button {
               align-items: center;
               width: 5rem;
               height: 2.5rem;
               background-color: green;
               border: 1px solid green;
               border-radius: 0.5rem;
           }
       }
    }
`;