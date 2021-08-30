import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LoginScreen from "../screens/LoginScreen"

const LoginPage = () => {
  return (
    <Layout>
      <Seo title="Organizer & User" />
      <LoginScreen />
    </Layout>
  )
}

export default LoginPage
