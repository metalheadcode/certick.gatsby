import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as classes from "./Logos.module.css"

const Logos = props => {
  return (
    <section className={classes.logos}>
      <div className={`row col-lg-9 m-auto ${classes.row}`}>
        <div className={`col-auto ${classes.col}`}>
          <StaticImage
            src="../../../../images/iem.png"
            alt="iem-sarawak"
            height={50}
          />
        </div>
        <div className={`col-auto ${classes.col}`}>
          <StaticImage
            src="../../../../images/dyslexia.png"
            alt="dyslexia-sarawak"
            height={50}
          />
        </div>
        <div className={`col-auto ${classes.col}`}>
          <StaticImage
            src="../../../../images/cancer-society.png"
            alt="cancer-society-sarawak"
            height={70}
          />
        </div>
        <div className={`col-auto ${classes.col}`}>
          <StaticImage
            src="../../../../images/unimas.png"
            alt="unimas-sarawak"
            height={50}
          />
        </div>
      </div>
    </section>
  )
}

export default Logos
