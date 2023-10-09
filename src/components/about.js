import "../styles/about.css";
import CV from "../images/MyCV.pdf";

function About() {
  return (
    <div
      className="h-screen w-full flex justify-between items-center bg-[#45a29e] px-[50px] md:px-[100px]"
      id="about"
    >
      <div className="hidden md:block h-screen w-1/2 aboutImg"></div>
      <div className="grid md:ml-20 w-full md:w-1/2">
        <h1 className="text-[60px] font-[900] text-[#0b0c10]">About Me</h1>
        <p className="text-[#1f2833]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque beatae
          consequatur officia iste qui earum molestias, nisi alias
        </p>
        <div className="flex items-center mt-5">
          <p className="text-dark font-bold">Name:</p>
          <p className="text-darkgray ml-10">Enechukwu Chibuike</p>
        </div>
        <div className="flex items-center mt-5">
          <p className="text-dark font-bold">Email:</p>
          <p className="text-darkgray ml-10">enechukwuchibuike0@gmail.com</p>
        </div>
        <div className="flex items-center mt-5">
          <p className="text-dark font-bold">Phone:</p>
          <p className="text-darkgray ml-10">+234 9034 921053</p>
        </div>
        <div className="flex items-center mt-5">
          <p className="text-dark font-bold">Github:</p>
          <p className="text-darkgray ml-10">EnechukwuChibuike</p>
        </div>
        <div className="flex items-center mt-5">
          <p className="text-dark font-bold">Medium:</p>
          <p className="text-darkgray ml-10">@enechukwuchibuike0</p>
        </div>
        <p className="font-bold mt-10">Know more about me</p>
        <a href={CV} download>
          <button className="mt-5 bg-dark hover:bg-black text-[#66fcf1] w-[200px] h-[50px] rounded-3xl">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
