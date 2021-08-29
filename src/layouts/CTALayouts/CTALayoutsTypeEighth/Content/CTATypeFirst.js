import React from "react"
import { Row, Col } from "reactstrap"
import * as classes from "./CTATypeFirst.module.css"
import Button from "../../../../components/Button/Button"
import { Fade } from "react-awesome-reveal"

const CTATypeFirst = props => {
  return (
    <div className={`cta ${props.dark && "dark"}`}>
      <Row className="topLevel">
        <Col className={classes.col}>{props.children}</Col>
      </Row>
      <Row className={classes.middleLevel}>
        <Col className={classes.col}>
          <Fade top delay={50} triggerOnce={true}>
            <h1>{props.title}</h1>
          </Fade>
          <Fade top delay={100} triggerOnce={true}>
            <p className={`normal-text ${classes.description}`}>
              {props.description}
            </p>
          </Fade>
        </Col>
      </Row>
      <div className={classes.buttonRow}>
        <Fade top delay={150} triggerOnce={true}>
          <Button
            link={true}
            target={"_blank"}
            to="https://csr.neuon.ai/organization/org_login.php"
            type={"submit"}
            classes={"primary large simple w-100"}
            value={"Organizer"}
          />
        </Fade>
        <Fade top delay={200} triggerOnce={true}>
          <Button
            link={true}
            target={"_blank"}
            to="https://csr.neuon.ai/user/user_login.php"
            type={"submit"}
            classes={"secondary large simple w-100"}
            value={"User"}
          />
        </Fade>
      </div>
    </div>
  )
}

export default CTATypeFirst
