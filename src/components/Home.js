import React from "react";
import "./Style.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { Navbar, Container } from "react-bootstrap";


function Home(props) {
  return (
    <>
 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/Images/logo.png"
              width="30"
              height="50"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
          <LoginButton />
          <LogoutButton />
        </Container>
      </Navbar>
      <div>
        <Profile />
      </div>
    </>
  );
}

export default Home;
