import React from "react";
import './header.css';
import CTA from './CTA';
import HeaderSocials from "./HeaderSocials";
import {BsArrowRight} from "react-icons/bs";

const Header = () => {
    return (
        <header>
           <div className="container header__container">
               <h5>Hello I'm</h5>
               <h1>Zhandos Saparbayev</h1>
               <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
               <HeaderSocials />

               <div className="me">
                   <img src="https://www.pngall.com/wp-content/uploads/2016/05/Man-Transparent.png" alt=""/>
               </div>

               <a href="#contact" className="scroll__down"><BsArrowRight /></a>
           </div>
        </header>
    )
}

export default Header