import React from "react";
import Project from "./project";
import SVN from "../images/svn.png";
import fashion from "../images/fashion website.png";
import landing from "../images/landing page with material css.png";
import bookSearch from "../images/book search.png";
import calculator from "../images/calculator.png";
import quiz from "../images/quiz.png";
import recipe from "../images/recipe app.png";
import knowledge from "../images/be a millionaire.png";

function Projects() {
  return (
    <div
      className="min-h-screen h-fit bg-[#0b0c10] py-32 px-10 border-gray border-b-[1px] text-center"
      id="projects"
    >
      <h1 className="text-[#66fcf1] text-5xl font-[900]">Projects</h1>
      <p className=" my-3 text-[#c5c6c7] px-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae aut
      </p>

      <div className="flex justify-around md:justify-between flex-wrap min-h-screen">
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

        <Project
          link={"https://enechukwuchibuike.github.io/Recipe-App/"}
          img={recipe}
          name={"RECIPE APP"}
        />

        <Project
          link={"https://enechukwuchibuike.github.io/Book_Search_App/"}
          img={bookSearch}
          name={"BOOK SEARCH APP"}
        />

        <Project
          link={"https://enechukwuchibuike.github.io/Knowledge_challenge/"}
          img={knowledge}
          name={"WHO WANTS TO BE A MILLIONAIRE"}
        />

        <Project
          link={"https://enechukwuchibuike.github.io/calculator/"}
          img={calculator}
          name={"CALCULATOR"}
        />

        <Project
          link={"https://enechukwuchibuike.github.io/my-quiz/"}
          img={quiz}
          name={"SIMPLE QUIZ"}
        />
      </div>
    </div>
  );
}

export default Projects;
