import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import FeaturesLayoutsTypeFourteen from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeFourteen/FeaturesLayoutsTypeFourteen"
import FeaturesLayoutsTypeSecond from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeSecond/FeatureLayoutsTypeSecond"
import FeaturesLayoutsTypeSeventeenth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeSeventeenth/FeaturesLayoutsTypeSeventeenth"
import FeaturesLayoutsTypeTenth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeTenth/FeaturesLayoutsTypeTenth"
import FeaturesLayoutsTypeTwelve from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeTwelve/FeaturesLayoutsTypeTwelve"
import FeaturesLayoutsTypeNinth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeNinth/FeaturesLayoutsTypeNinth"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <FeaturesLayoutsTypeSecond dark={false} />
      <FeaturesLayoutsTypeNinth dark={true} />
      <FeaturesLayoutsTypeTwelve dark={false} />
      <FeaturesLayoutsTypeSeventeenth dark={true} />
      <FeaturesLayoutsTypeFourteen />
      <FeaturesLayoutsTypeTenth dark={true} />
    </Layout>
  )
}
export default IndexPage
