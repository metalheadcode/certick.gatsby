import React, { useState } from "react"
import { Col, Container, Row } from "reactstrap"

import VerticalModal from "./VerticalModal/VerticalModal"
import Feature from "./Feature/FeatureTypeFourth"
import FeatureCard from "./FeatureCard/FeaturesTypeTwelve"
import { Fade } from "react-awesome-reveal"
import * as classes from "./FeaturesLayoutsTypeTwelve.module.css"
import CertVideo from "../../../videos/cert-vid.mp4"

function FeaturesLayoutsTypeTwelve(props) {
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      <section
        className={`section ${classes.features} ${props.dark && "dark"}`}
        style={{ position: "relative" }}
      >
        <video
          title="bussiness-farmer"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          autoPlay
          loop
          muted
        >
          <source src={CertVideo} />
        </video>
        <Container
          fluid={true}
          className={`container-fluid ${classes.containerFluid}`}
        >
          <div className="gridWrapper">
            <Container>
              <Row>
                <Col lg="6" md="7">
                  <Fade triggerOnce={true}>
                    <FeatureCard
                      title={"Benefit To Certick Stakeholders"}
                      description={
                        "Certick serves the best to guarantee utmost experiences and gains"
                      }
                      dark={props.dark}
                    >
                      <Feature
                        title={"🧑🏻‍🏫 Certick Ecosystem Partners"}
                        description={
                          <div>
                            <div
                              style={{
                                height: "1px",
                                width: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                margin: "10px 0",
                              }}
                            ></div>
                            <ul
                              style={{
                                listStyleType: "none",
                                margin: 0,
                                padding: 0,
                              }}
                            >
                              <li style={{ margin: "5px 0" }}>
                                ⚡️ <strong>ZERO</strong> Technical Opereator
                              </li>
                              <li style={{ margin: "5px 0" }}>
                                ⚡️ <strong>SYSTEMATIC</strong> Management
                              </li>
                              <li style={{ margin: "5px 0" }}>
                                ⚡️ <strong>NO</strong> Customisation Fee
                              </li>
                            </ul>
                          </div>
                        }
                        dark={props.dark ? true : false}
                      />

                      <Feature
                        title={"👨🏻‍💻 Certick End Users"}
                        description={
                          <div>
                            <div
                              style={{
                                height: "1px",
                                width: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                margin: "10px 0",
                              }}
                            ></div>
                            <ul
                              style={{
                                listStyleType: "none",
                                margin: 0,
                                padding: 0,
                              }}
                            >
                              <li style={{ margin: "5px 0" }}>
                                ⚡️ <strong>DIGITAL</strong> Profile
                              </li>
                              <li style={{ margin: "5px 0" }}>
                                ⚡️ <strong>SEAMLESS</strong> Enrolment to
                                Certick Events
                              </li>
                              <li style={{ margin: "5px 0" }}>
                                ⚡️ <strong>FREEMIUM</strong>
                              </li>
                            </ul>
                          </div>
                        }
                        dark={props.dark ? true : false}
                      />
                    </FeatureCard>
                  </Fade>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <VerticalModal
          dark={props.dark ? true : false}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </>
  )
}
export default FeaturesLayoutsTypeTwelve
