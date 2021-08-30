import React from "react"
import "./Base-Switcher.css"
import { Switch } from "antd"
import { useTheme } from "../../context/context"

const BaseSwitch = ({ classes, onChange, color }) => {
  const right = "Light"
  const left = "Dark"
  const [isDark, setIsDark] = useTheme()

  const handleDarkTheme = () => {
    setIsDark(!isDark)
  }
  return (
    <div className={`Base-Switch ${classes}`}>
      <div className="wrapper">
        <div className="left">
          <p className="text">{left}</p>
        </div>
        <div className="middle">
          <Switch defaultChecked onChange={handleDarkTheme} className={color} />
        </div>
        <div className="right">
          <p className="text">{right}</p>
        </div>
      </div>
    </div>
  )
}

export default BaseSwitch
