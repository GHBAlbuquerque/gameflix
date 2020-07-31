import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo, //é um parametro vazio, que, quando ele existe (ou seja, é true) é usado para ignorar a lista ali embaixo
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor; //está pegando minha cor aqui, e passando ali no no background color do meu title
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      {/* Antigo VideoCard List */}
      <Slider categoryColor={categoryColor}> 
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            // {/* Antigo li */}
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
