import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu} from './SidebarElements';


const Sidebar = ({isOpen, toggle} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                 <CloseIcon />
            </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                  <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>

                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>

                <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>

                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>

                <SidebarLink to="signup" onClick={toggle}>Technolgies</SidebarLink>

            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin" onClick={toggle}>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>

            
        </SidebarContainer>
    )
}

export default Sidebar
