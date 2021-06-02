import React from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import Styles from './header.css'; 

const Header = () => { 
  const { toggle, toggleFunction } = React.useContext(ThemeContext); 

  return (
    <div style={ toggle ? { background: 'blue' } : {}}>
      <h1>Hey Arnold!</h1>
      <label className={Styles.switch}>
        <input type="checkbox" onClick={toggleFunction}/>
        <span className={Styles.slider}></span>
      </label>
    </div>
  );  
};

export default Header;
