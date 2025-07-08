import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import GallaryPage from "./pages/GallaryPage";
import EventsPage from "./pages/EventsPage";
import NoticePage from "./pages/NoticePage";
import FacilityPage from "./pages/FacilityPage";
import LoginPage from "./pages/LoginPage";
import GetStartPage from "./pages/GetstartPage";
import RegisterPage from "./pages/RegisterPage";
import CalanderPage from "./pages/CalanderPage";
function App() {
  return (
    <BrowserRouter> 
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/gallery" element={<GallaryPage />} />
        <Route path="/facility" element={<FacilityPage />} />
        <Route path="/event" element={<EventsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/getstart" element={<GetStartPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/calander" element={<CalanderPage/>} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
