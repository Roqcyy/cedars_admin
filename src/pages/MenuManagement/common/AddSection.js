import React from 'react'
import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
  } from "reactstrap"

const AddSection = ({ placeholder, onclick, sectionValue, setSectionValue }) => {
  return (
    <div>
         <Col md={10}>
              <Card>
                <CardBody>
                  <div className="card-title h4 mb-3">Menu1 name</div>
                  <Row>
                    <Col md={12}>
                      <input
                        className="form-control "
                        type= 'input'
                        value={sectionValue}
                        onChange={(e) =>setSectionValue(e.target.value) }
                        placeholder={placeholder}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="plan-box mb-3">
                        <div className="plan-btn"></div>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col md={12}>
                      <Button
                        className="btn btn-dark w-100"
                        onClick={() => onclick(true)}
                      >
                        Add Section
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
    </div>
  )
}

export default AddSection