import styled from 'styled-components';

export const ContentFooter = styled.div`
    flex-direction: column;
    ul {
        display: flex;
        align-items: center;
        gap: 1.5rem;
       li {
           list-style: none;
           a {
               align-items: center;
               justify-content: center;
               text-decoration: none;
               font-size: 2rem;
               color: red;
               .icon {
                    box-sizing: border-box;
                    display: inline-block;
                    overflow: hidden;
                    width: initial;
                    height: initial;
                    background: none;
                    opacity: 1;
                    border: 0;
                    margin: 0;
                    padding: 0;
                    position: relative;
                    max-width: 100%;
               }
           }
       } 
    }
`;