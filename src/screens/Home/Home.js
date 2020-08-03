import React, { useEffect, useState } from '../../../node_modules/react';
import '../../index.css';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos() // estou dando return de uma promise
      .then((categoriasVideos) => {
        setDadosIniciais(categoriasVideos);
      })
      .catch((err) => {
        document.write(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[[0]].videos[0].titulo} // pegando links da api
            url={dadosIniciais[[0]].videos[0].url}
            videoDescription={dadosIniciais[[0]].videos[0].videoDescription}
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[1]}
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[2]}
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[3]}
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[4]}
          />

        </>
      )}

    </PageDefault>
  );
}

export default Home;
