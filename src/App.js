import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./webpage/layout.js";
import Home from "./webpage/home.js";
import About from "./webpage/about.js";
import Contact from "./webpage/contact.js";
import Nopage from "./webpage/nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="test-react" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
