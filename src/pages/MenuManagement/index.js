import React, { useMemo, useState } from "react"
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
import { Date, OrderId } from "store/e-commerce/EcommerceOrderCol"
import TableContainer from "components/Common/TableContainer"

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

  const data = [
    {
      date: 'YYYY.MM.DD',
      name :'Jerk',
      companyName: 'Otto',
      add : 'Add'
    },
    {
      date: 'YYYY.MM.DD',
      name :'Mark',
      companyName: 'Otto',
      add : 'Add'
    },
    {
      date: 'YYYY.MM.DD',
      name :'Mark',
      companyName: 'Otto',
      add : 'Add'
    },
    {
      date: 'YYYY.MM.DD',
      name :'Mark',
      companyName: 'Otto',
      add : 'Add'
    },
    {
      date: 'YYYY.MM.DD',
      name :'Mark',
      companyName: 'Otto',
      add : 'Add'
    },
    {
      date: 'YYYY.MM.DD',
      name :'Mark',
      companyName: 'Otto',
      add : 'Add'
    },
    {
      date: 'YYYY.MM.DD',
      name :'Mark',
      companyName: 'Otto',
      add : 'Add'
    },
    {
      date: 'YYYY.MM.DD',
      name :'Mark',
      companyName: 'Otto',
      add : 'Add'
    },
    {
      date: 'YYYY.MM.DD',
      name :'Mark',
      companyName: 'Otto',
      add : 'Add'
    }
  ]


  const columns = useMemo(
    () => [

      {
        Header: 'Registration Date',
        accessor: 'date',
        width: '150px',
        style: {
          textAlign: "center",
          width: "10%",
          background: "#0000",
        },
        filterable: true,
        disableFilters: true,
        Cell: (cellProps) => {
          return <OrderId {...cellProps} />;
        }
      },
      {
        Header: 'Product Name',
        accessor: 'name',
        filterable: true,
        disableFilters: true,
        Cell: (cellProps) => {
          return <OrderId {...cellProps} />;
        }
      },
      {
        Header: 'Company Name',
        accessor: 'companyName',
        filterable: true,
        disableFilters: true,
        Cell: (cellProps) => {
          return <Date {...cellProps} />;
        }
      },
     
      
      {
        Header: 'Add',
        accessor: 'add',
        disableFilters: true,
        Cell: () => {
          return (
            <Button
              type="button"
              color="primary"
              className="btn-sm btn-rounded"
              // onClick={toggleViewModal}
            >
              Add
            </Button>);
        }
      },
    ],
    []
  )

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
              <span className="modal-title mt-0" id="myLargeModalLabel">
                Search a Product
              </span>
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
              <div className="table-responsive">
                 <TableContainer
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    customPageSize={10}
                    placeholder="Enter product name or company name"
                  />
              </div>
            </ModalBody>
          </Modal>
          
        </Container>
      </div>
    </React.Fragment>
  )
}

export default MenuManagement
