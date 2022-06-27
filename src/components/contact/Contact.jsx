import './contact.scss';
import React from 'react';
import emailjs from 'emailjs-com';
function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_154xkib', 'template_d5lp425', e.target, '6dQcj0xZrocSlSDMf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

  return (
    <div id='contact' className='contact'>
        <div className='header'>
            <h1>Contact Me</h1>
        </div>
            <div className='top'>
                <div className='left'>
                    Map
                </div>
                <div className='right'>
                    <h2>Lets Work Together, Send me a message!</h2>
                    <form onSubmit={sendEmail}>
                        <div className='form_top'>
                            <input type='text' id='name' name='name' placeholder=' Name' required />
                            <input type='email' id='email' name='user_email' placeholder=' Email' required />
                            <input type='text' id='phone' name='user_phone' placeholder=' Phone #' required />
                        </div>
                        <div className='form_bottom'>
                            <textarea id='message' name='message' placeholder=' Write me a message!' rows='4'></textarea>
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='bottom'>
                <div className='label'>
                    <a href='https://www.linkedin.com/in/kyle-ruban-a555611a3/' alt=''><img src='pictures/linkedin.png' alt='' /></a>
                    <p>LinkedIn</p>
                </div>
                <div className='label'>
                    <a href='https://github.com/kmruban' alt=''><img src='pictures/github.png' alt='' /></a>
                    <p>Personal</p>
                </div>
            </div>
        
    </div>
  )
}

export default Contact;