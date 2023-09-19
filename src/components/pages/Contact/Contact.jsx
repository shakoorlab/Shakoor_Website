import React from "react";
import { contact } from "../../data/data";
import "./Contact.css";
// import ContactHero from "./ContactHero";

export const Contact = () => {
  return (
    <>
      {/* <ContactHero /> */}
      <div className="contact ">
        <div className="container">
          <div className="content flexsb">
            <div className="right">
              <form>
                <div className="flex">
                  <input type="text" placeholder="Name" data-aos="flip-left" />
                  <input
                    type="email"
                    placeholder="Email"
                    data-aos="flip-right"
                    defaultValue=""
                  />
                </div>
                <input type="email" placeholder="Subject" data-aos="flip-up" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                ></textarea>
                <button className="submit" data-aos="zoom-in-up">
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
