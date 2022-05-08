import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,SideBtnWrap,SidebarRoute } from './SidbarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="facilities" onClick={toggle}>Facilities</SidebarLink>
                <SidebarLink to="feedbacks" onClick={toggle}>Feedbacks</SidebarLink>
                {/* <SidebarLink to="/signup" onClick={toggle}>Sign Up</SidebarLink> */}
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>
                    Sign In
                </SidebarRoute>
                <SidebarRoute to='/signup'>
                    Sign Up
                </SidebarRoute>
                
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar