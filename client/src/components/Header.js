import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../../src/Styles/Header.css";  

const style = {
    'font-family': 'Roboto Mono',
    'textDecoration': 'none',
    'padding': '10px',
}

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <div className='entire_header'>
                
                <div className='header_left'>
        
                    <Link to="/Home">Artly</Link>
                   
            
                </div>
            
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500" rel="stylesheet"></link>
            
                <div className='header_right'>
                
                    {/* profile pictute/avatar */}
                    
                    <Link to="/Login" style={style}>Login</Link>
                    <Link to="/Cart" style={style}>Cart</Link>
                    <Link to="/Contact" style={style}> Contact Us</Link>
            
                </div>
            </div>

        </header>


)
}

export default Header; 