import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;

    padding: 30px;

    border-radius: 10px;
    background-color: gray;
`;

export const Title = styled.h1`
    margin-bottom: 40px;

    color: blue; 

    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ;  
    }
`;

export const Button = styled.button`
    width: 100%;

    margin: 7px 0;
    padding: 10px;

    border-radius: 5px;

    font-weight: bold;
    color: white;
    background-color: green;
    border: none;
    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }
`;
export const Input = styled.input`
    width: 100%;

    margin: 7px 0;
    padding: 10px;

    border-radius: 5px;
    border: none;
`;

