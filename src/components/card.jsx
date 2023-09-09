import { FaServicestack } from "react-icons/fa";

function Card(props) {
  return (
    <div
      className={`${props.classes} shadow-lg bg-[#1f2833] mt-10 flex flex-col items-center justify-around`}
    >
      <FaServicestack className="text-gray text-4xl" />
      <h2 className="text-primary text-2xl">{props.service}</h2>
      <p className="text-gray mx-10">{props.servicedes}</p>
    </div>
  );
}

export default Card;
