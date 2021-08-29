import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CTALayoutsTypeEighth from "../layouts/CTALayouts/CTALayoutsTypeEighth/CTALayoutsTypeEighth"

const LoginPage = () => {
  return (
    <Layout>
      <Seo title="Organizer & User" />
      <CTALayoutsTypeEighth dark={true} />
    </Layout>
  )
}

export default LoginPage
