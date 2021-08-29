import React from "react"
import Content from "./Content/CTATypeFirst"
import firstMockup from "../../../images/IpadPro.png"
import secondMockup from "../../../images/IphoneXS.png"
import firstMockupDark from "../../../images/IpadPro-dark.png"
import secondMockupDark from "../../../images/IphoneXS-dark.png"
import { Container, Col, Row } from "reactstrap"
import { Fade } from "react-awesome-reveal"
import * as classes from "./CTALayoutsTypeEighth.module.css"

const title = "Where All Achievers Deserve To Be Remarked 🌟"
const strong = "Certick"
const description = ""

function CTALayoutsTypeEighth(props) {
  return (
    <React.Fragment>
      <section className={`section  ${classes.cta} ${props.dark && "dark"}`}>
        <Container>
          <Row>
            <Col lg={6} md={5} className={classes.leftColumn}>
              <Row>
                <Col>
                  <div className="position-relative">
                    {props.dark === true ? (
                      <>
                        <Fade left delay={100} triggerOnce={true}>
                          <img
                            src={firstMockupDark}
                            alt=""
                            className="position-absolute"
                            width={1000}
                            height={765}
                            style={{ right: "160px" }}
                          />
                        </Fade>
                        <Fade left triggerOnce={true}>
                          <img
                            src={secondMockupDark}
                            alt=""
                            className="position-absolute"
                            width={350}
                            height={700}
                            style={{ right: "60px", top: "90px" }}
                          />
                        </Fade>
                      </>
                    ) : (
                      <>
                        <Fade left delay={100} triggerOnce={true}>
                          <img
                            src={firstMockup}
                            alt=""
                            className="position-absolute"
                            width={1000}
                            height={765}
                            style={{ right: "160px" }}
                          />
                        </Fade>
                        <Fade left triggerOnce={true}>
                          <img
                            src={secondMockup}
                            alt=""
                            className="position-absolute"
                            width={350}
                            height={700}
                            style={{ right: "60px", top: "90px" }}
                          />
                        </Fade>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={7} className={classes.rightColumn}>
              <div className={classes.gridWrapper}>
                <Content title={title} description={description}>
                  <Fade top triggerOnce={true}>
                    <strong style={{ display: "block" }}>{strong}</strong>
                  </Fade>
                </Content>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}
export default CTALayoutsTypeEighth
