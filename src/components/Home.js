import React from "react";
import "./Style.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import HomePage from "./HomePage";
import Profile from "./Profile";
import { Navbar, Container } from "react-bootstrap";


function Home(props) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.vhv.rs/dpng/d/604-6045233_tko-studios-logo-hd-png-download.png"
              width="30"
              height="50"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
          <Container>
      <Navbar.Brand>Welcome to MAKE-FUN-----------------------------captainTOKIO</Navbar.Brand>
    </Container>
          <LoginButton />
          <LogoutButton />
        </Container>
      </Navbar>
     <HomePage/>
        <Profile />
      
    </>
  );
}

export default Home;
