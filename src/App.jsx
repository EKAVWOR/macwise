import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WhatsAppButton from "./component/WhatsAppButton.jsx"
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Homepage from "./pages/Homepage.jsx";
import News from "./pages/News.jsx";
import OurPackages from "./pages/OurPackages.jsx";
import OurServices from "./pages/OurServices.jsx";
import Testimonies from "./pages/Testimonies.jsx";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/packages" element={<OurPackages />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/testimonies" element={<Testimonies />} />
      </Routes>
      <WhatsAppButton />
    </Router>
    
  );
}

export default App;