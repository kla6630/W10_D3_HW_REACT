import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NetflixNav from "./components/NetflixNav.jsx";
import NetflixTVShowsBar from "./components/NetflixTVShowsBar.jsx";
import HomePage from "./components/HomePage.jsx";

import NetflixFooter from "./components/NetflixFooter";

import NotFound from "./components/NotFound";
import TvShows from "./components/TvShows";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NetflixNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tv-shows" element={<TvShows />} />
          {/* {<Route path="/movies" element={<Movies />} />
          <Route path="/recently-added" element={<RecentlyAdded />} />*/}
          <Route path="*" element={<NotFound spacings="mt-5 pt-5" />} /> {/*collegamento alla pagina 404 */}
        </Routes>

        
        <NetflixFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
