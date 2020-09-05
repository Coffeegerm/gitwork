import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/main.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { JobSearchProvider } from "./context/jobSearchContext";
import { PaginationProvider } from "./context/paginationContext";

ReactDOM.render(
  <React.StrictMode>
    <PaginationProvider>
      <JobSearchProvider>
        <App />
      </JobSearchProvider>
    </PaginationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
