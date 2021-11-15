import React from 'react'
import {FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocailMedia, SocailIcons, SocialIconLink, SocialLogo, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'
import './style.css'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer className="footUpdate">
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                       <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to="/">How it works</FooterLink>
                           <FooterLink to="/">Testimonials</FooterLink>
                           <FooterLink to="/">Careers</FooterLink>
                           <FooterLink to="/">Investors</FooterLink>
                           <FooterLink to="/">Terms of services</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                       <FooterLinkTitle>Contact Us</FooterLinkTitle>
                           <FooterLink to="/">Contact</FooterLink>
                           <FooterLink to="/">Support</FooterLink>
                           <FooterLink to="/">Detinations</FooterLink>
                           <FooterLink to="/">Sponsorships</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                       <FooterLinkTitle>Videos</FooterLinkTitle>
                           <FooterLink to="/">Submit Video</FooterLink>
                           <FooterLink to="/">Testimonials</FooterLink>
                           <FooterLink to="/">Ambassadors</FooterLink>
                           <FooterLink to="/">Agency</FooterLink>
                           <FooterLink to="/">Influencer</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                       <FooterLinkTitle>Socail Media</FooterLinkTitle>
                           <FooterLink to="/">Instagram</FooterLink>
                           <FooterLink to="/">Facebook</FooterLink>
                           <FooterLink to="/">Youtube</FooterLink>
                           <FooterLink to="/">Twitter</FooterLink>
                       </FooterLinkItems>
                   </FooterLinksWrapper>
               </FooterLinksContainer> 
               <SocailMedia>
               <SocialMediaWrap>
                   <SocialLogo to='/' onClick={toggleHome}>
                       IOFA
                   </SocialLogo>
               <WebsiteRights> COPYRIGHT ©  IOFA{new Date().getFullYear()}
               All right reserved
               </WebsiteRights>
               <SocailIcons>
                   <SocialIconLink href="/" target="_blank" aria-label="Linkedin">< FaLinkedin /></SocialIconLink>
                   <SocialIconLink href="/" target="_blank" aria-label="Facebook">< FaFacebook /></SocialIconLink>
                   <SocialIconLink href="/" target="_blank" aria-label="Instagram">< FaInstagram /></SocialIconLink>
                   <SocialIconLink href="/" target="_blank" aria-label="Youtube">< FaYoutube /></SocialIconLink>
                   <SocialIconLink href="/" target="_blank" aria-label="Twitter">< FaTwitter /></SocialIconLink>
                   </SocailIcons>
               </SocialMediaWrap>
               </SocailMedia>
           </FooterWrap> 
        </FooterContainer>
    )
}

export default Footer
