import React, { useState } from "react";
import "./Donate.css";
import { Link } from "react-router-dom";
import Paypal from "./Paypal";
import axios from "axios";

const Donate = () => {
  const [checkout, setCheckOut] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/paypal-donations", {
        name: name,
        email: email,
        message: message,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setName("");
    setEmail("");
    setMessage("");  
    setCheckOut(true);
  };

  return (
    <div className="main">
      <div className="flex-container">
        <div className="div-picture"></div>
        <div className="text">
          <p>
            Your support could power a kinder, fairer, more friendly future.
          </p>
        </div>
        <div className="donate">
          <div className="donate-header">
            <h1>DONATE NOW</h1>
          </div>

          <form onSubmit={submitForm}>
            <div className="donate-form">
              <br />
              <br />
              <label htmlFor="name">Personal Details</label>
              <br />
              <br />
              <input
                value={name}
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name..."
              />
              <br />
              <br />
              <input
                value={email}
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..."
              />
              <br />
              <br />
              <label htmlfor="message">Message(optional)</label>
              <br />
              <br />

              <textarea
                value={message}
                type="text"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <br />
              <br />
              <label htmlfor="submit">Payment</label>
              <br />
              <br />
<button    type="submit" >dsfsdg</button>
              {checkout ? (
                <Paypal />
              ) : (
                <button
                type="submit"
                  id="payment-button"
                  value=''
                 
                ></button>
              )}
            </div>
          </form>
          <br />
          <div className="other">
            <Link to="/getInvolved">
              <h2>Other ways to donate or get involved →</h2>
            </Link>
          </div>
          <br />
        </div>
        <div class="div4"></div>
      </div>
    </div>
  );
};

export default Donate;
