import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'


function CadastroCategoria() {
    
    return (
        <PageDefault>
            <h1>Página de cadastro de Vídeos</h1>

            <Link to='/cadastro/video'>
                Cadastrar Video
            </Link>
        </PageDefault>
    );

};

export default CadastroCategoria;