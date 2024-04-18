import React from 'react';
import './nav-bar.styles.css'
import MinimizedSearchField from './minimized-search-field/minimized-search-field.component';
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

  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
        fullName: 'guest',
        role: 'sign in'
     };

    // const ChevronDownIcon = () => <FontAwesomeIcon icon={faChevronDown} />;
     console.log('render');

     const handleSearchClick = () => {
        return(
            <input placeholder='Enter keyword'></input>
        )
     }
  return (
    <div className="nav-bar-container mb-3">
        <div className="hamburger-menu-search-bar">
        <Menu>
            <MenuButton as={ Button } className='hamburger-menu'>
                <i>{<FontAwesomeIcon icon={faBars} />}</i>
            </MenuButton>
            <MenuList className='navbar-menu-options'>
                <MenuItem><Link to="/">Dashboard</Link></MenuItem>
                <MenuItem><Link to="/statistics">Statistics</Link></MenuItem>
                <MenuItem><Link to="/transactions">Transactions</Link></MenuItem>
                <MenuItem><Link to="/profile">Profile</Link></MenuItem>
            </MenuList>
        </Menu>
        <MinimizedSearchField />
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
                <Link to='/sign-in'><p className="user-role">{dummyUser.role}</p></Link>
            </div>
            <img src={avatar} alt="profile avatar" className="profile-avatar" />
        </div>
    </div>
  )
}

export default NavBar;