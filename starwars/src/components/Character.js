import React from 'react';

const Character = props => {
    return (
        <div className='character-card'>
            <h3 className='character-name'>{props.character.name}</h3>
            <div className='character-props'>
                <p>Birth Year:<span>{props.character.birth_year}</span></p>
                <p>Gender:<span>{props.character.gender}</span></p>
                <p>Height:<span>{props.character.height}</span></p>
                <p>Mass:<span>{props.character.mass}</span></p>
            </div>
        </div>
    );
}

export default Character;