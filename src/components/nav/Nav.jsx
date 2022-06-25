import React from "react";
import './nav.css'
import {FaHome} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaBook} from 'react-icons/fa';
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdContacts} from 'react-icons/md';
import {useState} from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><FaHome /></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaUser /></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><FaBook /></a>
            <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><MdMiscellaneousServices /></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><MdContacts /></a>
        </nav>
    )
}

export default Nav