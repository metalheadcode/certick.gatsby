import React from "react"
import { Container, Col, Row } from "reactstrap"
import { Nav, Navbar } from "react-bootstrap"
import Badge from "../../../components/Badges/Badges"
import * as classes from "./FootersLayoutsTypeNinth.module.css"
import { Fade } from "react-awesome-reveal"
import { useTheme } from "../../../context/context"

function FootersLayoutsTypeNinth(props) {
  const [isDark] = useTheme()
  return (
    <div className={`${classes.footer} ${isDark && "dark"}`}>
      <div className={classes.gridWrapper}>
        <Container>
          <Row>
            <Col className={`col-auto d-flex ${classes.leftColumn}`}>
              <Navbar expand="lg" className={`p-0 ${classes.navbar}`}>
                <Nav className={`ml-auto ${classes.navbarNav}`}>
                  <Fade top triggerOnce={true}>
                    <Nav.Link
                      target="_blank"
                      href="https://neuon.ai"
                      className={classes.navLink}
                    >
                      Powered By NEUON AI SDN BHD
                    </Nav.Link>
                  </Fade>
                </Nav>
              </Navbar>
            </Col>
            <Col className={`col-auto ml-auto ${classes.rightColumn}`}>
              <Fade top delay={50} triggerOnce={true}>
                <div className={classes.mangkuk}>
                  <Badge
                    bgColor={"black"}
                    fontColor={"white"}
                    target={"_blank"}
                    store={false}
                    link="https://play.google.com/store/apps/details?id=ai.neuon.neuon_e_cert"
                  />
                  )
                  {/* <Badge
                    store={true}
                    bgColor={"black"}
                    color={"black"}
                    link="https://play.google.com/store/apps/details?id=ai.neuon.neuon_e_cert"
                  /> */}
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default FootersLayoutsTypeNinth
