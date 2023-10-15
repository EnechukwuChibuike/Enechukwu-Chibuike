import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import ScrollspyNav from "react-scrollspy-nav";

function Footer() {
  return (
    <div className="bg-darkgray h-fit md:h-[85vh]">
      <div className="h-fit md:h-[75vh] flex justify-between flex-wrap pt-20 px-10 sm:px-20">
        <div className="w-[80vw] md:w-[30vw] mb-10">
          <h2 className="text-primary text-2xl">About Me</h2>
          <p className="text-gray pt-5 w-full md:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in
            autem corrupti veritatis aperiam a modi magnam asperiores facilis
            dolor harum impedit accusamus delectus, facere quis? Unde qui
            voluptatibus recusandae.
          </p>
        </div>

        <div className="w-[80vw] md:w-[15vw] mb-10">
          <h2 className="text-primary text-2xl">Links</h2>

          <ScrollspyNav
            scrollTargetIds={[
              "home",
              "about",
              "services",
              "resume",
              "contact",
              "projects",
            ]}
            activeNavClass="active"
          >
            <nav className="grid text-gray mt-5 gap-3">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#resume">Resume</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </ScrollspyNav>
        </div>

        <div className="hidden md:block w-[15vw]">
          <h2 className="text-primary text-2xl">Skills</h2>

          <div className="pt-5 grid gap-5 text-gray">
            <p>Mentor</p>
            <p>Instructor</p>
            <p>Web Developer</p>
            <p>Content Writer</p>
          </div>
        </div>

        <div className="w-[80vw] md:w-[20vw] mb-20">
          <h2 className="text-primary text-2xl md:text-center">
            Connect With Me
          </h2>

          <div className="flex md:grid justify-items-center gap-3 mt-5">
            <div className="bg-gray w-10 h-10 rounded-full flex items-center hover:bg-dark justify-center">
              <a
                href="https://github.com/EnechukwuChibuike"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="text-xl text-dark hover:text-blue-800" />
              </a>
            </div>

            <div className="bg-gray w-10 h-10 rounded-full flex items-center hover:bg-dark justify-center">
              <a
                href="https://www.linkedin.com/in/enechukwu-chibuike/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="text-xl text-dark hover:text-blue-800" />
              </a>
            </div>

            <div className="bg-gray w-10 h-10 rounded-full flex items-center hover:bg-dark justify-center">
              <a
                href="https://twitter.com/EnechukwuChibu4"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className="text-xl text-dark hover:text-blue-800" />
              </a>
            </div>

            <div className="bg-gray w-10 h-10 rounded-full flex items-center hover:bg-dark justify-center">
              <a
                href="https://www.facebook.com/philip.enechukwu"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="text-xl text-dark hover:text-blue-800" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray text-center px-5">
        Copyright ©2023 All rights reserved | Enechukwu Chibuike
      </p>
    </div>
  );
}

export default Footer;
