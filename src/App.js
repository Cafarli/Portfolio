import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutMe from "./aboutme";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Navigate to="/about-me" />} />

        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
