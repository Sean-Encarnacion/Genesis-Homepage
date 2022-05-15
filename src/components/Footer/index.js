import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import {animateScroll as scroll} from  'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from '../Footer/FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>How it works</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Help</FooterLinkTitle>
                            <FooterLink to='/'>Help Center</FooterLink>
                            <FooterLink to='/'>FAQ's</FooterLink>
                           
                            
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink href="https://www.facebook.com/Genesis-Farm-at-Amadeo-Cavite-106401351949470" target="_blank" >Facebook</FooterLink>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                            <FooterLink to='/'>YouTube</FooterLink>
                            
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink href='https://www.google.com/maps/place/Minantok+Kanluran,+Amadeo,+Cavite/@14.17882,120.9237538,14z/data=!3m1!4b1!4m9!1m2!2m1!1s+Purok+6,+Minantok+Kanluran+Amadeo+Cavite!3m5!1s0x33bd78e1db89503d:0x2cd46f93523c539c!8m2!3d14.173416!4d120.9403023!15sCihQdXJvayA2LCBNaW5hbnRvayBLYW5sdXJhbiBBbWFkZW8gQ2F2aXRlkgEUYWRtaW5pc3RyYXRpdmVfYXJlYTU' target="_blank">Purok 6, Minantok Kanluran Amadeo Cavite</FooterLink>
                            <FooterLink to='/'>+63-9176267101</FooterLink>
                            <FooterLink to='/'>yrockvpeo2@gmail.com</FooterLink>
                            
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Genesis Farm
                    </SocialLogo>
                    <WebsiteRights>Genesis Farm © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/Genesis-Farm-at-Amadeo-Cavite-106401351949470" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer