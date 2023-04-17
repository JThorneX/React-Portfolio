import React from "react";

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
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required />
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
