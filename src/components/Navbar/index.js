import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    // function Navbar(props){
    //     return(props.trigger) ? (
    //         <NavBtnLink to="/signin">Sign In</NavBtnLink>
    //     )
    // }
        
    // export default function Modal(){
    //     const [modal, setModal] = useState(false);
    // }
  return ( 
   <>
   <IconContext.Provider value={{color: '#fff'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
                Genesis Farm
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="services"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="facilities"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Facilities</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="feedbacks"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Feedbacks</NavLinks>
                </NavItem>
                <NavItem>
                    {/* <NavLinks to="/signup">Sign Up</NavLinks> */}
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
                <NavBtnLink to="/signup">Sign Up</NavBtnLink>
            </NavBtn>

        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
   </>
  )
}

export default Navbar