import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" style= {{marginBottom: "15vw"}}>
      <div className="container container__header">
        <h5>Get in Touch</h5>
      </div>
      <div className="container container__contact">
        {/* <form action = "">
            <input type="text" name = 'name' placeholder="Your Name" required/>
            <input type="email" name = 'email' placeholder="Your Email" required/>
            <textarea name="message" rows="7" placeholder="Your Message"></textarea>
            <button type = "submit">Send Message</button>
          </form> */}
        <div className="contact__body">
          <p>
          
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, suscipit. Dicta consequuntur labore nisi voluptas velit? Quam, reprehenderit totam, dolore facilis molestiae culpa nam cupiditate dicta, corrupti fugit repellendus consectetur?
            people.
          </p>
          <a href="mailto:daniel.larkin@uwaterloo.ca">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
