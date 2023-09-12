import React from "react";
import Card from "./card";
import { BsFillTelephoneFill, BsFillSendFill } from "react-icons/bs";

function Contact() {
  return (
    <div
      className="h-fit bg-[#0b0c10] py-32 border-gray border-b-[1px] text-center"
      id="contact"
    >
      <h1 className="text-[#66fcf1] text-5xl font-[900]">Contact Me</h1>
      <p className=" mt-3 text-[#c5c6c7] px-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae aut
      </p>

      <div>
        <Card
          classes={"h-64 hover:bg-[rgba(0,0,0,0.9)] sm:w-[20vw] w-[80vw]"}
          icon={<BsFillTelephoneFill />}
          service={"Contact Number"}
          servicedes={"+234 9034 921 053"}
        />
        <Card
          classes={"h-64 hover:bg-[rgba(0,0,0,0.9)] sm:w-[20vw] w-[80vw]"}
          icon={<BsFillSendFill />}
          service={"Email Address"}
          servicedes={"enechukwuchibuike0@gmail.com"}
        />
        <Card
          classes={"h-64 hover:bg-[rgba(0,0,0,0.9)] sm:w-[20vw] w-[80vw]"}
          icon={<BsFillTelephoneFill />}
          service={"Contact Number"}
          servicedes={"+234 9034 921 053"}
        />
      </div>
    </div>
  );
}

export default Contact;
