import React from 'react';
import MainPage from './containters/MainPage';
import Header from './presentations/Header';
import { ThemeContext } from '../../context/ThemeContext'; 

export default function App() {
  const { toggle } = React.useContext(ThemeContext); 
  return (
    <div className={toggle ? 'darkMode' : 'lightMode'}>
      <Header/>
      <MainPage/>
    </div>
  );
}
