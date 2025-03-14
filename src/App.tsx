import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/global.css";
import Home from "./components/Home";
import HomeTwo from "./components/HomeTwo";
import Activities from "./components/Activites";
import Act2 from "./components/Act2";
import Footer from "./components/Footer";

function App() {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Header scrollToSection={scrollToSection} activeSection="" />
      <div id="home">
        <Home />
      </div>
      <div id="work">
        <HomeTwo />
      </div>
      <div id="activities">
        <Activities />
        <Act2 />
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;