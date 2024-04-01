import React from 'react';
import './box-2.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup,
  faHandshake,
  faCircleNodes,
  faUserClock, 
  faHandHoldingDollar} from '@fortawesome/free-solid-svg-icons';

const Box2 = () => {
  const stats = [
    {
      icon: <FontAwesomeIcon icon={ faUserGroup } />,
      iconColour: '#7468E4',
      iconBackgroundColour: '#EFECFD',
      number: '230K',
      unit: 'Customers'
    },
    {
      icon: <FontAwesomeIcon icon={ faHandshake } />,
      iconColour: '#56D7EC',
      iconBackgroundColour: '#E4F8FB',
      number: '230K',
      unit: 'Remittance'
    },
    {
      icon: <FontAwesomeIcon icon={ faCircleNodes }/>,
      iconColour: '#C7564F',
      iconBackgroundColour: '#FDE7E7',
      number: '230K',
      unit: 'P2P'
    },
    {
      icon: <FontAwesomeIcon icon={ faHandHoldingDollar }/>,
      iconColour: '#20B572',
      iconBackgroundColour: '#E5F7ED',
      number: '230K',
      unit: 'Donation'
    },
    {
      icon: <FontAwesomeIcon icon={ faUserClock }/>,
      iconColour: '#FFB648',
      iconBackgroundColour: '#FDF1E1',
      number: '230K',
      unit: 'Watchtime'
    },
  ]

  return (
    <div className="box-2 dashboard-component">
      <div>
        <h2>Statistics</h2>
        <p>Updated 1 month ago</p>
      </div>
      <div>
        {stats.map((stat, index) => {
          return (
            <div key={index}>
              <div style={{backgroundColor: stat.iconBackgroundColour, color: stat.iconColour}} className='statistics-icon'>{stat.icon}</div>
              <div className='number-unit-container'>
                <h1>{stat.number}</h1>
                <p>{stat.unit}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Box2;