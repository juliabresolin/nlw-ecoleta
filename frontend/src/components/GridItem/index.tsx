import React from 'react';

import { Container } from './styles';


interface Props {
  items: Array<any>
  
}

const GridItem:React.FC<Props> = ({ items }) => {
  return (
    <Container>
      { items.map(item => 
      <li> 
        <img src={ item.image_url } alt={ item.title }/>
        <span>{ item.title }</span>
      </li>
      )}
    </Container>
  )
};

export default GridItem;