import React, {useRef} from "react";
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {FiInstagram} from 'react-icons/fi';
import {FaWhatsapp} from 'react-icons/fa';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.send('service_4aufzf4', 'template_bbnmtbm', form.current, 'IGUaHG-EnKcFV_PgU')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Hire Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>saparbayevzh03@gmail.com</h5>
                        <a href="mailto:saparbayevzh03@gmail.com" target='_blank'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <FiInstagram className='contact__option-icon'/>
                        <h4>Instagram</h4>
                        <h5>zh_saparbayev</h5>
                        <a href="https://www.instagram.com/zh_saparbayev/" target='_blank'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <FaWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+7-(778)-882-95-86</h5>
                        <a href="https://api.whatsapp.com/send?phone+87788829596" target='_blank'>Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>
        </section>
    )
}

export default Contact