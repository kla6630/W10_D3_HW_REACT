//Sezione Casuale, clone di uno degli altri jsx creati in precendenza e leggermente modificata

import React, { Component } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

class MoviesList extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    errorMessage: "",
  };

  fetchMovies = async () => {
    try {
      const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=eb46811f&s=TV%20Show");

      if (response.ok) {
        const data = await response.json();

        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `Error loading content. ERROR: ${response.status}`,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `FATAL ERROR: ${error.message}`,
      });
    }
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  render() {
    const { movies, isLoading, hasError, errorMessage } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (hasError) {
      return <div>{errorMessage}</div>;
    }

    return (
      <Container>
        {" "}
        <div expand="lg" className="mx-4">
          <h4 id="my_h4">TV SHOWS SECTION</h4>

          <Row className="my-3">
            {movies.slice([0]).map((movie) => (
              <Col key={movie.imdbID} xs={12} sm={6} lg={3} xl={2} className="mb-4" id="myimage">
                <Image src={movie.Poster} alt="movie" fluid />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

export default MoviesList;
