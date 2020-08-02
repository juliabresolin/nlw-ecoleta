import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Container } from './styles';

import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <img src={ title === 'light' ? logoLight : logoDark } alt="Logo Ecoleta"/>

      <div className="switch-container">
        <span>Dark mode</span>
        <Switch 
          onChange={ toggleTheme }
          checked={ title === 'dark' }
          checkedIcon={ false }
          uncheckedIcon = { false }
          height={ 24 }
          offColor={ shade(0.2, colors.background) }
          onColor={ colors.secondary }
        />
      </div>
      
    </Container>
  )
}

export default Header;