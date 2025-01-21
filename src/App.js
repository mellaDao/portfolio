import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Work from "./Work";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

function App() {
  return (
    <HashRouter>
      {<Header />}
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {<Footer />}
    </HashRouter>
  );
}

export default App;
