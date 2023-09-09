import React, { useState, useEffect, useCallback } from "react";

const names = ["Frontend Developer", "Content Writer", "Web Instructor"];

function Home(props) {
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <div
      className={`${props.height} grid items-center justify-center`}
      id="home"
    >
      <div className="text-center">
        <h1 className="text-[#66fcf1] font-bold tracking-[10px] text-lg">
          HEY! I AM
        </h1>
        <p className="text-[30px] sm:text-[40px] md:text-[60px] text-[#c5c6c7] font-extrabold">
          Enechukwu Chibuike
        </p>
        <p className="text-[#c5c6c7] text-[25px] font-bold">
          I'm a <strong className="text-[#66fcf1] ">{newName}</strong>
        </p>
      </div>
    </div>
  );
}

export default Home;
