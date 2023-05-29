import React from "react"
import { Card, CardBody, Row, Col, Table, Button } from "reactstrap"
//Import Breadcrumbs

//i18n
const SectionCard = ({value, type, sectionModal, setProductModal, isAdded }) => {
  //meta title
  document.title = "Menu Management"

  return (
    <Row>
      <Col md={10}>
        <Card>
          <CardBody>
            <div className="card-title h4 mb-3">Section 1 Name</div>
            <Row>
              <Col md={12}>
                <input
                  className="form-control "
                  type={type}
                  value={value}
                  placeholder="Enter section 1 name"
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
            <div className="card-title h4 my-3">Product List</div>

            <Row>
            <Button
                onClick={() => {
                  sectionModal(false)
                }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </Button>
              <Col md={12}>
             
                {!isAdded ? (
                  <div
                    className="border border-2 d-flex align-items-center justify-content-center"
                    style={{ minHeight: "200px", cursor: "pointer" }}
                    onClick={() => setProductModal(true)}
                  >
                    Add the products to the list
                  </div>
                ) : (
                  <>
                    <div
                      className="table-responsive table-bordered border-2 p-2"
                      style={{ maxHeight: "200px" }}
                    >
                      <Table className="table mb-0 border-none">
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Company Name</th>
                            <th className="text-center">Add</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td className="align-middle">Mark</td>
                            <td className="align-middle">Otto</td>
                            <td className="text-center">
                              <Button className="btn-dark"></Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td className="text-center">
                              <Button className="btn-dark"></Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td className="align-middle">Larry</td>
                            <td className="align-middle">the Bird</td>
                            <td className="text-center">
                              <Button className="btn-dark"></Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td className="align-middle">Larry</td>
                            <td className="align-middle">the Bird</td>
                            <td className="text-center">
                              <Button className="btn-dark"></Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td className="align-middle">Larry</td>
                            <td className="align-middle">the Bird</td>
                            <td className="text-center">
                              <Button className="btn-dark"></Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    
                  </>
                )}
              </Col>
              <Row className="my-sm-3">
                      <Col sm={6}>
                        <Button className="btn-danger">Reset</Button>
                      </Col>
                      <Col sm={6} className="text-end">
                        <Button className="btn-primary me-sm-3">
                          Preview{" "}
                        </Button>
                        <Button className="btn-dark">Save</Button>
                      </Col>
              </Row>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default SectionCard
