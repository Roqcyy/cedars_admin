import React from 'react'
import {
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap"
import Logo from "../../../assets/images/logoLong.png";
import CardNameValueForm from '../Components/CardNameValueForm';

function UserEditCard(props) {
    return (
        <Card>
              <CardBody>
                <div className="card-title h4 mb-3">
                    Account Information
                </div>
                <div className="card-forms">
                    <CardNameValueForm title={"Name"} value={"User Name"} type={"text"}  />
                    <CardNameValueForm title={"Email"} value={"abc@abc.com"} type={"text"}  />
                    <CardNameValueForm title={"Phone"} value={"00000000000"} type={"text"}  />
                    <CardNameValueForm title={"Seller Registration"} value={"Not registered"} type={"text"}  />
                    <CardNameValueForm title={"Status"} value={"Active"} type={"text"}  />
                </div>
                <div className="card-title h4 mb-3">
                    Seller Information
                </div>
                <div className="card-forms">
                    <CardNameValueForm title={"Bussiness Name"} type="text" value={"Bussiness name"}/>
                    <CardNameValueForm title={"Manager Name"} type="text" value={"Manager Name"}/>
                    <CardNameValueForm title={"Company Phone"} type="text" value={"0000000000"}/>
                    <CardNameValueForm title={"Company Email"} type="text" value={"abc@abc.com"}/>
                    <CardNameValueForm title={"Postal Code"} type="text" value={"123124"}/>
                    <CardNameValueForm title={"Company Address"} type="text" value={"Seocho-daero 60-gil, Seocho-gu, Seoul,"}/>
                    <CardNameValueForm type="text" value={"9-4,"}/>
                    <Row className="mb-3">
                        <Col md={6}>
                        <Row>
                            <label className="col-md-4 col-form-label">Description</label>
                            <Col md={8}>
                                <div className='p-5 border border-2 '>
                                    <p>description</p>
                                    <img src={Logo} alt={""} />
                                </div>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </div>
               {props.type !== "seller" ? 
                <Row>
                    <Col xs={6}>
                        <button type="button"className="btn btn-danger"  onClick={()=> props.setIsBlockModal(true)}>
                            <i className="bx bx-block font-size-16 align-middle me-2"></i>
                            Block
                        </button>
                    </Col>
                    
                    <Col xs={6} className="text-end">
                        <button type="button"className="btn btn-secondary " onClick={()=> props.setIsUserEdit(false)}>
                            Back
                        </button>
                    </Col>
                </Row>
                : props.type === "seller" ? 
                
                <Row>
                    <Col xs={6}>
                        <button type="button"className="btn btn-secondary " onClick={()=> props.setIsUserEdit(false)}>
                            Back
                        </button>
                    </Col>
                    
                    <Col xs={6} className="text-end">
                        <button type="button"className="btn btn-danger me-3"  onClick={()=> props.setIsBlockModal(true)}>
                            <i className="bx bx-block font-size-16 align-middle me-2"></i>
                            Reject
                        </button>
                        <button type="button"className="btn btn-primary"  onClick={()=> props.setIsBlockModal(true)}>
                            Approve
                        </button>
                    </Col>
                    </Row>
                    : ""
               }
              </CardBody>
            </Card>
    )
}

export default UserEditCard
