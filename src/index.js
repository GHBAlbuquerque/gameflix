import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import CadastroVideo from './screens/Cadastro/Video'
import CadastroCategoria from './screens/Cadastro/Categoria'

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/'component={Home}/>
      <Route exact path='/cadastro/video' component={CadastroVideo}/>
      <Route exact path='/cadastro/categoria' component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

//o ultimo route é sempre o que vai ser carregado se ele nao achar os outros