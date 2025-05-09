import styled from "styled-components";

export const Container = styled.div`
background: #000;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
padding: 50px;
max-width: 1200px;

iframe {
    border: none;
}
`
export const Background = styled.div`
height: 100vh;
width: 100vw;
z-index: 999;
background-color: rgba(0, 0, 0, 0.7);
position: absolute;
display: flex;
align-items: center;
justify-content: center;
`
export const CloseButton = styled.button`
    position: absolute; 
    top: 1rem; 
    right: 1rem;
    background: transparent; 
    border: none;
    font-size: 2rem; 
    color: white; 
    cursor: pointer; 

    &:hover {
        color: red; 
        transition: color 0.3s; 
    }

    &:active {
        opacity: 0.9; 
        transform: scale(0.9);
    }
`;
