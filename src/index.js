import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Routers from './Routers'
import theme from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  </React.StrictMode>
)
