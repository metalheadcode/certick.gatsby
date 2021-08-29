import * as React from "react"
import PropTypes from "prop-types"
import Header from "../layouts/Header/Header"
import FootersLayoutsTypeNinth from "../layouts/FooterLayouts/FootersLayoutsTypeNinth/FootersLayoutsTypeNinth"
import CTALayoutsTypeTwelve from "../layouts/CTALayouts/CTALayoutsTypeTwelve/CTALayoutsTypeTwelve"
import "./layout.css"
import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <CTALayoutsTypeTwelve dark={false} />
      <FootersLayoutsTypeNinth />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
