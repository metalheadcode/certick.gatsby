import React, { Component } from "react"
import { GooglePlaystore } from "../Icons/Certick-Icon"

class Badge extends Component {
  render() {
    return (
      <>
        <a href={this.props.link} target={this.props.target} rel="noreferrer">
          <GooglePlaystore />
        </a>
      </>
    )
  }
}

export default Badge
