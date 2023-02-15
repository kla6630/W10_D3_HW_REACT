import TrendingNowGallery from "./TrendingNowGallery.jsx";
import WatchItAgainGallery from "./WatchItAgainGallery.jsx";
import NewReleasesGallery from "./NewReleasesGallery.jsx";
import NetflixTVShowsBar from "./NetflixTVShowsBar";

const HomePage = () => {
  return (
    <>
      <NetflixTVShowsBar />
      <TrendingNowGallery />
      <WatchItAgainGallery />
      <NewReleasesGallery />
    </>
  );
};

export default HomePage;
