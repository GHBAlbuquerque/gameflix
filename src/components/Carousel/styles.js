import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
    color: var(--white);
    margin-left: 3%;
    margin-bottom: 20px;
    min-height: 197px;
`;

export const Title = styled.h3`
    border-radius: 5px;
    display: inline-block;
    font-size: 25px;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 0px;
    padding: 15px 20px 15px 20px;

    @media (max-width: 800px) {
        font-size: 18px;
        margin-bottom: 14px;
        padding: 7px 10px 7px 10px;
    }
`;

export const ExtraLink = styled.a`
    font-size: 18px;
    margin-left: 10px;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover,
    &:focus {
        opacity: 0.5;
    }

    @media (max-width: 800px) {
    display: block;
    font-weight: 300;
    font-size: 16px;
    margin-left: 0;
    margin-bottom: 16px;
    }
`;

// export const VideoCardList = styled.ul`
//     list-style: none;
//     padding-left: 0;
//     display: flex;
//     overflow-x: auto;

// `;

