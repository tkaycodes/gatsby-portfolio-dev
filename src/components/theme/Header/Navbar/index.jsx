import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import ToggleTheme from 'components/theme/Header/ToggleTheme';


const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        Tabish Khan
      </Brand>
      {/* <ToggleTheme /> */}
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
