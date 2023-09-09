function Skills(props) {
  return (
    <div>
      <div className="grid md:w-[40vw] mt-10">
        <div className="flex justify-between text-[#c5c6c7] leading-10 font-bold text-lg">
          <p>{props.skill}</p>
          <p>{props.percent}</p>
        </div>

        <div className=" md:w-[40vw] h-[10px] bg-[#c5c6c7]">
          <div className={`${props.width} h-[10px] bg-[#66fcf1]`}></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
