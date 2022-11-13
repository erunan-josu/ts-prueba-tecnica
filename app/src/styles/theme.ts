import { spacing } from './utils'

export const BREAKPOINT = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
}

export const ZINDEX = {
  base: 100,
  modal: 200,
  spinner: 300,
}

const PRIMARY_PALETTE = {
  pink: '#ff758f',
}

const SECONDARY_PALETTE = {
  moon: '#999',
  snow: 'f4f4f4',
  clear: '#f8f8f8',
}

const ALERT_PALETTE = {
  error: '#e74c3c',
  success: '#2ecc71',
  warning: '#f1c40f',
}

export const theme = {
  palette: {
    background: SECONDARY_PALETTE.clear,
    title: PRIMARY_PALETTE.pink,
    text: SECONDARY_PALETTE.snow,
    button: {
      background: PRIMARY_PALETTE.pink,
      border: SECONDARY_PALETTE.snow,
      text: SECONDARY_PALETTE.clear,
    },
    alert: {
      error: ALERT_PALETTE.error,
      success: ALERT_PALETTE.success,
      warning: ALERT_PALETTE.warning,
    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINT.tablet}px)`,
    tablet: `@media (min-wdith: ${BREAKPOINT.tablet}px) and (max-width: ${BREAKPOINT.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINT.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: '/fonts/Monserrat/Monserrat-Bold.ttf',
      semibold: '/fonts/Roboto/Roboto-Bold.ttf',
      regular: '/fonts/Roboto/Roboto-Regular.ttf',
      italic: '/fonts/Roboto/Roboto-Italic.ttf',
      light: '/fonts/Roboto/Roboto-Thin.ttf',
    },
  },
  spacing,
}
