import "./App.css";
import { Sidebar } from "./Component/Sidebar/Sidebar";
import {Routes, Route} from 'react-router-dom'
import {Header} from "./Component/Header/Header"
import { HomePage } from "./Pages/HomePage/HomePage";
import {ExplorePage} from "./Pages/ExplorePage/ExplorePage"
import {SingleVideo} from "./Pages/Single-Video/Single-Video"
import {WatchLater} from "./Pages/Watchlater/Watchlater"
import { LikeVideo } from "./Pages/LikeVideo/LikeVideo";
import {AuthPage} from "./Pages/Auth-Page/Auth-Page"
import { HistoryPage } from "./Pages/HistoryPage/HistoryPage";
import {MainPlaylist} from "./Pages/Playlist/MainPlaylist/MainPlaylist";
import {ShowingPlaylist} from "./Pages/Playlist/ShowingPlaylist/ShowingPlaylist"
import { ErrorPage } from "./Pages/404_Page/404_Page";
import { Login } from "./Pages/Auth-Page/Login/login";
import { SignUp } from "./Pages/Auth-Page/Signup/SignUp";
import {RequiresAuth} from "./Component/requireAuth"


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/ExplorePage" element={<ExplorePage/>}></Route>
        <Route path="/singlevideo/:VideoId" element={<SingleVideo/>}></Route>     
        <Route path="*" element={<ErrorPage/>}></Route>
        <Route path="/Showplaylist/:playlistId" element={<ShowingPlaylist/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/auth" element={<AuthPage/>}></Route>
       
       
        <Route
          path="/Watchlater"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />

        <Route
          path="/likevideo"
          element={
            <RequiresAuth>
              <LikeVideo />
            </RequiresAuth>
          }
        />

       <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <MainPlaylist />
            </RequiresAuth>
          }
        />

       <Route
          path="/historypage"
          element={
            <RequiresAuth>
              <HistoryPage />
            </RequiresAuth>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
