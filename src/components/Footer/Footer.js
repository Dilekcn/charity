import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div id="footer">
        <h1 id="form-title">Sign up for our newsletter</h1>
        <form id="form-footer">
          <input className="form-input" type="text"/>
          <input className="form-input" type="text"/>
          <input className="form-input" type="text"/>
          <button id="form-btn" type="submit">Send</button>
        </form>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
