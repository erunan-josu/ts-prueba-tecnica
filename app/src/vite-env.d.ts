/// <reference types="vite/client" />

type ThemeConfig = typeof themeConfig
declare module '@emotion/react' {
  export { Global, ThemeProvider }
  export interface Theme extends ThemeConfig {}
}

type Phone = {
  id: number
  name: string
  manufacturer: string
  description: string
  color: string
  price: number
  imageFileName: string
  screen: string
  processor: string
  ram: number
}
/* type Theme = {
  palette: {
    background: string
    title: string
    text: String
    button: {
      background: string
      border: string
      text: string
    }
    alert: {
      error: string
      success: string
      warning: string
    }
  }
  mediaquery: {
    mobile: string
    tablet: string
    desktop: string
  }
  typography: {
    fonts: {
      bold: string
      semibold: string
      regular: string
      italic: string
      light: string
    }
  }
  spacing: any
} */
