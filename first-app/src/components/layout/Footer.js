import React from 'react';

//This is just like render only
function Footer() {
    return (
        <footer style={footerStyle}>
            <p>Turtleman 1024</p>
        </footer>
    )
}

const footerStyle = {
    backgroundColor: '#000000',
    backgroundImage: 'url(https://cdn.vergepermaculture.ca/wp-content/uploads/Forest-Trees.jpg)',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    textAlign: 'left',
    padding: '10px' 
}


export default Footer;