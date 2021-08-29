import React from "react"
import * as classes from "./FeatureLayoutsTypeSecond.module.css"
import Button from "../../../components/Button/Button"
import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import { StaticImage } from "gatsby-plugin-image"

const FeaturesLayoutsTypeSecond = ({ dark }) => {
  return (
    <>
      <section className={`section ${classes.features} ${dark && "dark"}`}>
        <div className={`${classes.gridWrapper}`}>
          <Container>
            <Row>
              {/* left side of the page  */}
              <Col lg="6" md="7" className={classes.leftColumn}>
                <Fade top trigerOnce={true}>
                  <h1>Certick® Makes All Achievers to be Remarked</h1>
                </Fade>
                <Fade top delay={50} trigerOnce={true}>
                  <p className={`normal-text ${classes.description}`}>
                    <strong>Certick®</strong> connects between{" "}
                    <strong>Certick® Ecosystem Partners</strong> and{" "}
                    <strong>Achievers</strong> under one digital platform to
                    simplify the process in searching and registering of an
                    events. Until strong issuing certificates and validating the
                    true copy of participation certificate.{" "}
                    <strong>Certick®</strong> suits to any parties with{" "}
                    <strong>ZERO</strong> technical operators.{" "}
                    <strong>Certick®</strong> is offering{" "}
                    <strong>FREEMIUM</strong> to our selected users.
                  </p>
                </Fade>

                <Button
                  link={true}
                  to="/login-page"
                  classes={`secondary mt-3 large simple ${classes.button}`}
                  value={"Join Now"}
                />
              </Col>

              {/* right side of the page  */}
              <Col
                lg="6"
                md="5"
                className={`d-flex align-items-center ${classes.rightColumn}`}
              >
                <Fade delay={50} triggerOnce={true}>
                  <StaticImage
                    src="../../../images/dashboard.png"
                    width={990}
                    height={610}
                    alt="dashboard-admin-Certick®"
                    className={classes.dashboardImage}
                  />
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default FeaturesLayoutsTypeSecond
