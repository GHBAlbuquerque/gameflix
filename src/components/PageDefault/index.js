import React, { Fragment } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import {AppWrapper} from '../../components/Wrapper'


function PageDefault(props) {

    return (
        <AppWrapper>
            <Menu />
                {props.children}
            <Footer />
        </AppWrapper>
    );
}

export default PageDefault;

// usando destructor { children }, ali na hora de receber, posso usá-la direto sem colocar props.