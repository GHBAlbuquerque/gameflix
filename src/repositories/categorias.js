import config from '../config';

const URL_CATEGORIES = `${config.URL_API}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`) // pq esse return?
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data; // estou dando minha data
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`) // pq esse return?
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data; // estou dando minha data
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
