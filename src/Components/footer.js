import React from "react";

import './footer.css'

import logo from '../images/signMobile.png'
import insta from '../images/insta.png'
import fb from '../images/fb.png'
import NavLinks from "./navLinks";


function Footer(){
    return(<div className='footerBar'>
    <div className="wrapLogo"><img src={logo} alt='Logo' /></div>
    {/* <div className='list'>
        <a href="#home"><span className='leftMargin'>Home</span></a>
        <a href="#about"><span>About</span></a>
        <a href="#menu"><span>Menu</span></a>
        <a href="#blog"><span>Blog</span></a>
        <a href="#contact"><span className='noRightMargin'>Contact</span></a>
    </div> */}
    <NavLinks />
    
    <div className='footerList'>
        <a href=""><span><img src={fb} alt='shop' className='iconFooter fb noRightMargin'></img></span></a>
        <a href=""><span><img src={insta} alt='shop' className='iconFooter'></img></span></a>
        
    </div>
</div>
    );
}



export default Footer