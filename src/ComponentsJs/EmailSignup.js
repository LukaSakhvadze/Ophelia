import React from "react";
import styles from "../ComponentsCSS/EmailSignup.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function EmailSignup() {
  const [type, setType] = useState({ firstName: "", lastName: "", email: "" });
  const [singed, setSigned] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setSigned(true);
  };
  return (
    <div className={styles.emailSignup}>
      <div className={styles.cancelBtnDiv}>
        <button type="text" className={styles.cancelBtn}>
          <Link to="/">🗙</Link>
        </button>
      </div>
      {singed === false ? (
        <div className={styles.container}>
          <h2>Email Signup</h2>
          <form onSubmit={submit}>
            <label>
              First Name - <em>Required</em>
            </label>
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={(e) => setType({ ...type, firstName: e.target.value })}
            ></input>
            <label>
              Last Name - <em>Required</em>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) => setType({ ...type, lastName: e.target.value })}
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
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.container2}>
          <h2>Email Signup</h2>
          <p>Thank you for signing up for email updates!</p>
          <Link to="/" className={styles.closeBtn}>
            Close
          </Link>
        </div>
      )}
    </div>
  );
}

export default EmailSignup;
