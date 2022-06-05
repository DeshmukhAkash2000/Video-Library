import "./App.css";
import { Sidebar } from "./Component/Sidebar/Sidebar";
import {Routes, Route} from 'react-router-dom'
import {Header} from "./Component/Header/Header"
import { HomePage } from "./Pages/HomePage/HomePage";
import {ExplorePage} from "./Pages/ExplorePage/ExplorePage"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="ExplorePage" element={<ExplorePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
