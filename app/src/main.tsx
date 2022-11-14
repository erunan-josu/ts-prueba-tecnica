import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme.js'
import GlobalStyles from './styles/GlobalStyles'
import { createTheme } from './styles/utils'
import { store } from './store/store'
import Home from './pages/Home'
import Details from './pages/Details'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(theme, null)}>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/:name" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
