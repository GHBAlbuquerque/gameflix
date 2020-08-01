import React from 'react';
import styled from 'styled-components';
import '../../index.css';
import Menu from '../Menu';
import Footer from '../Footer';
import { AppWrapper } from '../Wrapper';

const Main = styled.main`
    color: var(--white);
    flex: 1;
    padding: 50px 5% 20px 5%;
    height: auto;
`;

function PageDefault({ children }) {
  return (
    <AppWrapper>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </AppWrapper>
  );
}

export default PageDefault;

// usando destructor { children }, ali na hora de receber, posso usá-la direto sem colocar props.
