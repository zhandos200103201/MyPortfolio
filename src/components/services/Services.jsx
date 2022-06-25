import React from "react";
import './services.css';
import {GiCheckMark} from 'react-icons/gi';

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                {/*UI and Ux design*/}
                <article className='service'>
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>
                    </ul>

                </article>
                    {/*Web development*/}
                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>
                    </ul>

                </article>
                    {/*Content creation*/}
                <article className='service'>
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>

                        <li>
                            <GiCheckMark className='services_list-icon' />
                            <p>Hello world I'm from Kazakhstan</p>
                        </li>
                    </ul>

                </article>
            </div>

        </section>
    )
}

export default Services