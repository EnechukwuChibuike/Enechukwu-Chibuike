import { useState } from "react";

function Project(props) {
  const [display, setdisplay] = useState("hidden");

  const displayBlock = () => {
    setdisplay("block");
  };

  const displayNone = () => {
    setdisplay("hidden");
  };

  return (
    <div className="h-[50vh] w-[30vw]">
      <a
        href={props.link}
        onMouseOver={displayBlock}
        onMouseOut={displayNone}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={`${display} h-[50vh] flex items-center justify-center absolute w-[30vw] bg-[#1f2833]`}
        >
          <h2 className="text-primary underline font-bold">{props.name}</h2>
        </div>
        <img src={props.img} alt="" className="h-full w-full" />
      </a>
    </div>
  );
}

export default Project;
