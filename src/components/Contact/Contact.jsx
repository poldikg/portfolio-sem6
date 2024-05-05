import React, {useRef} from "react";
import "./Contact.css"
import emailjs, { send } from "emailjs-com"

const Contact = () =>{

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vqxxxcx', 'template_a4ws6to', form.current, 'prJJuOupWb1oCnkxU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    
          e.target.reset();
      };

    return (
        <div className="contact-section" id="contact">
            <h1 className="contactH1">CONTACT ME</h1>
            <div className="inner-contact-section"> 
                <h3> GET IN <br />TOUCH WITH  <br /> ME FOR <br /> YOUR NEXT <br /> PROJECT </h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-first-row">
                        <input type="text" name="firstName" placeholder="First Name" required/>
                        <input type="text" name="lastName" placeholder="Last Name" required />
                    </div>
                    <input type="email" name="email" placeholder="Email" required/>
                    <textarea name="message" placeholder="Type your message" rows="10" required>
                    </textarea>
                    <button type="submit">Submit </button>
                </form>
            </div>
        </div>
    )
}

export default Contact