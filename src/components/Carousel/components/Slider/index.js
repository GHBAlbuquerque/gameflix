import React from 'react';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import PropTypes from 'prop-types';

const Container = styled.ul`
    padding: 0;
    padding-top: 10px;
    margin: 0;
    .slick-prev,
    .slick-next {
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 30px;
        height: 30px;
        /* color: inherit; */
        /* border: 4px solid; */
        /* border-radius: 50px; */
        transform: initial;
        &:before {
        font-size: 30px;
        }
    }
    
    .slick-prev {
        left: 0;
    }
    .slick-next {
        right: 16px;
    }
    `;

export const SliderItem = styled.li`
    margin-right: 16px;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
        transform: scale(1.1);
    }
`;

const Slider = ({ children, categoryColor }) => (
  <Container style={{ color: categoryColor }}>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

Slider.defaultProps = {
  categoryColor: '',
};

Slider.propTypes = {
  categoryColor: PropTypes.string,
};

export default Slider;
