import styled from 'styled-components';

export const LogoImage = styled.img`
    max-width: 168px;

    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    align-items: center; /*usado com o flex para ajustar verticalmente*/
    background-color: var(--black);
    border-bottom: 1px solid var(--primary);
    display: flex; /*vai aplicar flex no CONTEÚDO*/
    height: 94px;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    position: fixed; /*quando colocamos qualquer coisa aqui que nao seja auto, podemos alterar a referência*/
    transition: opacity .3s;
    width: 100%; /*em todos os tamanhos de tela terá 100%*/
    z-index: 100;

    right: 0;
    top: 0;
    left: 0;

    @media (max-width: 800px) {
    height: 45px;
    justify-content: center;
    }
`;
/*estou importanto um styled component dentro de um styled component e editando ele*/
