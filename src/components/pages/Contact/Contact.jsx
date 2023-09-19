import React, { useState, useRef } from "react";
import { contact } from "../../data/data";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [errors, setErrors] = useState({});
  // --------------------------------------form validation/emailjs logic---------------------------------------
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!nameRef.current.value) {
      validationErrors.name = "Name is required.";
    }
    if (!validateEmail(emailRef.current.value)) {
      validationErrors.email = "Valid email is required.";
    }
    if (!subjectRef.current.value) {
      validationErrors.subject = "Subject is required.";
    }
    if (!messageRef.current.value) {
      validationErrors.message = "Message is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Proceed with sending the email if there are no validation errors
    emailjs
      .sendForm(
        "service_s2mx5zp",
        "template_q209fem",
        form.current,
        "zymaNpU96mZfAfLMk"
      )
      .then(
        (result) => {
          console.log(result.text);

          // Clear the form after successful submission
          nameRef.current.value = "";
          emailRef.current.value = "";
          subjectRef.current.value = "";
          messageRef.current.value = "";
          setErrors({}); // Also clear any errors
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // --------------------------------------form validation code---------------------------------------

  return (
    <>
      <div className="contact ">
        <div className="container">
          <div className="content flexsb">
            <div className="right">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="flex">
                  <input
                    ref={nameRef}
                    type="text"
                    name="user_name"
                    placeholder={errors.name || "Name"}
                    data-aos="flip-left"
                    style={{ background: errors.name ? "#FFE6E6" : "white" }}
                  />

                  <input
                    ref={emailRef}
                    name="user_email"
                    type="email"
                    placeholder={errors.email || "Email"}
                    data-aos="flip-right"
                    defaultValue=""
                    style={{ background: errors.email ? "#FFE6E6" : "white" }}
                  />
                </div>

                <input
                  ref={subjectRef}
                  name="subject"
                  type="text"
                  placeholder={errors.subject || "Subject"}
                  data-aos="flip-up"
                  style={{ background: errors.subject ? "#FFE6E6" : "white" }}
                />

                <textarea
                  ref={messageRef}
                  placeholder={errors.message || "Your message"}
                  name="message"
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                  style={{ background: errors.message ? "#FFE6E6" : "white" }}
                ></textarea>

                <button
                  className="contact-submit"
                  data-aos="zoom-in-up"
                  type="submit"
                >
                  Contact
                </button>
              </form>
            </div>
            <div className="left">
              {contact.map((item) => (
                <div className="box" data-aos="zoom-in">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
