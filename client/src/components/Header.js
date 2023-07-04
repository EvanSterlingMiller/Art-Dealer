import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


function Header({currentPage, handlePageChange}) {
    return (
        <header>
        
            <div className='header_left'>
        
             <Link to="/Home">Artly</Link>
    
            </div>
        
            <div className='header_center'>

                {/*  */}

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