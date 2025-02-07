import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import SectionTvShows from "./components/SectionTvShows";

function App() {
  return (
    <div>
      <MyNavbar />
      <SectionTvShows />
      <MyFooter />
    </div>
  );
}

export default App;
