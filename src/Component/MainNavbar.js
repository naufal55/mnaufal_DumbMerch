import React, { useState } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import NavLink from "../Atom/NavLink";

const MainNavbar = (props) => {
  // const {isAdmin, setIsLogin} = useState(true)
  const isAdmin = props.admin
  const navigate = useNavigate()

  return (
    <Navbar bg="none" expand="lg" className="align-items-center navbar-dark">
      <Container>
        <Navbar.Brand onClick={()=>navigate('/')}><img src={Logo} width={50} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle className="text-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=" me-auto justify-content-end" id="basic-navbar-nav">
          <Nav className="fw-bold">
          <NavLink label="Complain" color="text-light" click={()=>navigate('/complain')}/>
          {
            isAdmin ? 
            <>
            <NavLink label="Category" color="text-light" click={()=>navigate('/category-list')}/>
            <NavLink label="Product" color="text-light" click={()=>navigate('/product-list')} />  
            </>
            :
            <NavLink label="Profile" color="text-light" click={()=>navigate('/profile')}/>  
          }
            <NavLink label="Logout" color="text-light"  click={props.out}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
