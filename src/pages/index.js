import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HomeScreen from "../screens/HomeScreen"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HomeScreen />
    </Layout>
  )
}
export default IndexPage
