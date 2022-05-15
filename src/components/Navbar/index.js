import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLink, NavBtn, NavBtnLink} from './NavbarElements'


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
                    <NavLink to="/"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/activity"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Activities</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/facility"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Facilities</NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink type='button' link to="/booking"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Book</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink type='button' link to="/proof"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Proof of Payment</NavLink>
                </NavItem>
                
                {/* <NavItem>
                    <NavLinks to="feedbacks"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Feedbacks</NavLinks>
                </NavItem> */}
                
                <NavItem>
                    {/* <NavLinks to="/signup">Sign Up</NavLinks> */}
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Logout</NavBtnLink>
                {/* <NavBtnLink to="/signup">Sign Up</NavBtnLink> */}
            </NavBtn>

        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
   </>
  )
}

export default Navbar