import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../libs/appContext';
import DropdownMenu from './DropdownMenu';



function Header({currentPage, handlePageChange}) {
    const appContext = useContext(AppContext)
    console.log(appContext)
    return (
        <header>
        
        <div>
        
            <h3>
        <Link to="/Home">Artly</Link>
        
            </h3>

        </div>
        {/* created appContext so when finish you can use it for different routes so its easier to pass data also made it so artist drop down menu appears after logged in or sigend up */}
         {appContext.isLoggedIn
            ?<DropdownMenu/>
            :( 
                <>
            <button onClick={
                function() {
                    appContext.setIsLoggedIn(true)
                }
            }>
                Login
            </button>

            <button>
                Sign up
            </button>
                </>
    
         )}
            
        <nav>
            {/* dropdown */}
        </nav>


        </header>


    )
}

export default Header; 