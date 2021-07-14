import React, { useState } from 'react';
import './style.css';

import { Button, Modal, Image } from 'react-bootstrap';

function Details(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setShow(true)}>
        {props.title}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Image src={props.image} rounded />
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.overview}</Modal.Body>
      </Modal>
    </>
  );
}
export default Details;
