import { createTheme } from '@mui/material'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h2: {
      fontSize: 28,
      fontWeight: 500,
      margin: '1rem 0'
    },
    h3: {
      fontSize: 24,
      fontWeight: 500,
      margin: '1rem 0'
    },
    h4: {
      fontSize: 18,
      marginBottom: '1rem'
    },
    body2: {
      color: '#696969'
    }
  },
})
