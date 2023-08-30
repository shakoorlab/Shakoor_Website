import React from "react";
// import { Heading } from "../About/Heading";
import { contact } from "../../components/data/data";
import "./End.css";
// import ContactHero from "./ContactHero";

export const End = () => {
  return (
    <>
      {/* <ContactHero /> */}
      <div className="contact ">
        <div className="container">
          {/* <Heading title="Keep In Touch" /> */}
          <div className="content flexsb">
            <div className="right">
              <form>
                <div className="flex">
                  <input type="text" placeholder="Name" data-aos="flip-left" />
                  <input
                    type="email"
                    placeholder="Email"
                    data-aos="flip-right"
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
