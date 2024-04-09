import React from 'react';
import './nav-bar.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import avatar from '../../assets/avatar.jpg';
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

const NavBar = () => {

    const webpages = [
        {
            name: 'Dashboard',
            webpageLink: '/'
        },
        {
            name: 'Statistics',
            webpageLink: '/statistics'
        },
        {
            name: 'Transactions',
            webpageLink: '/transactions'
        },
        {
            name: 'Profile',
            webpageLink: '/profile'
        },
    ];

    const dummyUser = {
        fullName: 'Kyle Dionisio',
        role: 'Investor'
     };

    // const ChevronDownIcon = () => <FontAwesomeIcon icon={faChevronDown} />;

  return (
    <div className="nav-bar-container col-xxl-11 mb-3">
        <div className="hamburger-menu-search-bar">
        <Menu>
            <MenuButton as={ Button } className='hamburger-menu'>
                <i>{<FontAwesomeIcon icon={faBars} />}</i>
            </MenuButton>
            <MenuList className='navbar-menu-options'>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Statistics</MenuItem>
                <MenuItem>Transactions</MenuItem>
                <MenuItem>Profile</MenuItem>
            </MenuList>
        </Menu>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifying-icon'/>
        <div className='search-input'>
            <FontAwesomeIcon icon={ faMagnifyingGlass } />
            <input type="text" placeholder='Enter your keyword' onP/>
        </div>
        </div>
        <div className="webpage-links-container">
            {webpages.map((webpage, index) => {
                return <a key={index} href={webpage.webpageLink} className="webpage-link">{webpage.name}</a>
            })}
        </div>
        <div className="icons-user-avatar-container">
            <FontAwesomeIcon icon={ faBell } />
            <FontAwesomeIcon icon={ faRocketchat } />
            <div className="user-role-container">
                <h3 className="user-fullname">{dummyUser.fullName}</h3>
                <p className="user-role">{dummyUser.role}</p>
            </div>
            <img src={avatar} alt="profile avatar" className="profile-avatar" />
        </div>
    </div>
  )
}

export default NavBar;