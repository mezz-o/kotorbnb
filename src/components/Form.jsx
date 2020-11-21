import React from 'react';
import { Button } from 'react-bootstrap';




const ContactForm = () => {
  return(
<div >
  <h1 align="center">CONTACT</h1>
  <br />
  <form style={{ backgroundColor:"#E9E9DB"
, borderRadius:"5px" }} align="center" method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
<input  type="hidden" name="form-name" value="contact" />
<p style={{ paddingTop:"1rem" }}>NAME</p>
<input style={{ borderStyle:"none",  width: "75%",  height:'50px', borderRadius:"5px"
 }}  type="text" name="name" placeholder="Your name" /> < br />
 <p style={{ paddingTop:"1rem" }}>EMAIL</p>
  <input style={{   width: "75%", borderStyle:"none",  height:'50px', borderRadius:"5px"
 }}  type="email" name="email" placeholder="Your email" /> <br />
 <p style={{ paddingTop:"1rem" }}>MESSAGE</p> 
  <textarea style={{   width: "75%", borderStyle:"none",  height:'150px', borderRadius:"5px"
 }} name="message" placeholder="Your message" /> <br />
<div style={{ paddingTop:"2rem" }} align="center">
      <Button style={{ color:"ECEC85" }} type="submit">Send your message</Button>
      </div>
      <br />

</form>
</div>
)
}

export default ContactForm;
