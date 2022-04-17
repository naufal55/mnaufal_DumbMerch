import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function InfoModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want delete this data?</Modal.Body>
        <Modal.Footer>
          <Button className="w-25" variant="secondary" onClick={props.close}>
            yes
          </Button>
          <Button className="w-25" variant="danger" onClick={props.close}>
            no
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
