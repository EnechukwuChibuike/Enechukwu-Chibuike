import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Resume from "./components/resume";
import ScrollSpy from "react-ui-scrollspy";

function App(logo, height) {
  const [menu, setMenu] = useState(false);

  const [sticky, setSticky] = useState("");
  const [stickyNav, setStickyNav] = useState("");
  const [stickyHeight, setStickyHeight] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass =
      scrollTop >= 250 ? "fixed bg-[#c5c6c7] shadow-xl z-10" : "";
    const stickynav = scrollTop >= 250 ? "text-[#0b0c10]" : "text-[#c5c6c7]";
    const stickyheight = scrollTop >= 250 ? "h-[100vh]" : "h-[85vh]";

    setSticky(stickyClass);
    setStickyNav(stickynav);
    setStickyHeight(stickyheight);
  };

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="App" id="home">
        <Header className={sticky}>
          <Logo
            href="https://preview.colorlib.com/#ronaldo"
            target="blank"
            className={stickyNav}
          >
            Enechukwu
          </Logo>
          <Div style={{ height: `${menu === false ? "0vh" : "50vh"}` }}>
            <Nav
              data-to-scrollspy-id="home"
              className={stickyNav}
              href="#home"
              style={{ marginTop: `${menu === false ? "" : "20px"}` }}
            >
              Home
            </Nav>
            <Nav
              className={stickyNav}
              href="#about"
              data-to-scrollspy-id="about"
            >
              About
            </Nav>
            <Nav
              className={stickyNav}
              href="#resume"
              data-to-scrollspy-id="resume"
            >
              Resume
            </Nav>
            <Nav
              className={stickyNav}
              href="#services"
              data-to-scrollspy-id="services"
            >
              Services
            </Nav>
            <Nav
              className={stickyNav}
              href="#projects"
              data-to-scrollspy-id="projects"
            >
              Projects
            </Nav>
            <Nav
              className={stickyNav}
              href="#contact"
              data-to-scrollspy-id="contact"
            >
              Contact
            </Nav>
          </Div>
          <Media onClick={handleClick}>
            <Menu>
              <MenuIcon></MenuIcon>
              <MenuIcon></MenuIcon>
              <MenuIcon></MenuIcon>
            </Menu>
            <p>MENU</p>
          </Media>
        </Header>

        <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
          <Home height={stickyHeight} />
          <About />
          <Resume />
          <Services />
          <Projects />
          <Contact />
        </ScrollSpy>
      </div>
    </>
  );
}

export default App;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 15vh;
  height: fit-content;
  padding: 0px 100px;
  width: 100%;
  transition: 1s;

  @media (max-width: 800px) {
    justify-content: space-between;
    padding: 0px 50px;
    background: #c5c6c7;
  }
`;

const Logo = styled.a`
  font-weight: bolder;
  font-size: 30px;
  text-decoration: none;

  &::first-letter {
    background: #66fcf1;
    border-radius: 50%;
    padding: 5px 10px;
    color: #1f2833;
  }

  @media (max-width: 800px) {
    color: #0b0c10;
  }
`;

const Div = styled.div`
  width: 35vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    display: grid;
    position: absolute;
    width: 100%;
    left: 0px;
    top: 12vh;
    background-color: #c5c6c7;
    overflow-y: hidden;
    transition: 1s;
  }
`;

const Nav = styled.a`
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    border-bottom: 3px solid #66fcf1;
  }

  @media (max-width: 800px) {
    color: #0b0c10;
    margin: 0px 50px;
    font-weight: 600;
  }
`;

const Media = styled.div`
  color: white;
  display: none;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    color: #0b0c10;
    font-weight: bold;
  }
`;

const Menu = styled.div``;

const MenuIcon = styled.div`
  height: 2px;
  width: 25px;
  background-color: #66fcf1;
  margin-bottom: 5px;
  margin-right: 5px;
`;
