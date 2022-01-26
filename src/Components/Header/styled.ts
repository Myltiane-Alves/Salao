import styled from 'styled-components';

export const Container = styled.div`
    flex-direction: column;
    width: 100%; 
    height: 60px;

`;

export const Content = styled.header`
    transition: right .5s ease-in-out; 
    width: 300px;
    padding-bottom: 50px;
    position: fixed;
    top: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    > div {
        width: 100%;
        margin-top: 2rem;
        .logo {
            width: 100%;
            font-size: 1.5rem;
            text-decoration: none;
            color: gray;
            margin-left: 6rem;
        }
        
    }
    nav {
     flex-direction: column;
     justify-content: center;
     align-items: center;
    
        /*.overlay {
            background-color: aliceblue(0,0,0,.5);
            bottom: 0;
            display: none;
            left: 0;
            position: fixed;
            right: 0;
            top: 0;
            transition: all .5s ease-in;
            z-index: 20;
        }*/
     ul {
        flex-direction: column;
        margin: 0;
        padding: 0;
        width: 100%;     

        //right: -100vw;
        margin-top: 169px;
        //transition: all .5s ease;
        overflow-y: auto;
        z-index: 10;
        li{
         list-style: none;
         padding: 14px 0;
         text-align: center;
         a {
          text-decoration: none;
          text-transform: uppercase;
          color: gray;
          font-size: 1.5rem;
          font-weight: 600;
          text-align: center;
         }
        }
        margin-bottom: 1rem;
     } 
       .footer {
           flex-direction: column;
           align-items: center;
           width: 100%;
           
           button {
               justify-content: center;
               align-items: center;
               width: 10rem;
               height: 3rem;
               background-color: green;
               border: 1px solid green;
               border-radius: 0.5rem;
               color: #FFF;
               font-size: 1.5rem;
               margin-left: 4rem;
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