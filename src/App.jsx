import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import SectionMovies from "./components/SectionMovies";
import HPGallery from "./components/HPGallery";
import LOTRGallery from "./components/LOTRGallery";
import ShrekGallery from "./components/ShrekGallery";
import { Container } from "react-bootstrap";
import { Component } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";

class App extends Component {
  state = {
    loading: true,
    error: null,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <Container className="text-center mt-5">
          {this.state.loading && <Loading />}
          {this.state.error && <Error />}
        </Container>
        {!this.state.loading && !this.state.error && (
          <>
            <SectionMovies />
            <HPGallery />
            <LOTRGallery />
            <ShrekGallery />
          </>
        )}
        <MyFooter />
      </div>
    );
  }
}

export default App;
