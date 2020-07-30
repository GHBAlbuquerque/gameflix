import React from 'react';
import styled from 'styled-components';
import './App.css';
import './index.css';
import dadosIniciais from './data/dados_iniciais.json'
import Menu from './components/Menu';
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

const AppWrapper = styled.div `
  background: var(--grayDark);
  padding-top: 94px;
  /* position: relative;
  z-index: -100; */

  @media (min-width: 800px) {
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo} //estou estrando na minha "API" e pegando os links
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={dadosIniciais.categorias[0].videos[0].videoDescription}
      ></BannerMain>

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]} //estou passando minha categoria inteira
      ></Carousel>

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]} //estou passando minha categoria inteira
      ></Carousel>

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]} //estou passando minha categoria inteira
      ></Carousel>

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]} //estou passando minha categoria inteira
      ></Carousel>

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]} //estou passando minha categoria inteira
      ></Carousel>

      <Footer></Footer>
    </AppWrapper>
  );
}

export default App;
