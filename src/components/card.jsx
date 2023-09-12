function Card(props) {
  return (
    <div
      className={`${props.classes} shadow-lg bg-[#1f2833] mt-10 flex flex-col items-center justify-around`}
    >
      <span className="text-gray text-4xl">{props.icon}</span>
      <h2 className="text-primary text-2xl">{props.service}</h2>
      <a href={props.href} className="mx-10 text-[blue]">
        {props.servicedes}
      </a>
    </div>
  );
}

export default Card;
