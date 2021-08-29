import React, { useState } from "react"
import Features from "./Features/Features"

import { Container, Col, Row } from "reactstrap"
import { Fade } from "react-awesome-reveal"
import Button from "../../../components/Button/Button"
import * as classes from "./FeaturesLayoutsTypeNinth.module.css"

const title = "Why Certick Deserve Your Considerations?"
const description =
  "Certick improves three cores in our operation. Such as reducing resource. Second, improving systematic management and third, enhancing quality of life. Stay tune and read more to understand how Certick works for you."
const moreDescription =
  "Firstly, Certick disrupts social norm from issuing physical certificate to digital certificate with a unique trackable QR code to verify the genuineness. Printing, storing and issuing physical copies can be avoided and hence reducing the carbon footprints and bringing more awareness for environmentally conscious society. Secondly, Certick as a consolidated platform allows managing of events/activities, handling participants and their attendance, issuing certificates to be done seamlessly without multiple different system and physical filing.Thirdly, Certick allows End-users to easily access and enroll in their interested events/activity without repetitive information filling. Besides, they can also receive and manage their e-certificates tie to their Certick account via mobile App."

function FeaturesLayoutsTypeNinth(props) {
  const [readMore, setReadMore] = useState(false)
  console.log(readMore)
  return (
    <React.Fragment>
      <section
        className={`section ${classes.features} ${props.dark && "dark"}`}
        id="why"
      >
        <div className={classes.gridWrapper}>
          <Container>
            <Row>
              <Col
                lg={6}
                md={6}
                className={`d-flex flex-column ${classes.headerColumn}`}
              >
                <Fade top triggerOnce={true}>
                  <h1 className={`title ${classes.title}`}>{title}</h1>
                </Fade>
                <Fade down delay={50} triggerOnce={true}>
                  <p className={`normal-text ${classes.description}`}>
                    {readMore ? moreDescription : description}
                  </p>
                </Fade>
                <Fade down delay={100} triggerOnce={true}>
                  {readMore ? (
                    <Button
                      link={false}
                      classes={`secondary large simple ${classes.button}`}
                      value={"Close"}
                      onClick={() => setReadMore(!readMore)}
                    />
                  ) : (
                    <Button
                      link={false}
                      classes={`primary large simple ${classes.button}`}
                      value={"Read More"}
                      onClick={() => setReadMore(!readMore)}
                    />
                  )}
                </Fade>
              </Col>
              <Col lg={{ size: 1, offset: 1 }} md={{ size: 1 }}>
                <Fade down delay={100} triggerOnce={true}>
                  <div className={classes.divider}></div>
                </Fade>
              </Col>

              <Col
                lg={{ size: 4 }}
                md={{ size: 5 }}
                className={classes.featuresColumn}
              >
                <Features />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}
export default FeaturesLayoutsTypeNinth
