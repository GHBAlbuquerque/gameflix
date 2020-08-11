import config from '../config';

const URL_CATEGORIES = `${config.URL_API}/categorias`;

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

function createCategoria(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw new Error('Não foi possível cadastrar Categoria');
    });
}

export default {
  getAllWithVideos,
  getAll,
  createCategoria,
};
