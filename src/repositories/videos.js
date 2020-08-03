import config from '../config';

const URL_VIDEOS = `${config.URL_API}/videos`;

function createVideos(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  }) // pq esse return?
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data; // estou dando minha data
      }
      throw new Error('Não foi possível cadastrar o video');
    });
}

export default {
  createVideos,
};
