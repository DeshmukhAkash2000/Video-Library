import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {ExploreProvider} from "./Context/ExploreContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ExploreProvider>
       <App/>
     </ExploreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
