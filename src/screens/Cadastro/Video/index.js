import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'


function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Página de cadastro de Vídeos</h1>

            <Link to='/cadastro/categoria'>
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );

}

export default CadastroVideo;