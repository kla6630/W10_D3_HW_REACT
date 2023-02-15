//VERSIONE STATICA DI TRENDING NOW PER PROVA, NON VERRA' VISUALIZZATA NELLA PAGINA REACT FINALE//

import React from "react";

function NetflixTrendingNow() {
  return (
    <div expand="lg" className="px-4">
      <h4>Trending Now</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={"./assets/img/1.png"} alt="movie" />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={"./assets/img/2.png"} alt="movie" />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={"./assets/img/3.png"} alt="movie" />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={"./assets/img/4.png"} alt="movie" />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={"./assets/img/5.png"} alt="movie" />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={"./assets/img/6.png"} alt="movie" />
        </div>
      </div>
    </div>
  );
}

export default NetflixTrendingNow;
