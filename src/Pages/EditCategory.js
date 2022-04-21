import React, { useState } from "react";
import { Container } from "react-bootstrap";
import InputColumn from "../Atom/InputColumn";
import MainButton from "../Atom/MainButton";
import data from "../Assets/DataDummy.js";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const params = useParams();
  const index = params.id;
  const [state, setState] = useState({
    namabarang: ""
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
      <h4 className="text-light my-4">Edit Category</h4>

      <div className="my-5">
        <InputColumn 
          holder={data[index].namabarang}
          value={state.namabarang}
          change={handleOnChange}
          name="namabarang"
          />
      </div>
      <MainButton color="success" btn="Save" />
    </Container>
  );
};

export default EditCategory;
