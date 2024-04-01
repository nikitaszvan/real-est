import React from 'react';
import './box-1.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseTsunami } from '@fortawesome/free-solid-svg-icons';

const Box1 = () => {
  return (
    <div className="box-1 dashboard-component">
      <div>
        <h2>Congratulations Kyle</h2>
        <p>You are getting viewed</p>
        <div>
          <h2>14K</h2>
          <p>per day</p>
        </div>
        <button>View User</button>
      </div>
      <FontAwesomeIcon icon={ faHouseTsunami } />
    </div>
  )
}

export default Box1;