import React from "react"
import { Col, Row } from "reactstrap"
import Feature from "../Feature/FeatureTypeFourth"
import Oval from "../../../../components/Frame/Frame"
import { Fade } from "react-awesome-reveal"
import * as classes from "./Features.module.css"
import {
  Attendance,
  Issue,
  Register,
  Verify,
} from "../../../../components/Icons/Certick-Icon"

const Features = ({ dark }) => {
  const features = [
    {
      id: 1,
      title: "Participants’ Registration",
      description: "Register participants in bulks!",
      icon: <Register />,
    },
    {
      id: 2,
      title: "Attendance",
      description: "Automatic attendance system.",
      icon: <Issue />,
    },
    {
      id: 3,
      title: "Issue Certificate",
      description:
        "Participant or Organizer able to raise any issues inside the platform.",
      icon: <Attendance />,
    },
    {
      id: 4,
      title: "Validate",
      description: "validate the true copy of certificate automatically.",
      icon: <Verify />,
    },
  ]

  return (
    <React.Fragment>
      <Row xs="1" className={`${classes.featuresRow} ${dark && "dark"}`}>
        {features.map(feature => (
          <Col key={feature.id} className={classes.item}>
            <Fade down delay={100} triggerOnce={true}>
              <Feature title={feature.title} description={feature.description}>
                <Oval variant={"normal"}>{feature.icon}</Oval>
              </Feature>
            </Fade>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  )
}

export default Features
