import React from "react";
import Card from "./card";
import { FaServicestack } from "react-icons/fa";

function Services() {
  return (
    <div
      className="h-fit bg-[#0b0c10] py-32 border-gray border-b-[1px] text-center"
      id="services"
    >
      <h1 className="text-[#66fcf1] text-5xl font-[900]">Services</h1>
      <p className=" mt-3 text-[#c5c6c7] px-10">
        Turning Ideas into Digital Solutions.
      </p>

      <div className="flex justify-around w-full h-fit flex-wrap mt-10">
        <Card
          classes={
            "h-64 md:w-[30vw] hover:bg-[rgba(0,0,0,0.9)] sm:w-[60vw] w-[80vw]"
          }
          service={"WEB DEVELOPMENT"}
          icon={<FaServicestack />}
        />
        <Card
          classes={
            "h-64 md:w-[30vw] hover:bg-[rgba(0,0,0,0.9)] sm:w-[60vw] w-[80vw]"
          }
          service={"INSTRUCTOR"}
          icon={<FaServicestack />}
        />
        <Card
          classes={
            "h-64 md:w-[30vw] hover:bg-[rgba(0,0,0,0.9)] sm:w-[60vw] w-[80vw]"
          }
          service={"CONTENT WRITER"}
          icon={<FaServicestack />}
        />
      </div>
    </div>
  );
}

export default Services;
