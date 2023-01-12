import React,{useRef} from "react";
import "./contact.css";
import {BsInstagram} from "react-icons/bs";
import { TbArrowBigRightLines } from "react-icons/tb";

//for emailJS ------------>
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_krj9wot', 'template_n8mjkan', form.current, 'ZR49jZ6w0iX9VGDVR')
      e.target.reset()//form will reset after submit
  };

  return (
    <section id="contact" className="contact section container">
      <div className="sectionTitle">
        <span className="titleNumber">05.</span>
        <h5 className="titleText">
          Contact{" "}
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Contact Me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <BsInstagram className='icon'/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                @kausik303
              </span>

              <div>
                <a href="instagram link here" target='_blank' className="flex">
                  Send Message <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <BsInstagram className='icon'/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                @kausik303
              </span>

              <div>
                <a href="instagram link here" target='_blank' className="flex">
                  Send Message <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <BsInstagram className='icon'/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                @kausik303
              </span>

              <div>
                <a href="instagram link here" target='_blank' className="flex">
                  Send Message <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="form grid">
          <h3>Send me an email</h3>
          <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter your Name" />
          <input type="email" name="email" placeholder="Enter your Email" />
          <textarea name="message" placeholder="Enter your message"/>
          <button className="formBtn" type="submit" name="submit">Send Email</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
