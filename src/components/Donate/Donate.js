import React, { useState } from "react";
import "./Donate.css";
import { Link } from "react-router-dom";
import Paypal from "./Paypal";
import axios from "axios";

const Donate = () => {
  const [checkout, setCheckOut] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const[classone,setClassOne] = useState("donate")

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post('https://mern-brothers.herokuapp.com/paypal-donations', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setCheckOut(true);
    setClassOne("donate-new")

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
        <div className={classone}>
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
                value={firstname}
                type="text"
                id="firstname"
                name="firstname"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Firstname"
              />
              <br />
              <br />
              <input
                value={lastname}
                type="text"
                id="lastname"
                name="lastname"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Lastname"
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
              <label htmlFor="message">Message(optional)</label>
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
              <label htmlFor="submit">Payment</label>
              <br />
              <br />
              {checkout ? (
                <Paypal />
              ) : (
                <button
                  type="submit"
                  id="payment-button"
                  value=""
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
