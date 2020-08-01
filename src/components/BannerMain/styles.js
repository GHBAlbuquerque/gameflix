import styled from 'styled-components';

export const BannerMainContainer = styled.section`
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    border-bottom: 1px solid var(--primary);
    color: var(--white);
    height: 90vh;
    position: relative;
    /* mask: radial-gradient(circle, #FFFFFF 30%, transparent 100%); */
    /* mask: radial-gradient(ellipse, #FFFFFF 30%, transparent 100%); */

@media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
    margin-bottom: 10px;
    /* mask: radial-gradient(ellipse, #FFFFFF 40%,  transparent 100%); */
}

`;

export const ContentAreaContainer = styled.section`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 100px;

    @media (max-width: 800px) {
        flex-direction: column;
        text-align:center;
        /* padding-top: 100px; */
        /* margin: 0; */
    }

}
    &:after,
    &:before {
        content: ""; /*é como se eu cirasse um elemento antes dos meus elementos*/
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        height: 20%;
    }
    &:before {
        top: 0;
        height: 100%;
        background: rgba(0,0,0,0.4); /*CRIEI UM FUNDO PRETO aplicando através do filho, o efeito no background, se eu colocasse direto no pai, ia ficar preto*/
        /* background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 80%); */
    }
    &:after {
        bottom: 0;
        background: linear-gradient(0deg, #141414 0%, transparent 100%);
    }
`;

ContentAreaContainer.Item = styled.div`
    width: 50%;
    margin-bottom: 50px;
    /* &:nth-child(1) {
        background-color: rgba(255, 255, 255, 0.2);
        padding: 10px;
        margin-right: 20px;
    }  */


    @media (max-width: 800px) {
        width: 90%;
    }
    
`;

ContentAreaContainer.Title = styled.h2`
    font-size: 35px;
    font-weight: 300;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 32px;

    @media (max-width: 800px) {
        font-size: 28px;
        line-height: 1.2;
        text-align: center;
    }
`;

ContentAreaContainer.Description = styled.p`

@media (max-width: 800px) {
        display: none;
    }
`;

ContentAreaContainer.Category = styled.h1`


`;


export const WatchButton = styled.button`
    display: none;
    background-color: var(--white);
    border: 0;
    border-radius: 4px;
    color: var(--black);
    cursor: pointer;
    font-weight: normal ;
    font-size: 1.5em;
    outline: none;
    padding: 16px 24px;
    margin-left: auto;
    margin-right: auto;
    text-decoration:none;

    @media (max-width: 800px) {
        display: inline-block;

    }
`;