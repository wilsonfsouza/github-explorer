import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { HeaderContainer } from './styles';
import logoImage from '../../assets/logo.svg';

const Header: React.FC = props => {
  const { colors } = useContext(ThemeContext);
  return (
    <>
      <HeaderContainer>
        {/* <FiGithub size={16} /> */}
        <img src={logoImage} alt="Github Eplorer" />
        <Switch
          onChange={() => { }}
          checked
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.primary}
          offColor={shade(0.15, colors.secondary)}
        />
        {props.children}
      </HeaderContainer>
    </>
  );
};

export default Header;
