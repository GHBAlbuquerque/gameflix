import styled from "styled-components";

export const Button = styled.button`
    border: 1px solid var(--white);
    border-radius: 5px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 12px 20px;
    text-decoration: none;

    &:hover,
    &:active {
        opacity: 0.5;
    }

    @media (max-width: 800px) {
        background-color: var(--primary);
        border: none;
        border-radius: 0;
        bottom: 0;
        position: fixed;
        text-align: center;
        width: 100%;
        z-index: 100;

        &:hover,
        &:active {
            opacity: 1;
        }
    }
`;

export default Button;

//O STYLED COMPONENT CRIA UM COMPONENTE BASICAMENTE SÓ COM CSS. ELE RECEBE AS PROPS "AUTOMATICAMENTE"