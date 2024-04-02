import React from 'react';
import './box-6.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCity, faGraduationCap, faHouseFire, faTreeCity } from '@fortawesome/free-solid-svg-icons';

const Box6 = () => {

  const recentEvents = [
    {
      icon: <FontAwesomeIcon icon={ faGraduationCap }/>,
      iconColour: '#20b572',
      iconBackgroundColour: '#e5f7ed',
      eventName: 'Donation to local university',
      eventDate: 'Sat, March 25, 2024',
      valueDifference: '+$1.5K'
    },
    {
      icon: <FontAwesomeIcon icon={ faHouseFire }/>,
      iconColour:'#c7564f',
      iconBackgroundColour: '#fde7e7',
      eventName: 'Recent fire at church',
      eventDate: 'Sat, March 25, 2024',
      valueDifference: '-$50K'
    }
  ]

  return (
    <div className="box-6 dashboard-component">
      <div>
        <h2>THU<br/>24</h2>
        <div>
          <h3>Community Value</h3>
          <p>Toronto, Ontario</p>
        </div>
      </div>
      <div>
        {recentEvents.map((recentEvent, index) => {
          const {icon,
            iconColour,
            iconBackgroundColour,
            eventName,
            eventDate,
            valueDifference} = recentEvent;
          return (
            <div key={index} className='event-card'>
              <div style={{ backgroundColor: iconBackgroundColour, color: iconColour }}>{icon}</div>
              <div>
                <p>{eventName}</p>
                <p>{eventDate}</p>
              </div>
              <h2>{valueDifference}</h2>
            </div>
          )
        })}
      </div>
      <div>
        <FontAwesomeIcon icon={ faBuilding } />
        <FontAwesomeIcon icon={ faCity }/>
        <FontAwesomeIcon icon={ faTreeCity }/>

      </div>
    </div>
  )
}

export default Box6;