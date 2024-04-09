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

  return (
    <div className="box-4 dashboard-component col-xxl-6">
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
  )
}

export default Box4;