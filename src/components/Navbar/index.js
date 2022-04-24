import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
   <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                Genesis Farm
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="services">Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="facilities">Facilities</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="feedbacks">Feedbacks</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="signup">Sign Up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Login</NavBtnLink>
                
            </NavBtn>
        </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar