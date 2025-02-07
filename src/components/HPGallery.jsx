import { Container, Row, Col } from "react-bootstrap";
import Copertina from "./Copertina";
import { Component } from "react";

class HPGallery extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?s=Harry%20Potter&apikey=1a15f902`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          this.setState({ movies: data.Search.slice(0, 6) });
        }
      })
      .catch((error) => console.error("Errore", error));
  }

  render() {
    return (
      <Container className="my-3">
        <h5 className="mb-3 text-white">Harry Potter</h5>
        <Row>
          {this.state.movies.map((movie) => (
            <Col key={movie.imdbID} xs={6} sm={4} md={4} lg={2} className="mb-4">
              <Copertina poster={movie.Poster} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default HPGallery;
