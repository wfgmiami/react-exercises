import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import JssProvider from 'react-jss/lib/JssProvider';
import {SheetsRegistry} from 'react-jss/lib/jss';
import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import App from './Components/App';
import theme from './theme';

const app = express();

const port = 3000;

app.use(express.static('public'))


app.use((req,res) => {
  const sheetsRegistry = new SheetsRegistry();

  const html = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </JssProvider>
  )

  res.send(`
  <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>React App</title>
    </head>

    <body>
      <div id="root"></div>
      <script src="main.js"></script>
    </body>

  </html>

  `)
})

app.listen(port, () => `http://localhost${port}`)
