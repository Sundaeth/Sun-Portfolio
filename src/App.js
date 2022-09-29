import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./component/NavBar";
import { Banner } from "./component/Banner";
import { Footer } from "./component/Footer";
import { Skills } from "./component/Skills";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
