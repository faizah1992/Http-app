import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Raven from 'raven-js'

Raven.config('https://05323d37c9a847eba9daaaab1e6171a9@sentry.io/1249956', {
    release: '1-0-0',
    environment: 'development-test',
}).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
