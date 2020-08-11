import React from 'react';
import { FooterBase, FooterLink } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <FooterLink href="https://www.alura.com.br/">
          Imersão React da Alura
        </FooterLink>
        {' '}
        por Giovanna Albuquerque
      </p>
    </FooterBase>
  );
}

export default Footer;
