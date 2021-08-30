import * as React from "react"
import PropTypes from "prop-types"
import Header from "../layouts/Header/Header"
import FootersLayoutsTypeNinth from "../layouts/FooterLayouts/FootersLayoutsTypeNinth/FootersLayoutsTypeNinth"
import "./layout.css"
import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeProvider } from "../context/context"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <main>{children}</main>
      <FootersLayoutsTypeNinth />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
