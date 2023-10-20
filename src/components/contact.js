import { useRef, useState } from "react";
import Card from "./card";
import { BsFillTelephoneFill, BsFillSendFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import PulseLoader from "react-spinners/PulseLoader";

function Contact() {
  const [loader, setLoader] = useState(false);
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    emailjs
      .sendForm(
        "service_scdmgug",
        "template_t937k5p",
        form.current,
        "bOZHC71xqWARx_Ngd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(() => {
      name.current.value = "";
      email.current.value = "";
      subject.current.value = "";
      message.current.value = "";
      setLoader(false);
    }, 3000);
  };
  return (
    <div
      className="h-fit bg-dark py-32 border-t-gray border-b-[1px] text-center"
      id="contact"
    >
      <h1 className="text-[#66fcf1] text-5xl font-[900]">Contact Me</h1>
      <p className=" mt-3 text-[#c5c6c7] px-10">
        Let's connect and create web magic together.
      </p>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:justify-around w-[65vw] items-center h-fit md:h-[80vh] mt-10 md:border-[1px] md:border-slate-600">
          <div className="flex items-center justify-between flex-col h-[70vh]">
            <Card
              classes={
                "h-[50vh] md:h-[30vh] mt-0 bg-[#0b0c10] md:w-[20vw] w-[80vw] md:bg-transparent bg-darkgray"
              }
              icon={<BsFillTelephoneFill />}
              service={"Contact Number"}
              servicedes={"+234 9034 921 053"}
              href={"tel:+2349034921053"}
            />
            <Card
              classes={
                "h-[50vh] md:h-[30vh] mt-5 bg-[#0b0c10] md:w-[20vw] w-[80vw] md:bg-transparent bg-darkgray"
              }
              icon={<BsFillSendFill />}
              service={"Email Address"}
              servicedes={"enechukwuchibuike0@gmail.com"}
              href={"mailto:enechukwuchibuike0@gmail.com"}
            />
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid w-[80vw] mt-10 md:mt-0 md:w-[40vw] h-[80vh] border-gray md:border-none border-[1px] py-5 md:py-0 justify-items-center content-center gap-5"
          >
            <input
              className="input placeholder:text-darkgray outline-none"
              type="text"
              required
              name="from_name"
              placeholder="Your Name"
              ref={name}
            />
            <input
              className="input placeholder:text-darkgray outline-none"
              type="email"
              required
              placeholder="Your Email"
              name="user_email"
              ref={email}
            />
            <input
              className="input placeholder:text-darkgray outline-none"
              type="text"
              required
              placeholder="Subject"
              ref={subject}
            />
            <textarea
              className="pl-3 pt-3 rounded-md bg-gray w-[90%] placeholder:text-darkgray outline-none"
              required
              cols="30"
              rows="6"
              placeholder="Message"
              name="message"
              ref={message}
            ></textarea>
            <div className="flex justify-start w-[90%]">
              <button className="flex items-center justify-center bg-primary hover:opacity-[0.8] text-dark w-44 h-12 rounded-3xl">
                {loader === true ? <PulseLoader color="#36d7b7" /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
