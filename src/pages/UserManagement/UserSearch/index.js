import React, { useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { isEmpty } from "lodash"
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TableContainer from "components/Common/TableContainer"
import * as Yup from "yup"
import { useFormik } from "formik"

//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import DeleteModal from "../../../components/Common/DeleteModal"
import UserEditCard from "../UserSearch/UserEditCard"

import {
  getOrders as onGetOrders,
  addNewOrder as onAddNewOrder,
  updateOrder as onUpdateOrder,
  deleteOrder as onDeleteOrder,
} from "store/actions"

import {
  OrderId,
  BillingName,
  Date,
  Total,
  PaymentStatus,
  PaymentMethod,
} from "../../../store/e-commerce/EcommerceOrderCol"

//redux
import { useSelector, useDispatch } from "react-redux"
import EcommerceOrdersModal from "../../../store/e-commerce/EcommerceOrdersModal"

import {
  Button,
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  ModalFooter,
} from "reactstrap"

function UserSearch() {
  //meta title
  document.title = "User Management "
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const menuData = ["All", "Today", "This month", "This Year"]
  const [orderList, setOrderList] = useState([])
  const [order, setOrder] = useState(null)
  const [isBlockModal, setIsBlockModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const toggleViewModal = () => setModal1(!modal1)

  const dispatch = useDispatch()
  const { orders } = useSelector(state => ({
    orders: state.ecommerce.orders,
  }))

 
  const [isUserEdit, setIsUserEdit] = useState(false)

  const handleOrderClick = id => {
    setIsUserEdit(true)
  }

  //delete order



  const handleDeleteOrder = () => {
    if (order && order.id) {
      dispatch(onDeleteOrder(order.id))
      setDeleteModal(false)
    }
  }
  const handleOrderClicks = () => {
    setOrderList("")
    setIsEdit(false)
    toggle()
  }
  const columns = useMemo(
    () => [
      {
        Header: `Date of registration`,
        accessor: "orderId",
        width: "150px",
        style: {
          textAlign: "center",
          width: "10%",
          background: "#0000",
        },
        disableFilters: true,
        Cell: cellProps => {
          return <OrderId {...cellProps} />
        },
      },
      {
        Header: "Email",
        accessor: "billingName",
        disableFilters: true,
        Cell: cellProps => {
          return <BillingName {...cellProps} />
        },
      },
      {
        Header: "User Name",
        accessor: "orderdate",
        disableFilters: true,
        Cell: cellProps => {
          return <Date {...cellProps} />
        },
      },
      {
        Header: "Phone Number",
        accessor: "total",
        disableFilters: true,
        Cell: cellProps => {
          return <Total {...cellProps} />
        },
      },
      {
        Header: "Seller Registration",
        accessor: "paymentStatus",
        disableFilters: true,
        Cell: cellProps => {
          return <PaymentStatus {...cellProps} />
        },
      },
      {
        Header: "Company Name",
        accessor: "paymentMethod",
        disableFilters: true,
        Cell: cellProps => {
          return <PaymentMethod {...cellProps} />
        },
      },
      {
        Header: "Status",
        accessor: "action",
        disableFilters: true,
        Cell: cellProps => {
          return (
            <div className="d-flex gap-3">
              <Link
                to="#"
                className="text-success"
                onClick={() => {
                  const orderData = cellProps.row.original
                  handleOrderClick(orderData)
                }}
              >
                <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
              </Link>
            </div>
          )
        },
      },
    ],
    []
  )

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs
            title="User Management"
            breadcrumbItem={isUserEdit ? "User Information" : "User Search"}
            backBtn = {isUserEdit}
            setIsUserEdit={setIsUserEdit}
          />
          {isUserEdit ? (
            <UserEditCard
              setIsBlockModal={setIsBlockModal}
              isBlockModal={isBlockModal}
              setIsUserEdit={setIsUserEdit}
              type="seller"
            />
          ) : (
            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <Row className="mb-2 d-flex align-items-center mt-4  py-2">
                      <Col md={3} xl={2}>
                        <input
                          className="form-control"
                          type="date"
                          id="example-date-input"
                        />
                      </Col>
                      {"~"}
                      <Col md={3} xl={2}>
                        <input
                          className="form-control"
                          type="date"
                          id="example-date-input"
                        />
                      </Col>
                      <Col className="d-flex alig-items-center" md={6} xl={6}>
                        {menuData.map((menu, index) => {
                          return (
                            <Button
                              key={index}
                              type="button"
                              color="light"
                              className="btn me-2"
                              style={{
                                width: "100px",
                              }}
                            >
                              {menu}
                            </Button>
                          )
                        })}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Row>
                          <Col md={10}>
                            <input
                              className="form-control"
                              type="search"
                              placeholder="Enter user’s email or name or company name or  phone number"
                            />
                          </Col>
                          <Col md={2}>
                            <Button className="btn btn-dark btn-outline w-100 h-100">
                              Search
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                          <Col md={6} xl={3} lg={3}>
                            <select className="form-control">
                              <option>All</option>
                              <option>Large select</option>
                              <option>Small select</option>
                            </select>
                          </Col>
                          <Col md={6}  xl={3} lg={3}>
                            <select className="form-control">
                              <option>All</option>
                              <option>Large select</option>
                              <option>Small select</option>
                            </select>
                          </Col>
                    </Row>
                    <Row style={{marginTop: '50px'}}>
                        <TableContainer
                          headerType={"userSearch"}
                          columns={columns}
                          data={orders}
                          isGlobalFilter={true}
                          isAddOptions={true}
                          handleOrderClicks={handleOrderClicks}
                          customPageSize={10}
                        />
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
          <Modal isOpen={isBlockModal} centered>
            <ModalHeader tag={"h4"}>
              Would you like to block this account
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col className="col-12">
                  <textarea
                    className="w-100"
                    rows="10"
                    placeholder="Enter the reason."
                  ></textarea>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Row className="w-100">
                <Col xs={12}>
                  <div className="btn-group w-100">
                    <button
                      className="btn btn-dark"
                      onClick={() => setIsBlockModal(!isBlockModal)}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => setIsBlockModal(!isBlockModal)}
                    >
                      Block
                    </button>
                  </div>
                </Col>
              </Row>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  )
}
UserSearch.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default UserSearch
