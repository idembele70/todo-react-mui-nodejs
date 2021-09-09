import { createTheme, ThemeProvider } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import theme from "./theme"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals()
