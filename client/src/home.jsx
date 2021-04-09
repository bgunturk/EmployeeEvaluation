import React from 'react';
import './index.css';

export default function home() {
  return (
    <div className="homeContainer">
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
