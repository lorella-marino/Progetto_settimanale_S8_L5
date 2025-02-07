import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import SectionMovies from "./components/SectionMovies";
import HPGallery from "./components/HPGallery";
import LOTRGallery from "./components/LOTRGallery";
import ShrekGallery from "./components/ShrekGallery";

function App() {
  return (
    <div>
      <MyNavbar />
      <SectionMovies />
      <HPGallery />
      <LOTRGallery />
      <ShrekGallery />
      <MyFooter />
    </div>
  );
}

export default App;
