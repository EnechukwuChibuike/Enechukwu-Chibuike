import React from "react";
import Card from "./card";
import { BsFillTelephoneFill, BsFillSendFill } from "react-icons/bs";

function Contact() {
  return (
    <div
      className="h-fit bg-dark py-32 border-gray border-b-[1px] text-center"
      id="contact"
    >
      <h1 className="text-[#66fcf1] text-5xl font-[900]">Contact Me</h1>
      <p className=" mt-3 text-[#c5c6c7] px-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae aut
      </p>

      <div className="flex justify-center">
        <div className="flex justify-around w-[60vw] h-[80vh] mt-10 border-[1px] border-slate-600">
          <div className="flex justify-between flex-col">
            <Card
              classes={"h-[37vh] mt-0 bg-dark sm:w-[20vw] w-[80vw]"}
              icon={<BsFillTelephoneFill />}
              service={"Contact Number"}
              servicedes={"+234 9034 921 053"}
              href={"tel:+2349034921053"}
            />
            <Card
              classes={"h-[37vh] mt-5 bg-dark sm:w-[20vw] w-[80vw]"}
              icon={<BsFillSendFill />}
              service={"Email Address"}
              servicedes={"enechukwuchibuike0@gmail.com"}
              href={"mailto:enechukwuchibuike0@gmail.com"}
            />
          </div>
          <form className="grid w-[40vw] h-[80vh] justify-items-center content-center gap-5">
            <input
              className="input placeholder:text-darkgray"
              type="text"
              required
              placeholder="Your Name"
            />
            <input
              className="input placeholder:text-darkgray"
              type="email"
              required
              placeholder="Your Email"
            />
            <input
              className="input placeholder:text-darkgray"
              type="text"
              required
              placeholder="Subject"
            />
            <textarea
              className="pl-3 pt-3 rounded-md bg-gray w-[90%] placeholder:text-darkgray"
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
