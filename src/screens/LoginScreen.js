import React from "react"
import { useTheme } from "../context/context"
import CTALayoutsTypeEighth from "../layouts/CTALayouts/CTALayoutsTypeEighth/CTALayoutsTypeEighth"

const LoginScreen = () => {
  const [isDark] = useTheme()
  return (
    <>
      <CTALayoutsTypeEighth dark={isDark} />
    </>
  )
}

export default LoginScreen
