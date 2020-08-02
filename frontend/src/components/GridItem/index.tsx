import React from 'react';

import { Container } from './styles';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface Props {
  items: Array<Item> 
}

const GridItem:React.FC<Props> = ({ items }) => {
  return (
    <Container>
      { items.map(item => 
      <li key={ item.id }> 
        <img src={ item.image_url } alt={ item.title }/>
        <span>{ item.title }</span>
      </li>
      )}
    </Container>
  )
};

export default GridItem;