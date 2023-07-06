import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const style = {
    'font-family': 'Roboto Mono',
    'textDecoration': 'none',
    'padding': '10px',
}

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
        
            <div className='header_left'>
        
             <Link to="/Home">Artly</Link>
    
            </div>
        
            <div className='header_center'>

                {/* Search bar? */}

            </div>

            <div className='header_right'>

                <button>
                    Login
                </button>

                <button>
                    Sign up
                </button>
                
                <nav>
                    {/* dropdown */}
                </nav>    
            
            </div>    
        


        </header>


    )
}

export default Header; 