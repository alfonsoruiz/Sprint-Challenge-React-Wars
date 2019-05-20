import React from 'react';
import Character from './Character';

const StarWarsList =  props => {
    return (
        <div className='list-container'>
            {props.list.map(item => (
                <Character key={item.created} character={item} />
            ))}
        </div>
    );
};

export default StarWarsList;