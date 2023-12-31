import React from 'react'
import './style.css' ;

export default function ContactForm() {
    return (
        <div id="contact-us-form" className='flex-box justify-center align-center'>
            <div className="contact-us-form">
                <div className="contact-form flex-box justify-center flex-column">
                    <p>LEAVE A MESSAGE</p>
                    <h2>We love to hear from you</h2>
                    <form action="#" className="flex-box justify-center flex-column">
                        <input type="text" className="contact-form-input-box" placeholder='Your Name' />
                        <input type="email" className="contact-form-input-box" placeholder='E-mail' />
                        <input type="text" className="contact-form-input-box" placeholder='Subject' />
                        <textarea id="user-message" className="contact-form-input-box" placeholder='Message'></textarea>
                        <input type="submit" value="Submit" id="message-submission" />
                    </form>
                </div>
            </div>
        </div>
    )
}