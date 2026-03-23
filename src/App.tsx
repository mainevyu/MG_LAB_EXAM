import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact.tsx";
import BookRequest from "./pages/BookRequest.tsx";
import EventFeedback from "./pages/EventFeedback.tsx";
import NavBar from "./pages/NavBar.tsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-request" element={<BookRequest/>} />
        <Route path="/event-feedback" element={<EventFeedback/>} />
      </Routes>
  
  </BrowserRouter>
  );
}

export default App;