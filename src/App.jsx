import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./components/screens/HomeScreen";
import AboutScreen from "./components/screens/AboutScreen";
import ContactScreen from "./components/screens/ContactScreen";
import ServicesScreen from "./components/screens/ServicesScreen";
import Footer from "./components/Footer/Footer";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import HireStaff from "./components/HireStaff/HireStaff";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import ClientTestimonials from "./components/ClientTestimonials/ClientTestimonials";
import LifeAtSuKaj from "./components/LifeAtSuKaj/LifeAtSuKaj";
import Careers from "./components/Career/Careers";
import Portfolio from "./components/Portfolio/Portfolio";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Projects from "./components/Projects/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="pt-20 md:pt-20 bg-black text-teal-200">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactScreen />} />

          {/* Company Info Link */}
          <Route path="/LifeAtSuKaj" element={<LifeAtSuKaj />} />
          <Route path="/ClientTestimonials" element={<ClientTestimonials />} />
          <Route path="/teamMember" element={<MeetTheTeam />} />

          {/* additional Link */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hire-staff" element={<HireStaff />} />

          {/* coming soon */}
          <Route path="/coming-soon" element={<ComingSoon />} />

          {/* page not found404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
