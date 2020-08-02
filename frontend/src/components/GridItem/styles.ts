import styled from 'styled-components';
import { lighten } from 'polished';
export const Container = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;


  li {
    background: ${ props => lighten(0.45, props.theme.colors.secondary) };
    border: 2px solid #f5f5f5;
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    text-align: center;
    
    cursor: pointer;
  }

  li span {
    flex: 1;
    margin-top: 12px;
    
    display: flex;
    align-items: center;
    color: #322153;
  }

  li.selected {
    background: ${ props => lighten(0.4, props.theme.colors.secondary) };
    border: 2px solid ${ props => props.theme.colors.secondary };
  }
`;