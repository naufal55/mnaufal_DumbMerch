import React, { useState } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import NavLink from "../Atom/NavLink";

const MainNavbar = (props) => {
  const {isAdmin, setIsLogin} = useState(true)

  // const isAdmin = true
  const navigate = useNavigate()

  const handleProf = () => {
    navigate('/profile')
  }

  return (
    <Navbar bg="none" expand="lg" className="align-items-center navbar-light">
      <Container>
        <Navbar.Brand onClick={()=>navigate('/')}><img src={Logo} width={50} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle className="text-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=" me-auto justify-content-end" id="basic-navbar-nav">
          <Nav className="fw-bold">
          <NavLink label="Complain" color="text-light" to="#link"/>
          {
            isAdmin ? 
            <>
            <NavLink label="Category" color="text-light" to="#link"/>
            <NavLink label="Product" color="text-light" to="#link"/>  
            </>
            :
            <NavLink label="Profile" color="text-light" click={handleProf}/>  
          }
            <NavLink label="Logout" color="text-light" to="#link"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
