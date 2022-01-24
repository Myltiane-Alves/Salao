import styled from 'styled-components';

export const ContentFooter = styled.div`
    flex-direction: column;
    ul {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    
       li {
           list-style: none;
          
            width: 100%;
            margin: 0;
           a {
               display: flex;
               align-items: center;
               justify-content: space-between;
               text-decoration: none;
               font-size: 2rem;
               color: red;
               
               width: 100%;
               .icon {
               }
           }
       } 
    }
`;