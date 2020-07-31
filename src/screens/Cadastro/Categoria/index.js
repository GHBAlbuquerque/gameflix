import React, { useState } from 'react';
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
  const [categorias, setCategorias] = useState([valoresIniciais]);

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
