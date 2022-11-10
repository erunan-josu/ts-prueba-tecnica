import { Global } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme: ThemeConfig) => [
        {
          '*': {
            fontFamily: 'Regular',
            boxSizing: 'border-box',
          },
          'html, body': {
            padding: 0,
            margin: 0,
            backgroundColor: theme.palette.background,
            color: theme.palette.text,
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
          ul: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Regular',
            src: `url(${theme.typography.fonts.regular})`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Italic',
            src: `url(${theme.typography.fonts.italic})`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Bold',
            src: `url(${theme.typography.fonts.bold})`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'SemiBold',
            src: `url(${theme.typography.fonts.semibold})`,
          },
        },
      ]}
    />
  )
}

export default GlobalStyles
