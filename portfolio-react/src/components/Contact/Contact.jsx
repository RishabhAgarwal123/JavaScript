import React from 'react';
import './Contact.scss';
import {useState} from 'react';
 
function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact </h2>
                <form>
                    <input type="text" value={email} name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="message" id="" value={message} cols="30" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="click" onClick={handleClick}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
