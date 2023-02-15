import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";

function NetflixTVShowsBar() {
  return (
    <div className="container-fluid d-flex justify-content-between px-4">
      <div className="d-flex flex-row flex-nowrap">
        <h2 href="#TvShows" className="mb-4">
          TV Shows
        </h2>

        <Dropdown className="ml-4 mt-1">
          <Dropdown.Toggle
            className="btn btn-secondary btn-sm rounded-0 bg-dark mx-4"
            idName="dropdownMenuButton"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu className="bg-dark" aria-labelledby="dropdownMenuButton">
            <Dropdown.Item className="text-white bg-dark" href="#">
              Comedy
            </Dropdown.Item>
            <Dropdown.Item className="text-white bg-dark" href="#">
              Drama
            </Dropdown.Item>
            <Dropdown.Item className="text-white bg-dark" href="#">
              Thriller
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div class="d-flex flex-row flex-center">
        <BsFillGridFill className="mx-2" id="fill_grid" />
        <BsFillGrid3X3GapFill className="mx-2" id="fill_grid" />
      </div>
    </div>
  );
}

export default NetflixTVShowsBar;
