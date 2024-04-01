import React, { useState } from 'react';
import './box-4.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faLaravel } from '@fortawesome/free-brands-svg-icons';
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';

const Box4 = () => {
  const [ year, changeYear ] = useState('2024');

  return (
    <div className="box-4 dashboard-component">
      <div>
        <div>
          <div>
            <h2>User Statistics</h2>
            <p>Nov - July</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faCircle} style={{color: '#20B572'}}/>
              <div>
                <p>Last 6 months</p>
                <h2>78K</h2>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faCircle} style={{color: '#90d1ad'}}/>
              <div>
                <p>Previous</p>
                <h2>78K</h2>
              </div>
            </div>
          </div>
        </div>
        <div>CHART HERE</div>
      </div>
      <div>
        <Menu>
          <MenuButton as={ Button } className='year-menu-dropdown'>
            {year}
            <i><FontAwesomeIcon icon={faChevronDown} /></i>
          </MenuButton>
          <MenuList className='year-menu-options'>
              <MenuItem onClick={() => changeYear('2024')}>2024</MenuItem>
              <MenuItem onClick={() => changeYear('2023')}>2023</MenuItem>
              <MenuItem onClick={() => changeYear('2022')}>2022</MenuItem>
              <MenuItem onClick={() => changeYear('2021')}>2021</MenuItem>
          </MenuList>
        </Menu>
        <div>
          <h2>25,852</h2>
          <p>This month's users</p>
        </div>
        <FontAwesomeIcon icon={ faLaravel } style={{ color: '#31B97C', fontSize: '90px' }}/>
        <button>Increase Users</button>
      </div>
    </div>
  )
}

export default Box4;