import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Field';
import { ButtonForm } from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

// MEU COMPONENTE COM STATE

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = { // crio um objeto que vai ter os campos da categoria
    titulo: '',
    descricao: '',
    cor: '#000000',
    // link_extra: {
    //   text: '',
    //   url: '',
    // },
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);
  /* vou puxar meu custom hook e abrir aqui dentro */

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        console.log(categoriasFromServer);
        setCategorias(categoriasFromServer);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias, // pegamos o que ja tinhamos
      values,
    ]);
    clearForm();
    history.push('/');
  }

  return (
    <PageDefault>
      <h1>
        Página de cadastro de Categorias:
        {values.titulo}
      </h1>
      <form onSubmit={handleSubmit}>

        <FormField
          labelName="Título da Categoria"
          value={values.titulo}
          handleChange={handleChange}
          type="text"
          name="titulo"
        />

        <FormField
          labelName="Descrição"
          value={values.descricao}
          handleChange={handleChange}
          type="textarea"
          name="descricao"
        />

        <FormField
          labelName="Cor"
          value={values.cor}
          handleChange={handleChange}
          type="color"
          name="cor"
        />

        {/* <FormField
          labelName="Conteúdo extra"
          value={values.link_extra.text}
          handleChange={handleChange}
          type="text"
          name="link_extra.text"
        />

        <FormField
          labelName="Conteúdo extra - link"
          value={values.link_extra.url}
          handleChange={handleChange}
          type="text"
          name="link_extra.url"
        /> */}

        <ButtonForm type="submit">
          Cadastrar
        </ButtonForm>
      </form>

      {/* {categorias.length === 0 && (
        <div>
          <h4>Loading...</h4>
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (<li key={`${categoria.titulo}`}>{categoria.titulo}</li>))}
      </ul>

      <Link to="/cadastro/video">
        Cadastrar Video
      </Link> */}
    </PageDefault>
  );
}

export default CadastroCategoria;

// eslint-disable-next-line spaced-comment
/*PODERIA TER FEITO ASSIM

const URL_API = 'http://localhost:8080/categorias';

  async function getCategory(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setCategorias([
      ...categorias,
      ...data,
    ]);
    console.log(categorias);
    // return data;
  }

  useEffect(() => {
    setTimeout(() => { getCategory(URL_API); }, 3000);
  }, []);

  https://gameflix-ghba.herokuapp.com/categorias

  -------OLD-------
  // useEffect(() => {
  //   const URL_API = window.location.hostname.includes('localhost')
  //     ? 'http://localhost:8080/categorias'
  //     : 'https://gameflix-ghba.herokuapp.com/categorias';

  //   fetch(URL_API)
  //     .then(async (response) => {
  //       const data = await response.json();
  //       setCategorias([
  //         ...data,
  //       ]);
  //     });
  // }, []);*/
