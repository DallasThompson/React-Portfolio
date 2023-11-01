
import React from 'react';

const footerStyles = {
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0', // 
    width: '60%',
};

const linkStyles = {
    marginRight: '10px',
    marginLeft: '10px',
    textDecoration: 'none',
    color: 'white',
};

function Footer() {
return (
    <footer style={footerStyles}>
    <span className="container">
        <button type="button" class="btn btn-primary btn-outline-dark btn-lg"><a href="https://github.com/DallasThompson" style={linkStyles}>Github</a></button>
    </span>
        <span className='container'><button type="button" class="btn btn-primary btn-outline-dark btn-lg"><a href='https://www.linkedin.com/' style={linkStyles}>LinkenIn</a></button>
    </span>
    </footer>
);
}

export default Footer;