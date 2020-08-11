import styled from 'styled-components';

const VideoCardContainer = styled.a`
    height: 197px;
    width: 298px;
    border: 2px solid;
    border-radius: 10px;
    display: block;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    }
`;

export default VideoCardContainer;
