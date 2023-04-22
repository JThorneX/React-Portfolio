import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_tvfqush",
      "template_avwjm8q",
      form.current,
      "xb0_Ys_XW56tEvstj"
    );
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div className="all-contact">
        <div className="contact-text">
          <h1>Contact Me</h1>
          <h3>
            As a beginner in this industry, I am always looking for more
            contacts, so feel free to drop me a line!
          </h3>
          
        </div>
        <div className="contact-wrapper">
          <div className="alt-options">
            <article className="contact-option">
              <MdOutlineEmail size="50" color="cyan" />
              <h4>Email</h4>
              <a href="mailto:jake.d.d.thorne@gmail.com" target="_blank">
                Send an Email
              </a>
            </article>
            <article className="contact-option">
              <BsLinkedin size="50" color="cyan" />
              <h4>Linkedin</h4>
              <a href="https://linkedin.com" target="_blank">
                Send a Message
              </a>
            </article>
            <article className="contact-option">
              <BsSlack size="50" color="cyan" />
              <h4>Slack</h4>
              <a
                href="https://slack.com/app_redirect?channel=U04M5RMNS7M"
                target="_blank"
              >
                Send a Message
              </a>
            </article>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Full Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              />
              <button type="submit" className="btn contact-page-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
