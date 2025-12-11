import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import PillarGrid from "./Components/PillarGrid.jsx";
import ScheduleSection from "./Components/ScheduleSection.jsx";
import ProgramCards from "./Components/ProgramCards.jsx";
import ProjectShowcase from "./Components/ProjectShowcase.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <PillarGrid />
      <ScheduleSection />
      <ProgramCards />
      <ProjectShowcase />
      <Testimonials />
      <Footer />
    </div>
  );
}
