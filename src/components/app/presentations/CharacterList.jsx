import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ loading, characters }) => { 

  return (
    <div>
      { loading 
        ?
        <h3>Loading...</h3>
        :
        <ul>
          {characters.map(character => (<Character
            key={character.id}
            name={character.name}
            image={character.image}
          />
          ))}
        </ul>
      }

    </div>
  );
};

CharacterList.propTypes = { 
  loading: PropTypes.bool.isRequired,
  characters: PropTypes.array.isRequired
};

export default CharacterList;
