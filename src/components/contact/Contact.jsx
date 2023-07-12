import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container container__header">
        <h5>Let's Get in Touch</h5>
      </div>
      <div className="container container__contact">
        <form action = "">
            <input type="text" name = 'name' paceholder="Your Name" required/>
            <input type="email" name = 'email' paceholder="Your Email" required/>
            <textarea name="message" rows="7" placeholder="Your Message"></textarea>
            <button type = "submit">Send Message</button>
          </form>
      </div>
    </section>
  );
};

export default Contact;
