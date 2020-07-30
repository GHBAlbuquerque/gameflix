import React from 'react';
import Logo from '../../assets/img/Logo.png'
import {LogoImage, MenuWrapper} from './styles'
import Button from '../Button'

// import './Menu.css';
// import ButtonLink from './ButtonLink';

function Menu() {
    return (
        <MenuWrapper>
                <a href="/">
                    <LogoImage src={Logo} alt="Gameflix Logo" />
                </a>

                <Button as='a' href="/" class='ButtonLink'>
                Novo Vídeo
                </Button>
        </MenuWrapper>
    );
}

export default Menu;

/*se fosse anonima
const Menu = () => {
}*/