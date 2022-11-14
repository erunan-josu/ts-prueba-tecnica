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
