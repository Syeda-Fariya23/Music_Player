import MusicPlayer from "./components/MusicPlayer"
import Playlists from "./components/Playlists"
import AllSongs from "./components/AllSongs"

import Navbar from "./components/Navbar"
import{BrowserRouter,Routes,Route} from "react-router-dom"
import{MusicProvider} from "./contexts/MusicContext"

function App()  {
  return (
    <BrowserRouter>
    <MusicProvider>
      <div className="app">
        <Navbar/>
        <main className="main-app">
          <div className="player-section">
            <MusicPlayer />
          </div>
          <div className="content-section">
            <Routes>
              <Route path="/" element={<AllSongs />} />
              <Route path="/playlists" element={<Playlists />} />
            </Routes>
          </div>
        </main>
      </div>
    </MusicProvider>
    </BrowserRouter>
  )
}

export default App