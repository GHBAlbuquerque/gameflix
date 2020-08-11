import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/Field';
import { ButtonForm } from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categorytTitles = categorias.map(({ titulo }) => titulo);
  const valoresIniciais = { // crio um objeto que vai ter os campos da categoria
    titulo: '',
    url: '',
    categoria: '',
  };

  const { values, handleChange } = useForm(valoresIniciais);

  function handleSubmit(event) {
    event.preventDefault();

    // eslint-disable-next-line max-len
    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

    videosRepository.createVideos({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.Id,
    })
      .then(() => {
        history.push('/');
      });
  }

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      }); // está sem validação...
  }, []);

  return (
    <PageDefault>
      <h1>Página de cadastro de Vídeos</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          labelName="Título do Vídeo"
          value={values.titulo}
          handleChange={handleChange}
          type="text"
          name="titulo"
        />

        <FormField
          labelName="Url do Vídeo"
          value={values.url}
          handleChange={handleChange}
          type="text"
          name="url"
        />

        <FormField
          labelName="Categoria"
          value={values.categoria}
          handleChange={handleChange}
          type="text"
          name="categoria"
          suggestions={categorytTitles}
        />

        <ButtonForm type="submit">
          Cadastrar
        </ButtonForm>
      </form>
      {/*
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link> */}
    </PageDefault>
  );
}

export default CadastroVideo;
