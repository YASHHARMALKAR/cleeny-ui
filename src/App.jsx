import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";  
import ServicesSection from "./components/ServicesSection";
import WorkingProcess from "./components/WorkingProcess";
import Portfolio from "./components/Portfolio";
import CallToAction from "./components/CallToAction";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Brands from "./components/Brands"; 
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ServicesSection />
     <WorkingProcess />
    <Portfolio />
    <CallToAction/>
    <Pricing/>
    <Testimonials/>
    <Blog/>
     <Brands/>
   <Subscribe/>
     <Footer/>
    </>
  );
}

export default App;