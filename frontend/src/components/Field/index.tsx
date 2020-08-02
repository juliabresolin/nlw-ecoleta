import React from 'react';
import { Container } from './styles';

interface Props {
  labelFor: string,
  labelText: string,

  inputType?: string,
  name?: string,
  id?: string
}

const Field: React.FC<Props> = (props) => {
  return (
    <Container>
      <label htmlFor={ props.labelFor }>{ props.labelText } </label>
      { props.inputType && <input type={ props.inputType } name={ props.name } id={ props.id }/>}
      { !props.inputType && <select name={ props.name } id={ props.id }><option value="0"> Selecione uma cidade </option></select> }
    </Container>
  );
}

export default Field;