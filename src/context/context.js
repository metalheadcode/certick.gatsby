import React from "react"

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false)
  return (
    <>
      <ThemeContext.Provider value={[isDark, setIsDark]}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
