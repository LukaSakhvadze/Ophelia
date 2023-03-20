import React, { useState, useRef } from "react";
import ContactCSS from "../ComponentsCSS/Contact.module.css";
import { Link } from "react-router-dom";

function Contact() {
  const ref = useRef();
  const [type, setType] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [option, setOption] = useState("Question");
  const [sent, setSent] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <div className={ContactCSS.contact} id="contact">
      <h2>Contact</h2>
      <p>
        Send us a message and we'll get back to you as soon as possible. You can
        also reach us by phone at{" "}
        <Link to="tel:+212.980.4796">212.980.4796</Link>. Looking forward to
        hearing from you.
      </p>
      <form onSubmit={submit}>
        <label>
          Name - <em>Required</em>
        </label>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setType({ ...type, name: e.target.value })}
        ></input>
        <label>
          Email - <em>Required</em>
        </label>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setType({ ...type, email: e.target.value })}
        ></input>
        <label>
          Phone Number - <em>Required</em>
        </label>
        <input
          type="number"
          placeholder="Phone Number"
          required
          onChange={(e) => setType({ ...type, phone: e.target.value })}
        ></input>
        <label>
          What are you getting in touch about? -{" "}
          <em className={ContactCSS.optional}>Optional</em>
        </label>
        <div className={ContactCSS.selectDiv}>
          <select
            value={option}
            className={ContactCSS[option === "Question" ? "disabled" : null]}
            onChange={(e) => {
              setOption(e.target.value);
            }}
            ref={ref}
          >
            <option value="Question" disabled>
              What are you getting in touch about?
            </option>
            <option value="General">General Inquiry</option>
            <option value="Press">Press Inquiry</option>
          </select>
          <span className={ContactCSS.dropDown}>
            <svg
              onClick={() => ref.current.focus()}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 15l-4.243-4.243l1.415-1.414L12 12.172l2.828-2.829l1.415 1.414z"
              />
            </svg>{" "}
          </span>
        </div>
        <label>
          Website Address I.A. -{" "}
          <em className={ContactCSS.optional}>Optional</em>
        </label>
        <input
          type="text"
          placeholder="Website Address I.A"
          onChange={(e) => setType({ ...type, address: e.target.value })}
        ></input>
        <label>
          Your Message - <em>Required</em>
        </label>
        <textarea
          type="text"
          placeholder="Your Message"
          required
          onChange={(e) => setType({ ...type, message: e.target.value })}
        ></textarea>
        {sent === false ? (
          <button type="submit">Send</button>
        ) : (
          <p>Thank you for your inquiry. We'll be in touch shortly.🙏🙏🙏</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
