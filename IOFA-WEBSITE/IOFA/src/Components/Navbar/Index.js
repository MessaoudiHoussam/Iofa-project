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

                     <NavItem>
                        <NavLinks to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Technologies</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to ="/signin">Sign in</NavBtnLink>
                </NavBtn>
            </Navbarcontainer>
        </Nav>
        </>
    )
}

export default Navbar
