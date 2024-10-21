import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

function App() {
  return (
    <div>
      {<Header />}
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {<Footer />}
    </div>
  );
}

export default App;
