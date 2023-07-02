import { createContext, useState } from "react";

export const AppContext = createContext({})

export function AppContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
    <AppContext.Provider value={{isLoggedIn, setIsLoggedIn}}>{children}</AppContext.Provider> 
    )
    
} 
 