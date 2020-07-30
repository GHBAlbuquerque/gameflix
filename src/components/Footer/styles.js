import styled from 'styled-components';


export const FooterBase = styled.footer`
    background-color: var(--black);
    border-top: 1px solid var(--primary);
    text-align: center;
    padding: 30px 16px;
    color: var(--white);


    @media (max-width: 800px) {
        margin-bottom: 40px;
        font-size: 0.8;
        font-weight: 300;
    }
`;

export const FooterLink = styled.a`
    color: inherit;
    text-decoration: none;
    font-weight: 400;

    &:hover,
    &:focus {
    opacity: 0.5;
    }
`;
