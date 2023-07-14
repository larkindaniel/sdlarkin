import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" style= {{marginBottom: "15vw"}}>
      <div className="container container__header">
        <h5>Get in Touch</h5>
      </div>
      <div className="container container__contact">
        <div className="contact__body">
          <p>
          
          Feel free to send me a
message. I love meeting people and am always seeking new opportunities!  
          </p>
          <a href="mailto:daniel.larkin@uwaterloo.ca">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
