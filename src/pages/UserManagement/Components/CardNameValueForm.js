import React from "react"
import {Col, Row,} from "reactstrap"

function CardNameValueForm(props) {
  return (
    <Row className="mb-3">
      <Col md={6}>
        <Row>
          <label className="col-md-4 col-form-label">{props.title}</label>
          <Col md={8}>
            <input
              className="form-control border-start-0 border-top-0 border-end-0 border-radius-0"
              type={props.type}
              value={props.value}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CardNameValueForm
