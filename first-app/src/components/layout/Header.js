import React from 'react';

//This is just like render only
function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
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
    padding: '50px' 
}

export default Header;