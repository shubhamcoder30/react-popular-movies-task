import React, { useState } from 'react';
import './style.css';
import Details from './Details';
import Select from './Select';

import { Card } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
export default function Cards(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="cards">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            className="card_image"
            variant="top"
            src={props.poster_path}
          />
          <Details
            title={props.original_title}
            overview={props.overview}
            image={props.poster_path}
          />
          <Card.Body>
            <div>
              <Button variant="dark" onClick={handleShow}>
                About movie
              </Button>

              <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                  <Modal.Title>{props.original_title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Original Langauge: {props.original_language}
                </Modal.Body>

                <Modal.Body>Popularity: {props.popularity}</Modal.Body>
                <Modal.Body>Release Date: {props.release_date}</Modal.Body>
                <Modal.Body>Votes Average: {props.vote_average}</Modal.Body>
                <Modal.Body> Votes count: {props.vote_count}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              
              <Select />
            </div>
          </Card.Body>
          <Card.Body>
            <Card.Link className="button" href="https://content.jwplatform.com/manifests/yp34SRmf.m3u8">
              Watch preview 
            </Card.Link>
          </Card.Body> 
        </Card>
      </div>
    </>
  );
}
