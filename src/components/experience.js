import { FaBullseye } from "react-icons/fa";

function Experience(props) {
  return (
    <div id="experience" className="flex mt-10">
      <FaBullseye className="text-4xl text-[#66fcf1]" />
      <div className="ml-10 leading-15 text-[#c5c6c7]">
        <p className="text-lg font-extrabold text-[#66fcf1]">{props.year}</p>
        <p className="text-3xl font-[900]">{props.title}</p>
        <p className="text-lg mt-5 font-bold">{props.institute}</p>
        <p className="leading-7 text-[#465363]">{props.description}</p>
      </div>
    </div>
  );
}

export default Experience;
