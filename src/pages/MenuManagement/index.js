import React, { useState } from "react"
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Table,
} from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import SectionCard from "./Components/SectionCard"

//i18n
const MenuManagement = props => {
  const [showSection, setShowSection] = useState(false)
  const [productModal, setProductModal] = useState(false)
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAdd = () => {
    setProductModal(false);
    setIsAdded(true);
  }

  //meta title
  document.title = "Menu Management"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={"Menu Management"}
            breadcrumbItem={"Menu Settings 1"}
          />
          <Row>
            <Col md={8}>
              <Card>
                <CardBody>
                  <div className="card-title h4 mb-3">Menu name</div>
                  <Row>
                    <Col md={12}>
                      <input
                        className="form-control "
                        type={props.type}
                        value={props.value}
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
                        onClick={() => setShowSection(true)}
                      >
                        Add Section
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {showSection ? (
            <SectionCard
              productModal={productModal}
              setProductModal={setProductModal}
              isAdded={isAdded}
            />
          ) : (
            ""
          )}
          <Modal size="lg" centered isOpen={productModal}>
            <ModalHeader>
              <h5 className="modal-title mt-0" id="myLargeModalLabel">
                Search a Product
              </h5>
              <Button
                onClick={() => {
                  setProductModal(false)
                }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </Button>
            </ModalHeader>
            <ModalBody>
              <Row className="mb-2">
                <Col sm={12}>
                  <Row>
                    <Col sm={8}>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Enter product name or company name"
                      />
                    </Col>
                    <Col className="my-sm-0 my-2">
                      <Button className="btn btn-dark btn-outline w-100 h-100">
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="table-responsive">
                <Table className="table mb-0 table-bordered border-2">
                  <thead>
                    <tr>
                      <th>Registration Date</th>
                      <th>Product Name</th>
                      <th>Company Name</th>
                      <th>Add</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">YYYY.MM.DD</th>
                      <td className="align-middle">Mark</td>
                      <td className="align-middle">Otto</td>
                      <td>
                        <Button className="w-100 btn-dark" onClick={handleAdd}>Add</Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="align-middle">
                        YYYY.MM.DD
                      </th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>
                        <Button className="w-100 btn-dark">Add</Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="align-middle">
                        YYYY.MM.DD
                      </th>
                      <td className="align-middle">Larry</td>
                      <td className="align-middle">the Bird</td>
                      <td>
                        <Button className="w-100 btn-dark">Add</Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="align-middle">
                        YYYY.MM.DD
                      </th>
                      <td className="align-middle">Larry</td>
                      <td className="align-middle">the Bird</td>
                      <td>
                        <Button className="w-100 btn-dark">Add</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <nav aria-label="Page navigation example" className="my-3">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#">{"<"}</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">{">"}</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </ModalBody>
          </Modal>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default MenuManagement
