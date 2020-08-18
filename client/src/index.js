import React from "react"
import ReactDOM from "react-dom"
import "./styles/global.scss"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { StaticRouter } from "react-router"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

ReactDOM.render(
	<React.StrictMode>
		<StaticRouter basename="/">
			<App />
		</StaticRouter>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
