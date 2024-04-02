import React, { useState } from 'react';
import './box-5.styles.css';
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

const Box5 = () => {
  const [ year, changeYear ] = useState('2024');

  return (
    <div className="box-5 dashboard-component">
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
  )
}

export default Box5;