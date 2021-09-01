import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as classes from "./Logos.module.css"
import {
  Dyslexia,
  Pibakat,
  CrueltyAnimal,
  Unimas,
  MalaysiaRedCreasent,
  SarawakCancerHouse,
} from "../../../../components/Icons/Certick-Icon"

const Logos = props => {
  return (
    <section className={classes.logos}>
      <div className={classes.iconGrid}>
        <div className={classes.iconItem}>
          <StaticImage
            src="../../../../images/iem.png"
            alt="iem-sarawak"
            height={50}
          />
        </div>
        <div className={classes.iconItem}>
          <Dyslexia />
        </div>
        <div className={classes.iconItem}>
          <Unimas />
        </div>
        <div className={classes.iconItem}>
          <CrueltyAnimal />
        </div>
        <div className={classes.iconItem}>
          <MalaysiaRedCreasent />
        </div>
        <div className={classes.iconItem}>
          <Pibakat />
        </div>
        <div className={classes.iconItem}>
          <SarawakCancerHouse />
        </div>
      </div>
    </section>
  )
}

export default Logos
