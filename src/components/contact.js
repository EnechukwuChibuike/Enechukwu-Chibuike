import React from "react";
import Card from "./card";
import { BsFillTelephoneFill, BsFillSendFill } from "react-icons/bs";

function Contact() {
  return (
    <div
      className="h-fit bg-dark py-32 border-t-gray border-b-[1px] text-center"
      id="contact"
    >
      <h1 className="text-[#66fcf1] text-5xl font-[900]">Contact Me</h1>
      <p className=" mt-3 text-[#c5c6c7] px-10">
        Let's connect and create web magic together.
      </p>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:justify-around w-[65vw] items-center h-fit md:h-[80vh] mt-10 md:border-[1px] md:border-slate-600">
          <div className="flex items-center justify-between flex-col h-[70vh]">
            <Card
              classes={
                "h-[50vh] md:h-[30vh] mt-0 bg-[#0b0c10] md:w-[20vw] w-[80vw] md:bg-transparent bg-darkgray"
              }
              icon={<BsFillTelephoneFill />}
              service={"Contact Number"}
              servicedes={"+234 9034 921 053"}
              href={"tel:+2349034921053"}
            />
            <Card
              classes={
                "h-[50vh] md:h-[30vh] mt-5 bg-[#0b0c10] md:w-[20vw] w-[80vw] md:bg-transparent bg-darkgray"
              }
              icon={<BsFillSendFill />}
              service={"Email Address"}
              servicedes={"enechukwuchibuike0@gmail.com"}
              href={"mailto:enechukwuchibuike0@gmail.com"}
            />
          </div>
          <form className="grid w-[80vw] mt-10 md:mt-0 md:w-[40vw] h-[80vh] border-gray md:border-none border-[1px] py-5 md:py-0 justify-items-center content-center gap-5">
            <input
              className="input placeholder:text-darkgray outline-none"
              type="text"
              required
              placeholder="Your Name"
            />
            <input
              className="input placeholder:text-darkgray outline-none"
              type="email"
              required
              placeholder="Your Email"
            />
            <input
              className="input placeholder:text-darkgray outline-none"
              type="text"
              required
              placeholder="Subject"
            />
            <textarea
              className="pl-3 pt-3 rounded-md bg-gray w-[90%] placeholder:text-darkgray outline-none"
              required
              cols="30"
              rows="6"
              placeholder="Message"
            ></textarea>
            <div className="flex justify-start w-[90%]">
              <button className="bg-primary text-dark w-44 h-12 rounded-3xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
