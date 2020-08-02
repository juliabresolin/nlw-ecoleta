import React, { useContext } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';
import Header from '../../components/Header';

import backgroundLight from '../../assets/home-background-light.svg';
import backgroundDark from '../../assets/home-background-dark.svg';


interface Props {
  toggleTheme(): void;
}

const Home: React.FC<Props> =  ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  
  return (
    <Container>
      <Header toggleTheme={ toggleTheme } />

      <main>
          <div>
            <h1>Seu marketplace de coleta de resíduos.</h1>
            <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
            <a href="/cadastro">
              <span>
                <FiLogIn />
              </span>
              <strong>Cadastre um ponto de coleta</strong>
            </a>
          </div>
          <img src={ title === 'light' ? backgroundLight : backgroundDark } alt="Ecoleta Illustration"/>
      </main>

    </Container>
  );
}

export default Home;