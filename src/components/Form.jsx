import React from 'react';
import { Form, Button } from 'react-bootstrap';



const ContactForm = () => {
  return(
<div >
  <h1 align="center">CONTACT</h1>
  <br />
<Form name="contact" method="POST" data-netlify="true" >
<Form.Group  controlId="exampleForm.ControlInput1">

              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                
              />
                </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>


  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} 
    placeholder="Your message..."
/>
  </Form.Group>
<div align="center">
      <Button  type="submit">Send your message</Button>
      </div>

</Form>
</div>
)
}

export default ContactForm;
