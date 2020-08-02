import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import { Container } from './styles';
import Header from '../../components/Header';
import Field from '../../components/Field';
import GridItem from '../../components/GridItem';

interface Props {
  toggleTheme(): void;
}


const items = [
  {
    "id": 1,
    "title": "Lâmpadas",
    "image_url": "http://localhost:3333/uploads/lampadas.svg"
  },
  {
    "id": 2,
    "title": "Pilhas e Baterias",
    "image_url": "http://localhost:3333/uploads/baterias.svg"
  },
  {
    "id": 3,
    "title": "Papéis e papelão",
    "image_url": "http://localhost:3333/uploads/papeis-papelao.svg"
  },
  {
    "id": 4,
    "title": "Resíduos Eletrônicos",
    "image_url": "http://localhost:3333/uploads/eletronicos.svg"
  },
  {
    "id": 5,
    "title": "Resíduos Orgânicos",
    "image_url": "http://localhost:3333/uploads/organicos.svg"
  },
  {
    "id": 6,
    "title": "Óleo de Cozinha",
    "image_url": "http://localhost:3333/uploads/oleo.svg"
  }
];

const CreatePoint: React.FC<Props> = ({ toggleTheme }) => {
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