import React from "react"
import { Col } from "reactstrap"
import * as classes from "./FeaturesTypeFourth.module.css"

const FeatureTypeFourth = props => {
  return (
    <div className={`col-12 ${classes.feature} ${props.dark && "dark"}`}>
      <Col>
        <h3 className={`title ${classes.title}`}>{props.title}</h3>
        <p className="normal-text">{props.description}</p>
      </Col>
    </div>
  )
}

export default FeatureTypeFourth
