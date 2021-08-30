import React from "react"
import FeaturesLayoutsTypeFourteen from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeFourteen/FeaturesLayoutsTypeFourteen"
import FeaturesLayoutsTypeSecond from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeSecond/FeatureLayoutsTypeSecond"
import FeaturesLayoutsTypeSeventeenth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeSeventeenth/FeaturesLayoutsTypeSeventeenth"
import FeaturesLayoutsTypeTenth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeTenth/FeaturesLayoutsTypeTenth"
import FeaturesLayoutsTypeTwelve from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeTwelve/FeaturesLayoutsTypeTwelve"
import FeaturesLayoutsTypeNinth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeNinth/FeaturesLayoutsTypeNinth"
import CTALayoutsTypeTwelve from "../layouts/CTALayouts/CTALayoutsTypeTwelve/CTALayoutsTypeTwelve"
import { useTheme } from "../context/context"

const HomeScreen = () => {
  const [isDark] = useTheme()
  return (
    <>
      <FeaturesLayoutsTypeSecond dark={isDark} />
      <FeaturesLayoutsTypeNinth dark={isDark} />
      <FeaturesLayoutsTypeTwelve dark={isDark} />
      <FeaturesLayoutsTypeSeventeenth dark={isDark} />
      <FeaturesLayoutsTypeFourteen dark={isDark} />
      <FeaturesLayoutsTypeTenth dark={isDark} />
      <CTALayoutsTypeTwelve dark={isDark} />
    </>
  )
}

export default HomeScreen
