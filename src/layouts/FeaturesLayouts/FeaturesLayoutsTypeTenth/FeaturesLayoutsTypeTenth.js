import React from "react"

import Features from "./Features/Features"
import { Fade } from "react-awesome-reveal"
import { Container, Col, Row } from "reactstrap"
import * as classes from "./FeaturesLayoutsTypeTenth.module.css"

const title = "What Certick Provides?"

function FeaturesLayoutsTypeTenth({ dark }) {
  return (
    <>
      <section id="what" className={`section ${dark && "dark"}`}>
        <div className={classes.gridWrapper}>
          <Container>
            <Row>
              <Col lg="9" md="9" className="mx-auto">
                <Fade top triggerOnce={true}>
                  <h1 className={`text-center ${classes.title}`}>{title}</h1>
                </Fade>
              </Col>
            </Row>
          </Container>

          <Container className="featuresContainer">
            <Features />
          </Container>
        </div>
      </section>
    </>
  )
}
export default FeaturesLayoutsTypeTenth
