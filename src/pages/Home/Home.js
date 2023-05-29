import React, { useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"
//import components
import Breadcrumbs from "../../components/Common/Breadcrumb"
import {
  Total,
} from "../../store/e-commerce/EcommerceOrderCol"

//redux
import SimpleTable from "components/Common/SimpleTable"
import {
  Col,
  Row,
  Card,
  CardBody,
  Table,
} from "reactstrap"

function Home() {
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
  //meta title
  document.title = "User Management "
  //delete order

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
    ],
    []
    )

    
  const TopRevenueColumns =  useMemo(
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
    ],
    []
    )

    
  const SearchRankColumns =  useMemo(
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
    ],
    []
    )


  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs  breadcrumbItem='Summary by Period' />
          <Row className="text-success">
              <Col xs="12">
                <Card>
                  <CardBody>
                    <Row className="mb-2 d-flex align-items-center">
                          <Col md ={6} xl={3}>
                            <input
                              className="form-control"
                              type="date"
                              id="example-date-input"
                            />
                          </Col>
                          {'~'}
                          <Col md ={6} xl={3}>
                          <input
                              className="form-control"
                              type="date"
                              id="example-date-input"
                            />
                          </Col>
                    </Row>
                       <Table bordered hover>
                          <thead className="text-light">
                              <tr className="bg-dark">
                                <th>Completed Payment</th>
                                <th colSpan="2" scope="colgroup">Total Transaction Amount from Completed Payments</th>
                                <th>Completed Refunds</th>
                                <th>Completed Exchanges</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                 <td >0000,0000 EA</td>
                                  <td className="align-middle">0000,0000 Point
                                  </td>
                                  <td className="align-middle">0000,0000 Mileage
                                  </td>
                                  <td className="align-middle">0000,0000 EA
                                  </td>
                                  <td className="align-middle">0000,0000 EA
                                  </td>

                              </tr>
                          </tbody>
                          <thead className="text-light">
                              <tr className="bg-dark">
                                <th>Confirmed Purchase</th>
                                <th colSpan="2" scope="colgroup">Total Revenue from Confirmed Purchases</th>
                                <th>Issued Mileage Amount</th>
                                <th>Platform Commission Revenue</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                 <td >0000,0000 EA</td>
                                  <td className="align-middle">0000,0000 Point
                                  </td>
                                  <td className="align-middle">0000,0000 Mileage
                                  </td>
                                  <td className="align-middle">0000,0000 EA
                                  </td>
                                  <td className="align-middle">0000,0000 EA
                                  </td>

                              </tr>
                          </tbody>
                       </Table>
                      <Row>
                          <Col xl={4} md={3}>
                              <SimpleTable data={data}
                                columns={TopSellingColumns}
                                />
                          </Col>
                          <Col xl={4} md={3}>
                              <SimpleTable data={data}
                                columns={TopRevenueColumns}
                                />
                          </Col>
                          <Col xl={4} md={3}>
                              <SimpleTable data={data}
                                columns={SearchRankColumns}
                                />
                          </Col>
                      </Row>
                  </CardBody>
                </Card>
              </Col>
              
            </Row>
        </div>
      </div>
    </React.Fragment>
  )
}
Home.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default Home;
