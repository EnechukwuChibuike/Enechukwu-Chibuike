import "../styles/about.css";

function About() {
  return (
    <div
      className="h-screen flex justify-between items-center bg-[#45a29e] pl-[100px] pr-[100px]"
      id="about"
    >
      <div className="h-screen w-[60vw] aboutImg"></div>
      <div className="grid ml-20">
        <h1 className="text-[60px] font-[900] text-[#0b0c10]">About Me</h1>
        <p className="text-[#1f2833]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque beatae
          consequatur officia iste qui earum molestias, nisi alias
        </p>
        <div className="flex items-center mt-5">
          <p className="text-[#0b0c10] font-bold">Name:</p>
          <p className="text-[#1f2833] ml-10">Enechukwu Chibuike</p>
        </div>
        <div className="flex items-center mt-5">
          <p className="text-[#0b0c10] font-bold">Email:</p>
          <p className="text-[#1f2833] ml-10">enechukwuchibuike0@gmail.com</p>
        </div>
        <div className="flex items-center mt-5">
          <p className="text-[#0b0c10] font-bold">Phone:</p>
          <p className="text-[#1f2833] ml-10">+234 9034 921053</p>
        </div>
        <div className="flex items-center mt-5">
          <p className="text-[#0b0c10] font-bold">Github:</p>
          <p className="text-[#1f2833] ml-10">EnechukwuChibuike</p>
        </div>
        <div className="flex items-center mt-5">
          <p className="text-[#0b0c10] font-bold">Medium:</p>
          <p className="text-[#1f2833] ml-10">@enechukwuchibuike0</p>
        </div>
        <p className="font-bold mt-10">Know more about me</p>
        <button className="mt-5 bg-[#0b0c10] text-[#66fcf1] w-[200px] h-[50px] rounded-3xl">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default About;
