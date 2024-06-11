import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./router/AppRoutes";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
