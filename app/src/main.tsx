import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme.js'
import GlobalStyles from './styles/GlobalStyles'
import { createTheme } from './styles/utils'
/* import GlobalStyles from './styles/GlobalStyles' */
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(theme, null)}>
      <GlobalStyles />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
