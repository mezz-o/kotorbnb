import React from 'react';
import { Button } from 'react-bootstrap';



const ContactForm = () => {
  return(
<div >
  <h1 align="center">CONTACT</h1>
  <br />
  <form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
<input type="hidden" name="form-name" value="contact" />

<input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message" />
<div align="center">
      <Button  type="submit">Send your message</Button>
      </div>

</form>
</div>
)
}

export default ContactForm;
