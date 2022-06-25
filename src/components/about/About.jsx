import React from "react";
import './about.css';
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {FaFolder} from 'react-icons/fa';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" alt="about me"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>0+ years working</small>
                        </article>

                        <article className="about__card">
                            <FaUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>0+ Clients</small>
                        </article>

                        <article className="about__card">
                            <FaFolder className='about__icon'/>
                            <h5>Projects</h5>
                            <small>12+ Projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About