import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./router/AppRoutes";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import Contact from "./pages/contact/Contact";
import Subscriber from "./pages/subscriber/Subscriber";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribers" element={<Subscriber/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
