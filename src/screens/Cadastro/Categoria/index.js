import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Field';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = { // crio um objeto que vai ter os campos da categoria
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [values, setValues] = useState(valoresIniciais); // é um objeto!!
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_API = 'https://gameflix-ghba.herokuapp.com/categorias';

    fetch(URL_API)
      .then(async (response) => {
        const data = await response.json();
        setCategorias([
          ...data,
        ]);
      });
  }, []);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValue(event.target.name, // ou getAttribute("name")
      event.target.value);
    // console.log(event.target.name,event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias, // pegamos o que ja tinhamos
      values,
    ]);
    setValues({ nome: '', descricao: '', cor: '#000000' });
  }

  return (
    <PageDefault>
      <h1>
        Página de cadastro de Categorias:
        {values.nome}
      </h1>
      <form onSubmit={handleSubmit}>

        <FormField
          labelName="Nome da Categoria"
          value={values.nome}
          handleChange={handleChange}
          type="text"
          name="nome"
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

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        <h4>Loading...</h4>
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (<li key={`${categoria.nome}`}>{categoria.nome}</li>))}
      </ul>

      <Link to="/cadastro/video">
        Cadastrar Video
      </Link>
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

  */
