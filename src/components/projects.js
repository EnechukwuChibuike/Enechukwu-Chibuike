import React from "react";
import Project from "./project";
import SVN from "../images/svn.png";
import fashion from "../images/fashion website.png";
import landing from "../images/landing page with material css.png";

function Projects() {
  return (
    <div
      className="min-h-screen h-fit bg-[#0b0c10] py-32 border-gray border-b-[1px] text-center"
      id="services"
    >
      <h1 className="text-[#66fcf1] text-5xl font-[900]">Projects</h1>
      <p className=" mt-3 text-[#c5c6c7] px-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae aut
      </p>

      <div className="flex justify-around flex-wrap min-h-screen">
        <Project
          link={"https://enechukwuchibuike.github.io/SVN-Bricks/"}
          img={SVN}
          name={"THE SVN WEBSITE"}
        />

        <Project
          link={"https://enechukwuchibuike.github.io/Materialcss-practice/"}
          img={landing}
          name={"LANDING PAGE TEMPLATE"}
        />

        <Project
          link={"https://enechukwuchibuike.github.io/Fashion-website/"}
          img={fashion}
          name={"FASHION WEBSITE"}
        />
      </div>
    </div>
  );
}

export default Projects;
