import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './nav-bar.styles.css'
import MinimizedSearchField from './minimized-search-field/minimized-search-field.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import avatar from '../../assets/avatar.jpg';
import guestAvatar from '../../assets/user-profile.png';
import { UserContext } from '../../contexts/user.context';
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
  import { signOutUser } from '../../utils/firebase/firebase.utils';

const NavBar = () => {

    const { currentUser } = useContext(UserContext);

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
        fullName: currentUser ? currentUser.displayName : 'guest',
        role: currentUser ? 'Investor' : 'sign in'
     };

     const navigate = useNavigate();

    const signOutHandler = () => {
        signOutUser();
        navigate('/auth');
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
                {currentUser ? <p className="user-role">{dummyUser.role}</p> : <Link to='/auth'><p className="user-role">{dummyUser.role}</p></Link>}
            </div>
            {currentUser ? 
            <Menu>
            <MenuButton as={ Button } className='profile-hamburger-menu'>
                <img src={ currentUser? avatar : guestAvatar } alt="profile avatar" className="profile-avatar" />
            </MenuButton>
            <MenuList className='user-options'>
                <MenuItem onClick={ signOutHandler }>Sign Out</MenuItem>
            </MenuList>
        </Menu> :
            <img src={ guestAvatar } alt="profile avatar" className="profile-avatar" /> }
        </div>
    </div>
  )
}

export default NavBar;