import React, {useState, useEffect} from 'react'
import { BsList } from 'react-icons/bs';
import {animateScroll as scroll}from 'react-scroll'



import {Nav, Navbarcontainer, NavLogo, NavItem, NavMenu, NavLinks, MobileIcon, NavBtn, NavBtnLink, NavIcon } from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, steScollNav] = useState(false)
    const changeNav =()=> {
        if(window.scrollY >= 150 ) {
            steScollNav(true)
        }
        else {
            steScollNav(false)
        }
    }
     useEffect(() => {
          window.addEventListener('scroll', changeNav)
     },[]) 

     const toggleHome = () => {
         scroll.scrollToTop();
     };

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <Navbarcontainer>
            <NavLogo to = './' onClick={toggleHome}> <NavIcon />IOFA </NavLogo>
                <MobileIcon onClick={toggle}>
                    <BsList />
                </MobileIcon>
                <NavMenu>
                  
                </NavMenu>
                <NavBtn>
                </NavBtn>
            </Navbarcontainer>
        </Nav>
        </>
    )
}

export default Navbar
