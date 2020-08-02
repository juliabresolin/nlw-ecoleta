import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  header {
    margin-top: 48px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  form a {
    color: ${props => props.theme.colors.primary };
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 48px;
  }

  form a svg {
    margin-right: 16px;
    color: ${ props => props.theme.colors.secondary };
  }

  form {
    margin: 80px auto;
    padding: 64px;
    max-width: 730px;
    background: ${ props => props.theme.colors.blocks };
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
  }

  form h1 {
    font-size: 36px;
  }

  form fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
  }

  form legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  form legend h2 {
    font-size: 24px;
  }

  form legend span {
    font-size: 14px;
    font-weight: normal;
    color: ${ props => props.theme.colors.text };
  }

  form .field-group {
    flex: 1;
    display: flex;
  }

  form .field-group input + input {
    margin-left: 24px;
  }

  form .field-check {
    flex-direction: row;
    align-items: center;
  }

  form .field-check input[type=checkbox] {
    background: ${ props => props.theme.colors.background };
  }

  form .field-check label {
    margin: 0 0 0 8px;
  }

  form .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  form button {
    width: 260px;
    height: 56px;
    background: ${ props => props.theme.colors.secondary };
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  form button:hover {
    background: ${ props => props.theme.colors.secondaryHover };
  }



  .divider {
    width: 24px
  }
`;