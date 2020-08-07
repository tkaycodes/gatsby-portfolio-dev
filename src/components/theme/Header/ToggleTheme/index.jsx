import React, { useContext, useState } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';

import { ToggleSwitch } from './ToggleSwitch/toggleSwitch';

import sunIcon from 'assets/icons/sun.svg';
import moonIcon from 'assets/icons/moon.svg';

import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [selected, setSelected] = useState(false);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <ToggleSwitch 
        selected={selected}
        toggleSelected={ () => {
          setSelected(!selected);
        }}
      />
      {/* <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} /> */}
    </Wrapper>
  );
};

export default ToggleTheme;


