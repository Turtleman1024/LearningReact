import React from 'react';
import { Link } from 'react-router-dom';

//This is just like render only
function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#696969',
    backgroundImage: 'url(https://cdn.vergepermaculture.ca/wp-content/uploads/Forest-Trees.jpg)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    textAlign: 'center',
    padding: '20px' 
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;