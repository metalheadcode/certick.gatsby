import React from "react"
import { createContext, useContextSelector } from "use-context-selector"

const ThemeContext = createContext()

export const ThemeProvider = ({ children, theme }) => {
  return (
    <>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </>
  )
}

export const useTheme = selector => useContextSelector(ThemeContext)
