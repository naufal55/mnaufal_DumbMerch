import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardImage from "../Component/CardImage";
import foto from "../Assets/foto.png";
import CardTransaction from "../Component/CardTransaction";
import CardRating from "../Component/CardRating";
import { useNavigate } from "react-router-dom";
import MainButton from "../Atom/MainButton";

const Profile = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [star, setStar] = useState(0);
  const handleRate = (set) => {
    console.log(star);
    setStar(set);
  };
  const handleSubmit = () => {
    setShow(false);
    localStorage.setItem("star", star);
    navigate("/homepage");
  };
  const handleChangeProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <Container className="mt-3">
      <Row className="d-flex justify-content-center align-items-start my-auto bg-none">
        <div className=" col-sm-12 col-md-7">
          <h4 className="text-danger my-4">My Profile</h4>
          <Row className="gap-3">
            <Col sm={12} md={5}>
              <CardImage src={foto} />
            </Col>
            <Col sm={12} md={6}>
              <div>
                <p className="text-danger my-1 fw-bold">Name</p>
                <p className="text-light mb-4">Yosep</p>
              </div>
              <div>
                <p className="text-danger my-1 fw-bold">Email</p>
                <p className="text-light mb-4">Yosep@gmail.com</p>
              </div>
              <div>
                <p className="text-danger my-1 fw-bold">Phone</p>
                <p className="text-light mb-4">08979273882</p>
              </div>
              <div>
                <p className="text-danger my-1 fw-bold">Gender</p>
                <p className="text-light mb-4">Male</p>
              </div>
              <div>
                <p className="text-danger my-1 fw-bold">Address</p>
                <p className="text-light mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, dolorem.
                </p>
              </div>
              <div>
                <MainButton
                  click={handleChangeProfile}
                  color="success"
                  type="button"
                  btn="Change my profile"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="col-sm-12 col-md-5">
          <h4 className="text-danger my-4 ">My Transaction</h4>

          <CardTransaction
            namabarang="Mouse"
            tglBeli="Saturday, 14 April 2022"
            harga="300.000"
            total="300.000"
            click={handleShow}
            val={localStorage.getItem("star")}
            per={localStorage.getItem("star")}
          />
        </div>
      </Row>
      <CardRating
        rate={handleRate}
        submit={handleSubmit}
        show={show}
        close={handleClose}
      />
    </Container>
  );
};

export default Profile;
