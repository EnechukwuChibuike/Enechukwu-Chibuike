import { useState, useEffect } from "react";
import Experience from "./experience";
import ScrollSpy from "react-ui-scrollspy";
import Skills from "./skills";

function Resume({
  year,
  institute,
  title,
  description,
  skill,
  width,
  percent,
}) {
  const [sticky, setSticky] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 1250 ? "fixed top-0 z-0" : "";
    setSticky(stickyClass);
    const removeSticky = "bg-white";
    if (scrollTop >= 3706) {
      setSticky(removeSticky);
    }
  };
  return (
    <div id="resume">
      <div className="flex h-fit bg-dark px-[50px] md:px-[100px] border-b-[1px] border-gray  pb-[100px] md:pb-[200px]">
        <div className="basis-[70vw] hidden md:block">
          <nav
            className={`text-gray gap-5 text-[20px] flex flex-col justify-center font-bold h-screen ${sticky}`}
          >
            <a
              data-to-scrollspy-id="experience"
              className="w-fit"
              href="#experience"
            >
              Experience
            </a>
            <a data-to-scrollspy-id="skills" className="w-fit" href="#skills">
              Skills
            </a>
            <a data-to-scrollspy-id="awards" className="w-fit" href="#awards">
              Awards
            </a>
          </nav>
        </div>
        <div className="min-h-[200vh] h-fit">
          <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
            <div id="experience">
              <h1 className="text-primary text-4xl font-[900] mt-32 md:mt-60">
                Experience
              </h1>
              <Experience
                year={"2021 - 2022"}
                institute={"Rad5 Academy"}
                title={"Web Developer Intern"}
                description={
                  "Developed and maintained courteous and effective working relationships with team members, mentors, and clients"
                }
              />
              <Experience
                year={"2022 - 2023"}
                institute={"Code Inclusive"}
                title={"Frontend Developer"}
                description={
                  "Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3,               ensuring high-quality user experience and accessibility."
                }
              />

              <Experience
                year={"2021 - 2023"}
                institute={"Google Developers Group Aba"}
                title={"Content Writer Volunteer"}
                description={
                  "Contributed to the creation of content that was used to raise awareness for DevfestAba 2021.  Currently a member of the content creation team for DevfestAba 2022."
                }
              />

              <Experience
                year={"2023 - Present"}
                institute={"LearnFactory Nigeria"}
                title={"Web development Instructor"}
                description={
                  "Excellent communicator and facilitator with a knack for breaking down complex concepts     into easy-to-understand terms."
                }
              />
            </div>
            <div id="skills">
              <h1 className="text-primary text-4xl font-[900] mt-32">Skills</h1>
              <div className="mt-[50px]">
                <Skills skill={"HTML"} width={"w-[99%]"} percent={"99%"} />
                <Skills skill={"CSS"} width={"w-[99%]"} percent={"99%"} />
                <Skills
                  skill={"Javascript"}
                  width={"w-[90%]"}
                  percent={"90%"}
                />
                <Skills skill={"React"} width={"w-[85%]"} percent={"85%"} />
                <Skills skill={"Nextjs"} width={"w-[85%]"} percent={"85%"} />
                <Skills
                  skill={"Typescript"}
                  width={"w-[75%]"}
                  percent={"75%"}
                />
                <Skills skill={"Tailwind"} width={"w-[85%]"} percent={"85%"} />
                <Skills skill={"GraphQL"} width={"w-[70%]"} percent={"70%"} />
                <Skills skill={"Express"} width={"w-[70%]"} percent={"70%"} />
                <Skills skill={"Bootstrap"} width={"w-[80%]"} percent={"80%"} />
              </div>
            </div>
            <div id="awards">
              <h1 className="text-primary text-4xl font-[900] mt-32">Awards</h1>
              <Experience
                year={"2023 - Present"}
                institute={"LearnFactory Nigeria"}
                title={"Web development Instructor"}
                description={
                  "Excellent communicator and facilitator with a knack for breaking down complex concepts     into easy-to-understand terms."
                }
              />
              <Experience
                year={"2023 - Present"}
                institute={"LearnFactory Nigeria"}
                title={"Web development Instructor"}
                description={
                  "Excellent communicator and facilitator with a knack for breaking down complex concepts     into easy-to-understand terms."
                }
              />
              <Experience
                year={"2023 - Present"}
                institute={"LearnFactory Nigeria"}
                title={"Web development Instructor"}
                description={
                  "Excellent communicator and facilitator with a knack for breaking down complex concepts     into easy-to-understand terms."
                }
              />
            </div>
          </ScrollSpy>
        </div>
      </div>
    </div>
  );
}

export default Resume;
