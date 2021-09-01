import React from "react"
import * as classes from "./Header.module.css"
import { Nav, Navbar } from "react-bootstrap"
import Button from "../../components/Button/Button.js"
import { AppLogo } from "../../components/Icons/Icons"
import { Container } from "reactstrap"
import { useTheme } from "../../context/context"
import BaseSwitch from "../../components/Base-Switcher/Base-Switcher"

const Header = () => {
  const [dark] = useTheme()

  return (
    <div className={`${classes.header} ${dark ? `dark ${classes.dark}` : ""}`}>
      <div
        className={
          dark ? `${classes.darkNavbar}` : `${classes.transparentNavbar}`
        }
      >
        <Container>
          <Navbar collapseOnSelect expand="lg" className="p-0">
            <div className={classes.wrapper}>
              <Navbar.Brand href="/" aria-label="Certick">
                <AppLogo dark={dark} />
              </Navbar.Brand>

              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="custom-toggler"
              />
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link eventKey="1" href="/#why">
                  Why
                </Nav.Link>
                <Nav.Link eventKey="2" href="/#how">
                  How
                </Nav.Link>
                <Nav.Link eventKey="3" href="/#what">
                  What
                </Nav.Link>
                <Nav eventKey="4">
                  <a href="https://wa.me/60146884403?text=I'm%20interested%20to%20talk%20more%20about%20Certick.">
                    Contact
                  </a>
                </Nav>
              </Nav>
              <div className={classes.mangkuk}>
                <BaseSwitch dark={true} />
                <Button
                  link={true}
                  target={""}
                  to="/login-page"
                  type={"submit"}
                  classes={"primary small simple w-100"}
                  value={"Login Here 😉"}
                />
              </div>
              <div className={classes.hiddenElements}>{/* <Socials /> */}</div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  )
}

export default Header
