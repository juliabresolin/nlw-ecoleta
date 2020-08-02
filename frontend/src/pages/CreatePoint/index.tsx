import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet';

import { Container } from './styles';
import Header from '../../components/Header';
import Field from '../../components/Field';
import GridItem from '../../components/GridItem';

import api from '../../services/api';

interface Props {
  toggleTheme(): void;
}

interface Item {
  id: number;
  title: string;
  image_url: string;
}

const CreatePoint: React.FC<Props> = ({ toggleTheme }) => {

  const [ items, setItems ] = useState<Item[]>([]);

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    })
  }, []);

  return (
    <Container >
       <Header toggleTheme={ toggleTheme } />

        <form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para a home
          </Link>
          <h1>Cadastro do <br /> ponto de coleta</h1>

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>
            <Field labelFor="name" 
                   labelText="Nome da entidade"
                   inputType="text"
                   name="name"
                   id="name" 
            />

            <div className="field-group">
            <Field labelFor="email" 
                   labelText="Email"
                   inputType="email"
                   name="email"
                   id="email" 
            />
            <span className="divider"></span>
            <Field labelFor="whatsapp" 
                   labelText="Whatsapp"
                   inputType="text"
                   name="whatsapp"
                   id="whatsapp" 
            />
            </div>
          </fieldset>
         
          <fieldset>
            <legend>
              <h2>Endereço</h2>
              <span>Selecione o endereço no mapa</span>
            </legend>

            <Map center={[-26.2098259,  -52.6921009]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-26.2098259,  -52.6921009]}/>
            </Map>

            <div className="field-group">
            <Field labelFor="uf" 
                   labelText="Estado (UF)"
                   name="uf"
                   id="uf" 
            />
            <span className="divider"></span>
            
            <Field labelFor="city" 
                   labelText="Cidade"
                   name="city"
                   id="city" 
            />
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Itens de coleta</h2>
              <span>Selecione um ou mais itens abaixo</span>
            </legend>

              <GridItem items={ items } />

          </fieldset>
          
          <button type="submit">
            Cadastrar ponto de coleta
          </button>
        </form>
      
    </Container>
  )
}

export default CreatePoint;