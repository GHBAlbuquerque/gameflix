import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  
  position: relative;
  
  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
    height: 80px;
  }
`;

const Label = styled.label`
`;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;

  padding: 16px 16px;
  margin-bottom: 30px;

  resize:none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span { /* + É O SELETOR DE NEXT SIBLING, por isso passei o label para depois ali em baixo*/
    transform: scale(.6) translateY(-10px); /*no caso, o FOCUS:NOT é para ignorar quando meu elemento input tiver type=color!*/
  }

  ${function ({ hasValue }) { /* com esse value true ou false, crio uma função que vai manter o texto pequeno se true */
    return hasValue && css`
    &:not([type="color"]) + span { /* É O SELETRO DE NEXT SIBLING, por isso passei o label para depois*/
    transform: scale(.6) translateY(-10px);
  }
    `;
  }}
`; // tag de template string: pesquisae

function FormField({
  labelName, type, name, value, handleChange,
}) {
  const fieldId = `Id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length); // vendo se eu tenho um value p/ usar no styled components

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>

        <Input
          as={tag} // só funciona para components. decido o que vai ser baseado no meu tag em cima
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={handleChange}
        />

        <Label.Text>
          {labelName}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  handleChange: () => {},
};

FormField.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FormField;
