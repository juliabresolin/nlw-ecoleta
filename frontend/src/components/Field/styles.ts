
import styled from 'styled-components';

export const Container = styled.div `
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;


  input[type=text],
  input[type=email],
  input[type=number] {
    flex: 1;
    background: ${ props => props.theme.colors.background };
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color:  ${ props => props.theme.colors.text };
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: ${ props => props.theme.colors.background } ;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: ${ props => props.theme.colors.text };
  }

  input::placeholder {
    color: ${ props => props.theme.colors.placeholder };
  }

  label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  :disabled {
    cursor: not-allowed;
  }
  
`;
