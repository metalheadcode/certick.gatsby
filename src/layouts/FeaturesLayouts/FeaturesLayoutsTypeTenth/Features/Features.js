import React from "react"
import { Col, Row } from "reactstrap"
import Feature from "../Feature/FeaturesTypeEighth"
import Oval from "../../../../components/Frame/Frame"
import { Fade } from "react-awesome-reveal"
import * as classes from "./Features.module.css"

import { Email } from "../../../../components/Icons/Icons"

const Features = props => {
  return (
    <>
      <Row className={classes.featuresRow}>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={100} triggerOnce={true}>
            <Feature
              title={"Go Paperless"}
              description={
                "Issuing physical certificate to digital certificate through email and Certick App"
              }
            >
              <Oval variant={"large"}>
                <Email />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={150} triggerOnce={true}>
            <Feature
              title={"Consolidate Platform"}
              description={
                "Managing of events/activities, handling participants and their attendance, issuing certificates to be done seamlessly"
              }
            >
              <Oval variant={"large"}>
                <Email />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={150} triggerOnce={true}>
            <Feature
              title={"Traceability & Trackability"}
              description={
                "Ensuring true copy of certificates with a unique trackable QR code to verify the genuineness"
              }
            >
              <Oval variant={"large"}>
                <Email />
              </Oval>
            </Feature>
          </Fade>
        </Col>
      </Row>
    </>
  )
}

export default Features
