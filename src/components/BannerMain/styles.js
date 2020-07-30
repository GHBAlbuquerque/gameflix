import styled from 'styled-components';

export const BannerMainContainer = styled.section`
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    /* mask: radial-gradient(circle, #FFFFFF 30%, transparent 100%); */
    /* mask: radial-gradient(ellipse, #FFFFFF 30%, transparent 100%); */
    mask: radial-gradient(ellipse, #FFFFFF 40%, #FFFFFF 50%,  transparent 80%);
    color: var(--white);
    height: 90vh;
    border-bottom: 1px solid var(--primary);

@media (max-width: 800px) {
    height: auto;
    min-height: 0vh;
    mask: radial-gradient(ellipse, #FFFFFF 40%,  transparent 100%);
    margin-bottom: 10px;
}
`;

export const ContentAreaContainer = styled.section`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    margin-left: 5%;
    margin-right: 5%;

    @media (max-width: 800px) {
        padding-top: 100px;
        flex-direction: column;
        /* margin: 0; */
    }
`;

ContentAreaContainer.Item = styled.div`
    width: 50%;
    margin-bottom: 50px;


    @media (max-width: 800px) {
        width: 90%;
    }
    
`;

ContentAreaContainer.Title = styled.h2`
    font-size: 35px;
    font-weight: 300;
    line-height: 1;
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

    @media (max-width: 800px) {
        display: block;
    }
`;