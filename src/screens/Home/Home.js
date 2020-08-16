import React, { useEffect, useState } from '../../../node_modules/react';
import '../../index.css';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(async () => {
    try {
      const categoriasVideos = await categoriasRepository.getAllWithVideos();
      setDadosIniciais(categoriasVideos);
    } catch (err) {
      document.write(err.message);
    }
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length >= 1 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) { // para meu item o 1 da lista, faço isso
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return ( // para os demais, isso
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
