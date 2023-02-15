import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NetflixNav from "./components/NetflixNav.jsx";
import NetflixTVShowsBar from "./components/NetflixTVShowsBar.jsx";
// import NetflixTrendingNow from "./components/NetflixTrendingNow";
import TrendingNowGallery from "./components/TrendingNowGallery";
import WatchItAgainGallery from "./components/WatchItAgainGallery";
import NewReleasesGallery from "./components/NewReleasesGallery";
import NetflixFooter from "./components/NetflixFooter";

function App() {
  return (
    <div className="App">
      <NetflixNav />
      <NetflixTVShowsBar />
      {/* <NetflixTrendingNow /> */}
      <TrendingNowGallery />
      <WatchItAgainGallery />
      <NewReleasesGallery />
      <NetflixFooter />
    </div>
  );
}

export default App;
