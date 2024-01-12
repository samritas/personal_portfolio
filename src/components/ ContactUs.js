import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "./assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';
import './contactus.css'
import TrackVisibility from 'react-on-screen';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pf36i9i', 'template_4g77d1i', form.current, 'wiqgmdouuIVUunBz9')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          alert("email sent succesfully")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

 <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail} >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                       <input type="text" name="user_name" placeholder='user name' />
                    </Col>
                  
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" placeholder='email' />
                    </Col>
                    <Col size={12} className="px-1">
                    <textarea name="message"  placeholder='message'/>
                
                     <input type="submit" value="Send" />
                    
                    </Col>
                  
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};