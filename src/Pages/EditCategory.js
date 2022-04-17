import React from "react";
import { Container } from "react-bootstrap";
import InputColumn from "../Atom/InputColumn";
import MainButton from "../Atom/MainButton";

const EditCategory = () => {
  return (
    <Container>
      <h4 className="text-light my-4">Edit Category</h4>
      <div className="my-5">
        <InputColumn />
      </div>
      <MainButton color="success" btn="Save" />
    </Container>
  );
};

export default EditCategory;
