import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './minimized-search-field.styles.css';

const MinimizedSearchField = () => {
    const [isInputVisible, setInputVisible] = useState(false);

    const toggleInput = () => {
      setInputVisible(!isInputVisible);
    };

    return (
        <div className='minimized-search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifying-icon' onClick={toggleInput} style={{color: isInputVisible ? '#2a9766' : '#7d7d7d'}}/>
            {isInputVisible && (
            <input
            type="text"
            placeholder="Search..."
            onChange={(e) => console.log(e.target.value)}
            />
            )}
        </div>
    )
}

export default MinimizedSearchField;