import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import getTheme from './base'

type ContextValueType = {
  currentTheme: string
  setTheme: (name: string) => void
}
export const CustomThemeContext = React.createContext({
  currentTheme: 'white',
  setTheme: (name: string) => {},
})

const CustomThemeProvider = (props: any) => {
  const { children } = props

  const currentTheme = localStorage.getItem('appTheme') || 'white'

  const [themeName, _setThemeName] = useState(currentTheme)

  const theme = getTheme(themeName)

  const setThemeName = (name: string) => {
    localStorage.setItem('appTheme', name)
    _setThemeName(name)
  }

  const contextValue: ContextValueType = {
    currentTheme: themeName,
    setTheme: setThemeName,
  }

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export default CustomThemeProvider
