import React from "react";
import './experience.css'
import {FaCheckCircle} from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience">
            <h5>What skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">

                {/*Frontend tools*/}

                <div className="experience__frontend">
                    <h3>Frontend Developer</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/*Backend tools*/}

                <div className="experience__backend ">
                    <h3>Backend Developer</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>Django</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience