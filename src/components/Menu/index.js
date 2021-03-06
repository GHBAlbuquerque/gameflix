import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper, DivButton } from './styles';
import { Button } from '../Button';

// import './Menu.css';
// import ButtonLink from './ButtonLink';

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage src={Logo} alt="Gameflix Logo" />
      </Link>

      <DivButton>
        <Button as={Link} to="/cadastro/categoria">
          Nova Categoria
        </Button>

        <Button as={Link} to="/cadastro/video">
          Novo Vídeo
        </Button>
      </DivButton>
    </MenuWrapper>
  );
}

export default Menu;

/* se fosse anonima
const Menu = () => {
} */
