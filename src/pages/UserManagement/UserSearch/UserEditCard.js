import React, { useState } from "react"
import { Col, Row, Card, CardBody } from "reactstrap"
import Logo from "../../../assets/images/logoLong.png"
import CardNameValueForm from "../Components/CardNameValueForm"
import Dropzone from "react-dropzone"
import { Link } from "react-router-dom"

function UserEditCard(props) {
  const [selectedFiles, setselectedFiles] = useState([])
  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    console.log("--->", files)
    setselectedFiles([...selectedFiles, files])
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  console.log("selectedFiles", selectedFiles)
  return (
    <Card>
      <CardBody>
        <div className="card-title h4 mb-3">Account Information</div>
        <div className="card-forms">
          <CardNameValueForm title={"Name"} value={"User Name"} type={"text"} />
          <CardNameValueForm
            title={"Email"}
            value={"abc@abc.com"}
            type={"text"}
          />
          <CardNameValueForm
            title={"Phone"}
            value={"00000000000"}
            type={"text"}
          />
          <CardNameValueForm
            title={"Seller Registration"}
            value={"Not registered"}
            type={"text"}
          />
          <CardNameValueForm title={"Status"} value={"Active"} type={"text"} />
        </div>
        {props.type == "seller" && (
          <Row style={{ marginTop: "100px" }}>
            <div className="card-title h4 mb-3">Seller Information</div>
            <div className="card-forms">
              <CardNameValueForm
                title={"Company Name"}
                type="text"
                value={"Bussiness name"}
              />
              <CardNameValueForm
                title={"Manager Name"}
                type="text"
                value={"Manager Name"}
              />
              <CardNameValueForm
                title={"Company Phone Number"}
                type="number"
                value={"0000000000"}
              />
              <CardNameValueForm
                title={"Company Email"}
                type="email"
                value={"abc@abc.com"}
              />
              <CardNameValueForm
                title={"Company Postal Code"}
                type="number"
                value={"123124"}
              />
              <CardNameValueForm
                title={"Company Address"}
                type="text"
                value={"Seocho-daero 60-gil, Seocho-gu, Seoul,"}
              />
              <CardNameValueForm type="text" value={"9-4,"} />
              <Row className="mb-3">
                <Col md={6}>
                  <Row>
                    <label className="col-md-4 col-form-label">
                      Proof Documents
                    </label>
                    <Col md={8}>
                      <Dropzone
                        multiple
                        onDrop={acceptedFiles => {
                          handleAcceptedFiles(acceptedFiles)
                        }}
                        style={{ height: "10px" }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div
                            style={{
                              height: "100px",
                              border: "1px dashed gray",
                            }}
                          >
                            <div {...getRootProps()} style={{ height: "10px" }}>
                              <input {...getInputProps()} />
                              <div>
                                <div className="text-center">
                                  <i className="display-4 text-muted bx bxs-cloud-upload" />
                                </div>
                                <div className="text-center fs-5">
                                  Drop files here or click to upload.
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      <div
                        className="dropzone-previews mt-3"
                        id="file-previews"
                      >
                        {selectedFiles.map((f, i) => {
                          return (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f[0].name}
                                      src={f[0].preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {f[0].name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          )
                        })}
                      </div>
                    </Col>
                  </Row>
                  <Row >
                    <div className=" d-flex mt-4">
                      <label className="col-md-4 col-form-label">
                        Description
                      </label>
                      <div className="w-100 border p-4">
                        <div>
                          My name is
                        </div>
                        <img src="https://images.unsplash.com/photo-1686335237163-3e78c9db4029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" alt="img" className="mt-2 w-100" />
                      </div>
                    </div>
                  </Row>
                </Col>
              </Row>
            </div>
          </Row>
        )}
        {props.type == "seller" ? (
          <Row>
            <Col xs={6}>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => props.setIsBlockModal(true)}
              >
                <i className="bx bx-block font-size-16 align-middle me-2"></i>
                  Block
              </button>
            </Col>
          </Row>
        ) : props.type === "seller" ? (
          <Row>
            <Col xs={6}>
              <button
                type="button"
                className="btn btn-secondary "
                onClick={() => props.setIsUserEdit(false)}
              >
                Back
              </button>
            </Col>

            <Col xs={6} className="text-end">
              <button
                type="button"
                className="btn btn-danger me-3"
                onClick={() => props.setIsBlockModal(true)}
              >
                <i className="bx bx-block font-size-16 align-middle me-2"></i>
                Reject
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => props.setIsBlockModal(true)}
              >
                Approve
              </button>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </CardBody>
    </Card>
  )
}

export default UserEditCard
