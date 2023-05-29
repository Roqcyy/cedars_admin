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
import AddSection from "./common/AddSection"

//i18n
const MenuManagement = props => {
  const [showSection, setShowSection] = useState(false)
  const [productModal, setProductModal] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const [sectionValue, setSectionValue] = useState('')
  const handleAdd = () => {
    setProductModal(false)
    setIsAdded(true)
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
                <AddSection sectionValue={sectionValue}  placeholder="Enter  menu1 name" onclick={setShowSection}  setSectionValue={setSectionValue}/>
          </Row>
          
          {showSection ? (
            <SectionCard
              productModal={productModal}
              setProductModal={setProductModal}
              isAdded={isAdded}
              sectionModal = {setShowSection}
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
                    <Col sm={10}>
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
                        <Button className="w-100 btn-dark" onClick={handleAdd}>
                          Add
                        </Button>
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
                      <a className="page-link" href="#">
                        {"<"}
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        {">"}
                      </a>
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
