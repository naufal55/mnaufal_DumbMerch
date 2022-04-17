import React, { Component, useState } from "react";
import { Card, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InputColumn from "../Atom/InputColumn";
import MainButton from "../Atom/MainButton";

const CardFormLog = (props) => {
  const navigate = useNavigate()

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    //update nilai saat isi value di kolom input
    // setState here
    setState({
      ...state, //extarct state
      //beri nilai setState untuk value yg di kolom input, sesuai dengna name form control
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault(); //mencegah reload
    //print state value with console.log here
    console.log(state); //tampilkan yang diketik disini

    // const user = JSON.stringify(state)
    // localStorage.setItem('user', user)
    // const data = localStorage.getItem('user')
    // const dataUser =  JSON.parse(data)
    // console.log(dataUser);
  };

  const handleLogin = () => {
    navigate('/homepage')
  }
  return (
    <>
      <Col md={4} sm={12} className="bg-dark rounded-3 h-100 pb-2">
        <Card.Body>
          <h2 className="text-light my-3">{props.btnName}</h2>
          <Form>
            <div className="my-4">
            <InputColumn
                change={handleOnChange}
                value={state.email}
                name="email"
                type="email"
                holder="Email"
              />
              <InputColumn
                change={handleOnChange}
                value={state.password}
                name="password"
                type="password"
                holder="Password"
              />
            </div>
            <MainButton click={handleLogin} type="button" btn={props.btnName} color="danger" />
          </Form>
        </Card.Body>
      </Col>
      {/* <p className="text-light">email : {state.email}</p>
      <p className="text-light">pass : {state.password}</p> */}
    </>
  );
};

export default CardFormLog;
