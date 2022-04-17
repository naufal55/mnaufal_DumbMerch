import React,{useState} from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../Component/ModalDelete.js";
import MainButton from "../Atom/MainButton";
import data from "../Assets/DataDummy.js";

const CategoryList = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  return (
    <Container>
      <h4 className="text-light my-4">List category</h4>
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th className="col-3">No</th>
            <th className="col-4">Category Name</th>
            <th className="col-5">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const handleEdit = () => {
              navigate("/edit-category/" + item.id);
            };
            return (
              <tr>
                <td>{item.id + 1}</td>
                <td>{item.namabarang}</td>
                <td>
                  <Row>
                    <Col md={3}>
                      <MainButton click={handleEdit} color="success" type="button" btn="Edit"/>
                    </Col>
                    <Col md={3}>
                      <MainButton click={handleShow} color="danger" type="button" btn="Delete"/>
                    </Col>
                  </Row>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalDelete show={show} close={handleClose}/>
    </Container>
  );
};

export default CategoryList;
