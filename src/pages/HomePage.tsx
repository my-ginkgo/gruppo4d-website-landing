import About from "../components/About";
import BookAppointment from "../components/BookAppointment";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Methodology from "../components/Methodology";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Philosophy from "../components/Philosophy";
import Services from "../components/Services";
import Vision from "../components/Vision";

const HomePage = () => {
  return (
    <div className="relative">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Vision />
      <Philosophy />
      <Methodology />
      <BookAppointment />
      <Services />
      <CaseStudies />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
