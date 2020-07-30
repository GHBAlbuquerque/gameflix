import styled from 'styled-components';

export const VideoContainer = styled.div`

    padding-top: 56.25%;
    position: relative; /*assim posso mover os elementos filhos com referencia do proprio pai*/
    width: 100%;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const ResponsiveIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%; /*aqui estamos herdando o tamanho do pai. quem definir é o pai*/
`;