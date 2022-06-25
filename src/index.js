import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {ExploreProvider} from "./Context/ExploreContext";
import {GenreFilterProvider} from "./Context/genreContext";
import {CategoryProvider} from "./Context/HomeCategoryContext";
import {WatchlaterProvider} from "./Context/Watchlater-Context";
import { AuthProvider } from "./Context/Auth-context";
import {HistoryProvider} from "./Context/HistoryContext";
import {PlaylistProvider} from "./Context/PlaylistContext"


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <GenreFilterProvider>
          <ExploreProvider>
            <CategoryProvider>
                <WatchlaterProvider>
                  <HistoryProvider>
                    <PlaylistProvider>
                      <AuthProvider>
                        <App/>
                      </AuthProvider>
                    </PlaylistProvider>
                  </HistoryProvider>
                </WatchlaterProvider>
            </CategoryProvider>
          </ExploreProvider>
       </GenreFilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
