import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/*" element={<About />} />
        <Route path="/news/*" element={<div>News Page</div>} />
        <Route path="/administration/*" element={<div>Admin Page</div>} />
        <Route path="/school-cooperative/*" element={<div>School Cooperative Page</div>} />
        <Route path="/achievements/*" element={<div>Achievements Page</div>} />
        <Route path="/contact-us/*" element={<div>Contact Us Page</div>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
