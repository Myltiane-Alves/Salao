import styled from 'styled-components';

export const Container = styled.div`
    flex-direction: column;
   
`;

export const Content = styled.header`
       flex-direction: column;
       nav {
        padding-bottom: 10rem;
        background-color: yellow;
        margin-bottom: 100rem;
        flex-direction: column;
      
        background-color: aliceblue(0,0,0,.5);
        bottom: 0;
        display: none;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        transition: all .5s ease-in;
        z-index: 20;
     
       ul {
           flex-direction: column;
           margin: 0;
           bottom: 0;
           max-width: 320px;
           padding: 0;
           position: fixed;
           //right: -100vw;
           top: 0;
           transition: all .5s ease;
           width: calc(100vw - 60px);
           z-index: 10;
           li{
               list-style: none;
               padding: 0;
               a {
                   display: flex;
                   text-decoration: none;
                   text-transform: uppercase;
                   color: gray;
                   font-size: 1.5rem;
               }
           }
       } 
       .footer {
           flex-direction: column;
           align-items: center;
           width: 100%;
           
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
    @media (min-width: 1280px) {
     background-color: black;
     right: initial;
     width: 100%;
     flex-direction: row;
     padding: 0;
     margin: 0;
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-left: 150px;     
            
     .desktop {
        right: initial;
        position: static;
        width: 100%;
        margin: 0 auto;
        max-width: 1140px;
        nav {
        width: 100%;
            ul {
             flex-direction: row;
             background-color: yellow;
             align-items: center;
             justify-content: flex-start;
             display: flex;
             height: 60px;
             margin: 0;
             padding: 0;
                li {
                  list-style: none;
                  display: flex;
                  a {
                    text-decoration: none;
                    font-size: 1.5rem;
                    text-align: center;
                  }
                }
            }
        }
     }
    }
`;