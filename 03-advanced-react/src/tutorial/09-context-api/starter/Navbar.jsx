import React, { createContext, useState } from 'react'
import NavLinks from './NavLinks'
import { useContext } from 'react'
// export const NavbarContext = createContext();
// console.log(NavbarContext.Provider);

// custom hook 
export const useAppContext = ()=> useContext();
const Navbar = () => {
    // React.createContext
    const [user, setUser] = useState({name : 'bob'});
    const logout=()=>{
        setUser(null);
    }
    console.log(user)
  return (
    <NavbarContext.Provider value ={{user, logout}}>
   <nav className='navbar'>
    <h5>CONTEXT API</h5>
    <NavLinks  />
   </nav>
   </NavbarContext.Provider>
  )
}

export default Navbar
