import React from 'react' ;
import './style.css';

export default function Location() {
  return (
    <div id="element-card" className="flex-box justify-center aling-center">
            <div className='element-card'>
                <div className="element-content flex-box justify-center flex-column">
                    <h6>Get In Touch</h6>
                    <h1>Visit our store or contact us today</h1>
                    <p><i className="fa-solid fa-map"></i> Sant Ram Puni Chand Kirana Merchant Kothi, Pahra, Kangra - 176087</p>
                    <p><i className="fa-solid fa-envelope"></i> contact@example.com</p>
                    <p><i className="fa-solid fa-phone"></i> +291-28728733</p>
                    <p><i className="fa-solid fa-clock"></i> Monday To Saturday, 10:00AM-6:00PM</p>
                </div>
                <div className="image flex-box justify-center align-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13529.71350102281!2d76.5364525!3d32.0305945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b5c62fe98c33%3A0x59884304429e6d63!2sSant%20Ram%20Puni%20Chand%20Kiryana%20Merchant!5e0!3m2!1sen!2sin!4v1703409294929!5m2!1sen!2sin" width="600" height="450" style={{border:0, marginRight: 0 + 'em'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
  )
}