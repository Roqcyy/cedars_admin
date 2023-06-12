import React from "react"
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"
import TableContainer from "components/Common/TableContainer"
import Pie from "pages/Charts/Piecharts"
import BarChart from "pages/Charts/BarCharts"
import { Total } from "store/e-commerce/EcommerceOrderCol"
import SimpleTable from "components/Common/SimpleTable"
import { useMemo } from "react"
const Dashboard = props => {
  const menuData = ["All", "Today", "This month", "This Year"]
  //meta title
  document.title = "Dashboard | Cedars-Admin"
  const data = [
    {
        rank : '1st', 
        name: 'Product Name',
        volume: '000,000,000 Sold'
    },
    {
      rank : '2st', 
      name: 'Product Name',
      volume: '000,000,000 Sold'
  },
  {
    rank : '3st', 
    name: 'Product Name',
    volume: '000,000,000 Sold'
    },
    {
      rank : '4st', 
      name: 'Product Name',
      volume: '000,000,000 Sold'
    },
    {
      rank : '5st', 
      name: 'Product Name',
      volume: '000,000,000 Sold'
    },
    {
      rank : '6st', 
      name: 'Product Name',
      volume: '000,000,000 Sold'
    },
    {
      rank : '7st', 
      name: 'Product Name',
      volume: '000,000,000 Sold'
    },
    {
      rank : '8st', 
      name: 'Product Name',
      volume: '000,000,000 Sold'
    },
    {
      rank : '9st', 
      name: 'Product Name',
      volume: '000,000,000 Sold'
    },
    {
      rank : '10st', 
      name: 'Product Name',
      volume: '000,000,000 Sold'
    },
  ];

  const TopSellingColumns =  useMemo(
    () => [
      {
        Header: "Top Selling Products",
        columns: [
          {
            Header: "Rank",
            accessor: 'rank',
            Cell: cellProps => {
              return <Total {...cellProps} />
            },
          },
          {
            Header: "Product Name",
            accessor: 'name',
            Cell: cellProps => {
              return <Total {...cellProps} />
            },
          },
          {
            Header: "Sales Volume",
            accessor: "volume",
            Cell: cellProps => {
              return <Total {...cellProps} />
            },
          },
        ]
      },
      {
        Header: "Top Revenue Generating Products",
        columns: [
          {
            Header: "Product Name",
            accessor: 'name3',
            Cell: cellProps => {
              return <Total {...cellProps} />
            },
          },
          {
            Header: "Sales Volume",
            accessor: "volume4",
            Cell: cellProps => {
              return <Total {...cellProps} />
            },
          },
        ]
      },
      {
        Header: "Search Keyword Ranking",
        columns: [
          {
            Header: "Product Name",
            accessor: 'name5',
            Cell: cellProps => {
              return <Total {...cellProps} />
            },
          },
          {
            Header: "Sales Volume",
            accessor: "volume6",
            Cell: cellProps => {
              return <Total {...cellProps} />
            },
          },
        ]
      },
    ],
    []
    )

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />
          <Col>
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
                <Row className="mt-4">
                  <Col>
                    <CardTitle className="text-center">
                      The number of completed <br />
                      transactions(EA)
                    </CardTitle>
                    <div id="pie-chart" className="e-chart">
                      <Pie dataColors='["--bs-primary","--bs-warning", "--bs-danger","--bs-info", "--bs-success"]' />
                    </div>
                  </Col>
                  <Col className="ms-4">
                    <CardTitle className="mb-4 text-center">The total value of completed <br /> transactions(Point)</CardTitle>
                    <BarChart dataColors='["--bs-success-rgb, 0.8", "--bs-success"]' />
                    <Row className="justify-content-center">
                      <Col sm={4}>
                        <div className="text-center">
                          <h5 className="mb-0">2541</h5>
                          <p className="text-muted text-truncate">Activated</p>
                        </div>
                      </Col>
                      <Col sm={4}>
                        <div className="text-center">
                          <h5 className="mb-0">84845</h5>
                          <p className="text-muted text-truncate">Pending</p>
                        </div>
                      </Col>
                      <Col sm={4}>
                        <div className="text-center">
                          <h5 className="mb-0">12001</h5>
                          <p className="text-muted text-truncate">
                            Deactivated
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="d-flex flex-column justify-content-around">
                    <CardTitle className="mb-4 text-center">Platform commision earnings <br />(Point)</CardTitle>
                    <div className="text-center">
                          <h3 className="mb-0">000000000 Point</h3>
                    </div>
                    <CardTitle className="mb-4 mt-4 text-center">Total issued mileage <br />(Mileage)</CardTitle>
                    <div className="text-center">
                          <h3 className="mb-0">000000000 Point</h3>
                    </div>
                  </Col>
                </Row>
                <Row>
                     <SimpleTable data={data}
                       columns={TopSellingColumns}
                     />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(Dashboard)
