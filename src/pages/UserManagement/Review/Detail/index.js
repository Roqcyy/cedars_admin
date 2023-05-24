import React from "react"
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  CardText,
  Row,
  Col
} from "reactstrap"
import { Link } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../../../components/Common/Breadcrumb"
import LogonoTitle from "../../../../assets/images/logonoTitle.png"

//i18n
const ReviewDetail = props => {
  //meta title
  document.title = "User Management"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={"User Management"}
            breadcrumbItem={"Review Detail"}
          />
          <Card>
            <CardBody>
              <div className="card-title h4 mb-3">Product Name</div>
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={10}>
                      <Card>
                        <CardHeader className="bg-transparent border-bottom text-uppercase">
                         <Row>
                            <Col md={6}>
                                ab*********@*****.com
                            </Col>
                            <Col md={6} className="text-end">
                            YYYY.MM.DD HH:MM:SS

                            </Col>
                         </Row>
                         <Row className="my-3">
                            <Col md={4}>
                                <Row>
                                    <Col md={3}>
                                        <img src={LogonoTitle} alt= "" className="me-5 w-100"/>
                                    </Col>
                                    
                                    <Col md={3}>
                                        <img src={LogonoTitle} alt= "" className="me-5 w-100"/>
                                    </Col>
                                    
                                    <Col md={3}>
                                        <img src={LogonoTitle} alt= "" className="me-5 w-100"/>
                                    </Col>
                                    
                                    <Col md={3}>
                                        <img src={LogonoTitle} alt= "" className="me-5 w-100"/>
                                    </Col>
                                </Row>
                            </Col>
                         </Row>
                        </CardHeader>
                        <CardBody>
                         
                          <CardText>
                            With supporting text below as a natural lead-in to
                            additional content.
                            With supporting text below as a natural lead-in to
                            With supporting text below as a natural lead-in to
                            additional content.
                            With supporting text below as a natural lead-in to
                            additional content.
                            With supporting text below as a natural lead-in to
                            additional content.
                            With supporting text below as a natural lead-in to
                            additional content.
                            With supporting text below as a natural lead-in to
                            additional content.
                          </CardText>
                          <button className="btn btn-danger">
                            Delete
                          </button>
                        </CardBody>
                        <CardFooter className="text-muted">
                          
                        </CardFooter>
                        
                      </Card>
                    </Col>
                    
                  </Row>
                </Col>
              </Row>
            </CardBody>
            
          </Card>
          <Row>
                <Col className="text-end py-5">
                <Link className="btn btn-dark" to={"/user-management/review"}>
                back
            </Link>
                </Col>
            </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ReviewDetail
