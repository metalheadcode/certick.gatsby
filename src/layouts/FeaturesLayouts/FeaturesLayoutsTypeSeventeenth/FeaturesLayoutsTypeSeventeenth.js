import { Row, Col, Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import React, { Component } from "react"
import "antd/dist/antd.css"
import Oval from "../../../components/Frame/Frame"
import Feature from "./Feature/FeatureTypeFourth"
import Slider from "./Slider/Slider"
import Button from "../../../components/Button/Button"
import { Fade } from "react-awesome-reveal"
import * as classes from "./FeaturesLayoutsTypeSeventeenth.module.css"
import {
  Admin,
  Bucks,
  Cert,
  Data,
  Flexible,
  Search,
} from "../../../components/Icons/Certick-Icon"

const title = "Certick Key Features"
const description = ""

class FeaturesLayoutsTypeSeventeenth extends Component {
  state = {
    features: [
      {
        title: "Flexible",
        description: (
          <p>
            Allow Ecosystem Partners to upload the template of their cetificate
            for different programes
          </p>
        ),
        icon: <Flexible fill="#ffffff" />,
      },
      {
        title: "Bulk",
        description: (
          <p>
            Able import member’s information in bulk and generate certificate.
          </p>
        ),
        icon: <Bucks fill="#ffffff" />,
      },
      {
        title: "Retrieve & Search",
        description: (
          <p>
            Able to manage (retrieve and search) participant’s certificates.
          </p>
        ),
        icon: <Search fill="#ffffff" />,
      },
      {
        title: "Participants Recorder",
        description: (
          <p>Manage/record participant’s attendance on the events.</p>
        ),
        icon: <Data fill="#ffffff" />,
      },
      {
        title: "Send In Bulk",
        description: (
          <p>Send e-certificates to participants in bulk via email.</p>
        ),
        icon: <Cert fill="#ffffff" />,
      },
      {
        title: "Admin To Website",
        description: <p>WCS shall be connected to IEM Sarawak website</p>,
        icon: <Admin fill="#ffffff" />,
      },
    ],
  }

  renderCards() {
    const card = this.state.features
    const listItems = card.map((item, index) => {
      return (
        <Feature
          key={index}
          title={item.title}
          description={item.description}
          dark={this.props.dark ? true : false}
        >
          <Oval variant={"large"} color={"secondary"}>
            {item.icon}
          </Oval>
        </Feature>
      )
    })
    return <Slider array={listItems} dark={this.props.dark ? true : false} />
  }

  render() {
    return (
      <div className={this.props.dark && "dark"}>
        <section className={`section ${classes.features}`}>
          <Container className={classes.container}>
            <Row>
              <Col lg="10" md="10" className="mx-auto text-center">
                <div className={classes.gridWrapper}>
                  <Fade down>
                    <h1 className="title">{title}</h1>
                  </Fade>
                  <Fade down delay={50} triggerOnce={true}>
                    <p className={`description ${classes.description}`}>
                      {description}
                    </p>
                  </Fade>
                </div>
              </Col>
            </Row>
            <Row className={classes.featuresRow}>
              <Col className="p-0">
                <Fade down delay={100} triggerOnce={true}>
                  {this.renderCards()}
                </Fade>
              </Col>
            </Row>
            <Row className={classes.buttonsRow}>
              <Col
                lg="10"
                md="10"
                className="mx-auto d-flex justify-content-center"
              >
                <Fade down delay={150} triggerOnce={true}>
                  <Button
                    link={true}
                    to={"/login-page"}
                    classes={`primary large simple ${classes.button}`}
                    value={"Get Started"}
                  />
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export default FeaturesLayoutsTypeSeventeenth
