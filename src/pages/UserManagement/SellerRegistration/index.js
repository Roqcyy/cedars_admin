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

  const [orderList, setOrderList] = useState([])
  const [order, setOrder] = useState(null)

  // validation

  console.log("order---->", order)
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      orderId: (order && order.orderId) || "",
      billingName: (order && order.billingName) || "",
      orderdate: (order && order.orderdate) || "",
      total: (order && order.total) || "",
      paymentStatus: (order && order.paymentStatus) || "Paid",
      badgeclass: (order && order.badgeclass) || "success",
      paymentMethod: (order && order.paymentMethod) || "Mastercard",
    },
    validationSchema: Yup.object({
      orderId: Yup.string()
        .matches(/[0-9\.\-\s+\/()]+/, "Please Enter Valid Order Id")
        .required("Please Enter Your Order Id"),
      billingName: Yup.string().required("Please Enter Your Billing Name"),
      orderdate: Yup.string().required("Please Enter Your Order Date"),
      total: Yup.string()
        .matches(/[0-9\.\-\s+\/()]+/, "Please Enter Valid Amount")
        .required("Total Amount"),
      paymentStatus: Yup.string().required("Please Enter Your Payment Status"),
      badgeclass: Yup.string().required("Please Enter Your Badge Class"),
      paymentMethod: Yup.string().required("Please Enter Your Payment Method"),
    }),
    onSubmit: values => {
      if (isEdit) {
        const updateOrder = {
          id: order ? order.id : 0,
          orderId: values.orderId,
          billingName: values.billingName,
          orderdate: values.orderdate,
          total: values.total,
          paymentStatus: values.paymentStatus,
          paymentMethod: values.paymentMethod,
          badgeclass: values.badgeclass,
        }
        // update order
        dispatch(onUpdateOrder(updateOrder))
        validation.resetForm()
      } else {
        const newOrder = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          orderId: values["orderId"],
          billingName: values["billingName"],
          orderdate: values["orderdate"],
          total: values["total"],
          paymentStatus: values["paymentStatus"],
          paymentMethod: values["paymentMethod"],
          badgeclass: values["badgeclass"],
        }
        // save new order
        dispatch(onAddNewOrder(newOrder))
        validation.resetForm()
      }
      toggle()
    },
  })

  const toggleViewModal = () => setModal1(!modal1)

  const dispatch = useDispatch()
  const { orders } = useSelector(state => ({
    orders: state.ecommerce.orders,
  }))

  useEffect(() => {
    if (orders && !orders.length) {
      dispatch(onGetOrders())
    }
  }, [dispatch, orders])

  useEffect(() => {
    setOrderList(orders)
  }, [orders])

  useEffect(() => {
    if (!isEmpty(orders) && !!isEdit) {
      setOrderList(orders)
      setIsEdit(false)
    }
  }, [orders])

  const toggle = () => {
    if (modal) {
      setModal(false)
      setOrder(null)
    } else {
      setModal(true)
    }
  }

  const [isUserEdit, setIsUserEdit] = useState(false)

  const handleOrderClick = id => {
    setIsUserEdit(true)
  }

  //delete order
  
  const [isBlockModal, setIsBlockModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

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
        Header: "No.",
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
        Header: "Request Date",
        accessor: "orderdate",
        disableFilters: true,
        Cell: cellProps => {
            return <Date {...cellProps} />
        },
      },
      {
        Header: "Requester Email",
        accessor: "billingName",
        disableFilters: true,
        Cell: cellProps => {
          return <BillingName {...cellProps} />
        },
      },
     
      {
        Header: "Company Email",
        accessor: "paymentStatus",
        disableFilters: true,
        Cell: cellProps => {
            return <PaymentStatus {...cellProps} />
        },
      },
      {
        Header: "Bussiness Name",
        accessor: "paymentMethod",
        disableFilters: true,
        Cell: cellProps => {
          return <PaymentMethod {...cellProps} />
        },
      },
      {
        Header: "Action",
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
                <UncontrolledTooltip placement="top" target="edittooltip">
                  Edit
                </UncontrolledTooltip>
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
      <EcommerceOrdersModal isOpen={modal1} toggle={toggleViewModal} />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="User Management" breadcrumbItem={"Seller Registration"} />
          {isUserEdit ? (
            <UserEditCard setIsBlockModal={setIsBlockModal} isBlockModal={isBlockModal} setIsUserEdit={setIsUserEdit} type={"seller"} />
          ) : (
            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Row>
                          <Col md={10}>
                            <input
                              className="form-control"
                              type="search"
                              placeholder="Enter user’s email or name or phone number 
                        "
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
                      <Col md={6}>
                        <Row>
                          <Col md ={6}>
                            <input
                              className="form-control"
                              type="date"
                              id="example-date-input"
                            />
                          </Col>
                          <Col md ={6}>
                          <input
                              className="form-control"
                              type="date"
                              id="example-date-input"
                            />
                          </Col>
                        </Row>
                      </Col>
                      
                    </Row>
                    <TableContainer
                      headerType={"userSearch"}
                      columns={columns}
                      data={orders}
                      isGlobalFilter={true}
                      isAddOptions={true}
                      handleOrderClicks={handleOrderClicks}
                      customPageSize={10}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
          <Modal isOpen={isBlockModal} centered>
            <ModalBody className="p-5">
                <Row>
                  <Col className="col-12">
                    <h4 className="text-center">    Woud you like to <br></br> approve this request?</h4>
                  </Col>
                </Row>
              
            </ModalBody>
            <ModalFooter>
                <Row className="w-100">
                    <Col xs={12}>
                        <div className ="btn-group w-100">
                            <button className="btn btn-dark" onClick={()=> setIsBlockModal(!isBlockModal)}>
                                Cancel
                            </button>
                            <button className="btn btn-danger" onClick={()=> setIsBlockModal(!isBlockModal)}>
                                Approve
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

export default UserSearch;
