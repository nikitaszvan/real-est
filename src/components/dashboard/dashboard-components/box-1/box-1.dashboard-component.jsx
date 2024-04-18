import React from 'react';
import './box-1.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseTsunami } from '@fortawesome/free-solid-svg-icons';

const Box1 = () => {

  const dummyUser = {
    fullName: 'guest',
    role: 'sign in'
 };

  return (
    <div className="box-1 dashboard-component col-xxl-4 col-xl-5 col-lg-11 col-md-11 col-sm-11 col-xs-11">
      <div>
        <h2>Congratulations <span>{dummyUser.fullName}</span></h2>
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