import styled from 'styled-components';

export const Button = styled.button`
    border: 1px solid var(--white);
    border-radius: 5px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 12px 20px;
    text-decoration: none;
    margin-left: 0.5rem;

    &:hover,
    &:active {
        opacity: 0.5;
        border-color: var(--primary);
    }

    a {
        text-decoration:none;
    }

    @media (max-width: 800px) {
        background-color: var(--primary);
        border: none;
        border-bottom: 1px solid var(--white);
        border-radius: 0;
        /* bottom: 0;
        position: fixed; */
        font-size: 14px;
        text-align: center;
        width: inherit;
        z-index: 100;
        margin-left: 0;
        display: inline-block;

        &:hover,
        &:active {
            opacity: 1;
        }
    }
`;

export const ButtonForm = styled.button`
border: 1px solid var(--white);
border-radius: 5px;
color: var(--primary);
font-size: 16px;
font-weight: bold;
padding: 12px 20px;
text-decoration: none;
margin-left: 0.5rem;

&:hover,
&:active {
    opacity: 0.5;
    border-color: var(--primary);
}

a {
    text-decoration:none;
}

@media (max-width: 800px) {
    background-color: var(--primary);
    border: none;
    font-size: 14px;
    text-align: center;
    width: inherit;
    z-index: 100;

    &:hover,
    &:active {
        opacity: 1;
    }
}
`;

// STYLED COMPONENT CRIA UM COMPONENTE BASICAMENTE SÓ COM CSS. ELE RECEBE AS PROPS "AUTOMATICAMENTE"
// se ao inves e usar o button. eu quisesse usar o Link que me foi pasado com <Link to= >
// bastaria colocar Button = styled(Link)
