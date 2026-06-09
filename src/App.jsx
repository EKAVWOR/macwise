import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import WhatsAppButton from "./component/WhatsAppButton.jsx";

// Main Pages
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import News from "./pages/News.jsx";
import OurPackages from "./pages/OurPackages.jsx";
import OurServices from "./pages/OurServices.jsx";
import Testimonies from "./pages/Testimonies.jsx";

// Service Pages
import Flight from "./pages/Flight.jsx";
import CustomizedTours from "./pages/CustomizedTours.jsx";
import HotelReservations from "./pages/HotelReservations.jsx";
import TravelInsurance from "./pages/TravelInsurance.jsx";
import VacationPackages from "./pages/VacationPackages.jsx";
import VisaProcurement from "./pages/VisaProcurement.jsx";

// 404 Page (optional but recommended)
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* ── Main Navigation Pages ─────────────────────────── */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/packages" element={<OurPackages />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/testimonies" element={<Testimonies />} />

        {/* ── Service Dropdown Pages ────────────────────────── */}
        <Route path="/services/flights" element={<Flight />} />
        <Route path="/services/tours" element={<CustomizedTours />} />
        <Route path="/services/hotels" element={<HotelReservations />} />
        <Route path="/services/insurance" element={<TravelInsurance />} />
        <Route path="/services/packages" element={<VacationPackages />} />
        <Route path="/services/visa" element={<VisaProcurement />} />

        {/* ── 404 Page (Catch-All) ──────────────────────────── */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* WhatsApp Floating Button - Shows on all pages */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;