import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import App from './Components/App'
import theme from './theme';

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
