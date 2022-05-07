import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import InputColumn from "../Atom/InputColumn";
import MainButton from "../Atom/MainButton";
import data from "../Assets/DataProfiles";

const EditProfile = () => {
  const params = useParams();
  const index = 0
  const [state, setState] = useState({
    name :"",
    email:"",
    phone: "",
    gender: "",
    address: ""
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
  return (
    <Container>
      <h4 className="text-light my-4">Edit Profile</h4>
      <div className="my-5">
        <InputColumn
          holder={data[index].name}
          value={state.name}
          change={handleOnChange}
          name="name"
        />
        <InputColumn
          holder={data[index].email}
          value={state.email}
          change={handleOnChange}
          name="email"
          
        />
        <InputColumn
          holder={data[index].phone}
          value={state.phone}
          change={handleOnChange}
          name="phone"
        />
        <InputColumn
          holder={data[index].gender}
          value={state.gender}
          change={handleOnChange}
          name="gender"
        />
        <InputColumn
          holder={data[index].address}
          value={state.address}
          change={handleOnChange}
          name="address"
          as="textarea"
          rows={3}
        />
      </div>
      <MainButton color="success" btn="Save" />
    </Container>
  );
};

export default EditProfile;
