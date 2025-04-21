import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <p>
        Feel free to reach out through the form or connect with me on LinkedIn or GitHub!
      </p>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/husnain-waseem-360493222/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/H-waseem"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit" disabled>Send (Coming Soon)</button>
      </form>
    </div>
  );
}

export default Contact;
