import React from "react";
import './footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io5';
import {FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>Zhandos</a>


            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/"><FaFacebook /></a>
                <a href="https://www.instagram.com/"><FiInstagram /></a>
                <a href="https://twitter.com/?lang=ru"><IoLogoTwitter /></a>
                <a href="https://ru.linkedin.com/"><FaLinkedin /></a>
            </div>

            <div className="footer__copyroght">
                <small>&copy; User3348. All rights reserved</small>
            </div>

        </footer>
    )
}

export default Footer