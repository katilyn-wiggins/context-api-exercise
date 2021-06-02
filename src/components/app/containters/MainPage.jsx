import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { getCharacters } from '../../../services/HeyArnoldApi';
import CharacterList from '../presentations/CharacterList';


const MainPage = () => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    getCharacters()
      .then(arnolds => {
        setCharacters(arnolds);
      })
      .finally(() => setLoading(false));
  }, []);

  const { toggle } = React.useContext(ThemeContext); 
  return (
    <div style={ toggle ? { background: 'lightblue' } : {}}>
      <h2>Main Page Container!</h2>
      <CharacterList loading={loading} characters={characters}/>
    </div>
  );

};

export default MainPage;
